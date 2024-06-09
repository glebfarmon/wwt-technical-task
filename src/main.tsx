import React from 'react'
import ReactDOM from 'react-dom/client'

import { ModalProvider } from '@features/modal/services/provider'
import { QueryClientProvider } from '@tanstack/react-query'

import { App } from '@components/App'
import { ThemeProvider } from '@providers/ThemeProvider'

import './i18n'
import { queryClient } from './query'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<ModalProvider>
					<App />
				</ModalProvider>
			</ThemeProvider>
		</QueryClientProvider>
	</React.StrictMode>
)
