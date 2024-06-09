import { memo } from 'react'

import { Checkbox as ChakraCheckbox } from '@chakra-ui/react'

import type { FilterChooseOption } from '@api/types/Filter'

import { useStoreSelectors } from '@components/App/modals/filter/store'

interface ICheckbox {
	filterId: string
	option: FilterChooseOption
}

const Checkbox = memo(({ filterId, option }: ICheckbox) => {
	const onCheckChange = useStoreSelectors.use.onCheckChange()
	const filters = useStoreSelectors.use.filters()

	const isChecked = (filter: string, option: string) =>
		filters.some(fi => fi.id === filter && fi.optionsIds.includes(option))

	return (
		<ChakraCheckbox
			width={'fit-content'}
			isChecked={isChecked(filterId, option.id)}
			onChange={e => onCheckChange(e.target.checked, filterId, option.id)}
			name={option.id}
			key={option.id}
		>
			{option.name}
		</ChakraCheckbox>
	)
})

Checkbox.displayName = 'Checkbox'

export { Checkbox }
