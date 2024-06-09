import { type ReactNode, Suspense } from 'react'

import { ModalOverlay } from '@features/modal/overlay'
import { useStoreSelectors } from '@features/modal/services/store'

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const modals = useStoreSelectors.use.modals()

	return (
		<>
			{children}
			{typeof window !== 'undefined' && modals.length ? (
				<ModalOverlay power={modals.length}>
					<Suspense fallback={null}>
						{modals.map(({ id, component: LazyModal }) => (
							<LazyModal key={id} />
						))}
					</Suspense>
				</ModalOverlay>
			) : null}
		</>
	)
}
