import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import Modal from '@features/modal'

import { useGetFilters } from '@api/features/filters/queries'

import { Checkbox } from '@components/App/modals/filter/checkbox'

export const ModalBody = () => {
	const { data } = useGetFilters()

	return (
		<Modal.Body>
			{data &&
				data.filterItems.length > 0 &&
				data?.filterItems.map(filter => (
					<Box
						key={filter.id}
						borderBottom={'1px'}
						borderBottomColor={'gray.200'}
						paddingY={5}
					>
						<Text
							fontSize={'lg'}
							fontWeight={'medium'}
							marginBottom={3}
						>
							{filter.name}
						</Text>
						<SimpleGrid
							columns={{ base: 1, sm: 2, md: 3 }}
							rowGap={3}
						>
							{filter.options.map(option => (
								<Checkbox
									filterId={filter.id}
									option={option}
									key={option.id}
								/>
							))}
						</SimpleGrid>
					</Box>
				))}
		</Modal.Body>
	)
}
