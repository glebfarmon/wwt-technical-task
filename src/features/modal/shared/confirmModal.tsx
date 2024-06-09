import { Button } from '@chakra-ui/react'
import Modal from '@features/modal'
import { useCloseModal } from '@features/modal/hooks/closeModal'
import type { IModal } from '@features/modal/types/modal'

interface IConfirmModal {
	title: string
	cancel: { title: string; function: () => void }
	accept: { title: string; function: () => void }
}

export const ConfirmModal = ({
	onCloseHandler,
	title,
	cancel,
	accept
}: IModal & IConfirmModal) => {
	const { isOpen, closeModal } = useCloseModal(onCloseHandler)

	return (
		<Modal
			isOpen={isOpen}
			onClose={closeModal}
			scrollBehavior={'inside'}
		>
			<Modal.Header>{title}</Modal.Header>
			<Modal.Footer
				justifyContent={'center'}
				gap={2}
				flexDirection={{ base: 'column', md: 'row' }}
			>
				<Button
					variant={'outline'}
					colorScheme={'brand'}
					px={12}
					onClick={cancel.function}
				>
					{cancel.title}
				</Button>
				<Button
					colorScheme={'brand'}
					px={12}
					onClick={accept.function}
				>
					{accept.title}
				</Button>
			</Modal.Footer>
		</Modal>
	)
}
