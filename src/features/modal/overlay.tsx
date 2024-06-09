import type { ReactNode } from 'react'

import { Box } from '@chakra-ui/react'

const BlurBox = () => {
	return (
		<Box
			position={'fixed'}
			left={0}
			top={0}
			width={'100vw'}
			height={'100vh'}
			zIndex={1000}
			backdropFilter={'auto'}
			backdropBlur={'xl'}
			background={'blackAlpha.600'}
			transition={'all'}
		/>
	)
}

export const ModalOverlay = ({
	children,
	power
}: {
	children: ReactNode
	power: number
}) => {
	return (
		<>
			{Array.from({ length: power }, (_, index) => (
				<BlurBox key={index} />
			))}
			{children}
		</>
	)
}
