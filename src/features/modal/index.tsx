import {
	Modal as ChakraModal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	type ModalProps
} from '@chakra-ui/react'

const Modal = ({ children, size, ...props }: ModalProps) => {
	return (
		<ChakraModal
			size={size || { base: 'full', md: 'xl' }}
			{...props}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton size={'lg'} />
				{children}
			</ModalContent>
		</ChakraModal>
	)
}

Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
