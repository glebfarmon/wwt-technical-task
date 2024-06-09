import { Button, Text } from '@chakra-ui/react'
import Modal from '@features/modal'
import { Modals } from '@features/modal/services/manager'
import { useStoreSelectors as useModalStoreSelector } from '@features/modal/services/store'
import { t } from 'i18next'

import { useStoreSelectors } from '@components/App/modals/filter/store'

export const ModalFooter = () => {
	const resetFilters = useStoreSelectors.use.resetFilters()
	const rehydrateFilters = useStoreSelectors.use.rehydrateFilters()
	const rollbackFilters = useStoreSelectors.use.rollbackFilters()

	const open = useModalStoreSelector.use.open()
	const closeModals = useModalStoreSelector.use.closeModals()

	return (
		<Modal.Footer
			position={'relative'}
			gap={2}
			flexDirection={{ base: 'column', md: 'row' }}
		>
			<Button
				colorScheme={'brand'}
				m={'auto'}
				px={12}
				onClick={() =>
					open(Modals.ConfirmModal, {
						title: t('filter:confirm_title'),
						accept: {
							title: t('filter:accept_title'),
							function: () => {
								rehydrateFilters()
								closeModals()
							}
						},
						cancel: {
							title: t('filter:cancel_title'),
							function: () => {
								rollbackFilters()
								closeModals()
							}
						}
					})
				}
			>
				{t('filter:apply')}
			</Button>
			<Text
				color={'teal.500'}
				textDecoration={'underline'}
				cursor={'pointer'}
				position={{ md: 'absolute' }}
				right={0}
				onClick={() => resetFilters()}
			>
				{t('filter:clear_params')}
			</Text>
		</Modal.Footer>
	)
}
