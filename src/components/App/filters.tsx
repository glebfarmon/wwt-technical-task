import { useTranslation } from 'react-i18next'

import { Box, Text } from '@chakra-ui/react'

import { useStoreSelectors } from '@components/App/modals/filter/store'

export const Filters = () => {
	const { t } = useTranslation()
	const filters = useStoreSelectors.use.storedFilters()

	return (
		<Box marginTop={'5'}>
			<Text>{t('filter:selected_filters')}</Text>
			{filters.map(filter => (
				<Box
					key={filter.id}
					marginY={3}
				>
					<Text fontWeight={'bold'}>{filter.id}</Text>
					{filter.optionsIds.map(option => (
						<Text key={option}>{option}</Text>
					))}
				</Box>
			))}
		</Box>
	)
}
