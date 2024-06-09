import { createSelectors } from '@hooks/createSelectors'
import { create } from 'zustand'
import { StateStorage, createJSONStorage, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { FilterType } from '@api/types/Filter'
import type { SearchRequestFilter } from '@api/types/SearchRequest/SearchRequestFilter'

type TStore = {
	storedFilters: SearchRequestFilter
	filters: SearchRequestFilter
	setFilters: (filterId: SearchRequestFilter) => void
	addFilter: (filterId: string, optionId: string) => void
	removeFilter: (filterId: string, optionId: string) => void
	onCheckChange: (checked: boolean, filterId: string, optionId: string) => void
	resetFilters: () => void
	rehydrateFilters: () => void
	rollbackFilters: () => void
}

const hashStorage: StateStorage = {
	getItem: (key): string => {
		const searchParams = new URLSearchParams(location.hash.slice(1))
		const storedValue = searchParams.get(key) ?? ''
		return JSON.parse(storedValue)
	},
	setItem: (key, newValue): void => {
		const searchParams = new URLSearchParams(location.hash.slice(1))
		searchParams.set(key, JSON.stringify(newValue))
		location.hash = searchParams.toString()
	},
	removeItem: (key): void => {
		const searchParams = new URLSearchParams(location.hash.slice(1))
		searchParams.delete(key)
		location.hash = searchParams.toString()
	}
}

const useStore = create<TStore>()(
	immer(
		persist(
			(set, get) => ({
				storedFilters: [],
				filters: [],
				setFilters: filters => set(() => ({ filters })),
				addFilter: (filterId, optionId) =>
					set(state => {
						const existingFilterIndex = state.filters.findIndex(
							fi => fi.id === filterId
						)
						if (existingFilterIndex !== -1) {
							state.filters[existingFilterIndex].optionsIds.push(optionId)
						} else {
							state.filters.push({
								id: filterId,
								type: FilterType.OPTION,
								optionsIds: [optionId]
							})
						}
					}),
				removeFilter: (filterId, optionId) =>
					set(state => {
						const existingFilterIndex = state.filters.findIndex(
							fi => fi.id === filterId
						)
						if (existingFilterIndex !== -1) {
							const existingFilter = state.filters[existingFilterIndex]
							existingFilter.optionsIds = existingFilter.optionsIds.filter(
								opt => opt !== optionId
							)
							if (existingFilter.optionsIds.length === 0) {
								state.filters.splice(existingFilterIndex, 1)
							}
						}
					}),
				onCheckChange: (checked, filterId, optionId) => {
					if (checked) {
						get().addFilter(filterId, optionId)
					} else {
						get().removeFilter(filterId, optionId)
					}
				},
				resetFilters: () =>
					set(state => {
						state.filters = []
					}),
				rehydrateFilters: () =>
					set(state => ({
						storedFilters: state.filters
					})),
				rollbackFilters: () =>
					set(state => ({
						filters: state.storedFilters
					}))
			}),
			{
				name: 'filters',
				storage: createJSONStorage(() => hashStorage),
				partialize: state => ({ storedFilters: state.storedFilters }),
				onRehydrateStorage: () => state => {
					if (state?.filters) {
						state.setFilters(state.storedFilters)
					}
				}
			}
		)
	)
)

export const useStoreSelectors = createSelectors(useStore)
