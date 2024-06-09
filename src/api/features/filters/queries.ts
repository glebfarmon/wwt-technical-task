import { useQuery } from '@tanstack/react-query'

import type { FilterItem } from '@api/types/Filter'

const getFilters = async () => {
	return fetch('filterData.json').then(res => res.json())
}

export const useGetFilters = () =>
	useQuery<{ filterItems: FilterItem[] }>({
		queryKey: ['filters'],
		queryFn: getFilters
	})
