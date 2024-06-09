import { lazy } from 'react'

export enum Modals {
	ConfirmModal,
	FilterModal
}

export const ModalManager = {
	[Modals.ConfirmModal]: lazy(() =>
		import('@features/modal/shared/confirmModal').then(mod => ({
			default: mod.ConfirmModal
		}))
	),
	[Modals.FilterModal]: lazy(() =>
		import('@components/App/modals/filter').then(mod => ({
			default: mod.FilterModal
		}))
	)
}
