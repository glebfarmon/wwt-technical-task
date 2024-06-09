import { useTranslation } from 'react-i18next'

import { Box, Button } from '@chakra-ui/react'
import { Modals } from '@features/modal/services/manager'
import { useStoreSelectors } from '@features/modal/services/store'

import { Filters } from '@components/App/filters'

export const App = () => {
	const { t } = useTranslation()
	const open = useStoreSelectors.use.open()

	return (
		<Box
			maxW="90rem"
			mx="auto"
			minH="100dvh"
		>
			<Button
				mt={6}
				colorScheme={'brand'}
				onClick={() => open(Modals.FilterModal, {})}
			>
				{t('filter:open')}
			</Button>
			<Filters />
		</Box>
	)
}
