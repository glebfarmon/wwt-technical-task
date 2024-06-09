import { useCallback, useState } from 'react'

import { MODAL_ANIMATION_DELAY } from '@constants/modal'

export const useCloseModal = (
	closeHandler: () => void,
	rollbackFilters?: () => void
) => {
	const [isOpen, setOpen] = useState(true)
	const closeModal = useCallback(() => {
		setOpen(false)
		setTimeout(() => {
			if (rollbackFilters) {
				rollbackFilters()
			}
			closeHandler()
		}, MODAL_ANIMATION_DELAY)
	}, [])

	return { isOpen, closeModal }
}
