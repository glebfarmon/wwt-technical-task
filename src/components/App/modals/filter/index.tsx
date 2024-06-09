import { useTranslation } from 'react-i18next'

import Modal from '@features/modal'
import { useCloseModal } from '@features/modal/hooks/closeModal'
import type { IModal } from '@features/modal/types/modal'

import { ModalBody } from '@components/App/modals/filter/body'
import { ModalFooter } from '@components/App/modals/filter/footer'
import { useStoreSelectors } from '@components/App/modals/filter/store'

export const FilterModal = ({ onCloseHandler }: IModal) => {
	const { t } = useTranslation()

	const rollbackFilters = useStoreSelectors.use.rollbackFilters()
	const { isOpen, closeModal } = useCloseModal(onCloseHandler, rollbackFilters)

	return (
		<Modal
			isOpen={isOpen}
			onClose={closeModal}
			scrollBehavior={'inside'}
		>
			<Modal.Header>{t('filter:title')}</Modal.Header>
			<ModalBody />
			<ModalFooter />
		</Modal>
	)
}
