import type { ComponentProps } from 'react'

import { ModalManager, Modals } from '@features/modal/services/manager'
import { createSelectors } from '@hooks/createSelectors'
import { generateId } from '@hooks/generateId'
import { create } from 'zustand'

interface IModal {
	id: string
	component: () => JSX.Element
}

type TStore = {
	modals: IModal[]
	open: <T extends Modals>(
		type: T,
		props: Omit<ComponentProps<(typeof ModalManager)[T]>, 'onCloseHandler'>
	) => void
	closeModal: (id: string, value?: unknown) => void
	closeModals: () => void
}

const useStore = create<TStore>(set => ({
	modals: [],
	open: (type, props) => {
		const id = generateId(6)
		const Component = ModalManager[type as Modals]

		set(state => ({
			modals: [
				...state.modals,
				{
					id,
					component: () => (
						<Component
							// eslint-disable-next-line @typescript-eslint/no-explicit-any
							{...(props as any)}
							onCloseHandler={() => state.closeModal(id)}
						/>
					)
				}
			]
		}))
	},
	closeModal: id =>
		set(state => ({
			modals: state.modals.filter(modal => modal.id !== id)
		})),
	closeModals: () =>
		set(() => ({
			modals: []
		}))
}))

export const useStoreSelectors = createSelectors(useStore)
