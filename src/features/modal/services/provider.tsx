import { type ReactNode, Suspense } from 'react'

import { useStoreSelectors } from '@features/modal/services/store'

export const ModalProvider = ({ children }: { children: ReactNode }) => {
	const modals = useStoreSelectors.use.modals()

	return (
		<>
			{children}
			{typeof window !== 'undefined' && modals.length
				? modals.map(({ id, component: LazyModal }) => (
						<Suspense
							fallback={null}
							key={id}
						>
							<LazyModal />
						</Suspense>
				  ))
				: null}
		</>
	)
}
