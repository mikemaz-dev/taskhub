'use client'

import { CircleX } from 'lucide-react'
import { AnimatePresence, m } from 'motion/react'
import { type ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface IModal {
	children: ReactNode
	onClose: () => void
	isOpen?: boolean
}

export function Modal({ children, onClose, isOpen = true }: IModal) {
	const [shouldRender, setShouldRender] = useState(isOpen)

	const handleClose = () => {
		setShouldRender(false)
		setTimeout(onClose, 300) // Match the animation duration
	}

	useEffect(() => {
		if (!isOpen) return

		const handleEscKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				handleClose()
			}
		}

		document.addEventListener('keydown', handleEscKey)
		return () => document.removeEventListener('keydown', handleEscKey)
	}, [isOpen])

	useEffect(() => {
		if (isOpen) {
			setShouldRender(true)
		} else {
			setShouldRender(false)
		}
	}, [isOpen])

	useEffect(() => {
		if (shouldRender) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}

		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [shouldRender])

	if (!isOpen) return null

	return createPortal(
		<AnimatePresence
			onExitComplete={() => {
				document.body.style.overflow = 'unset'
			}}
		>
			{shouldRender && (
				<m.div
					className='fixed inset-0 z-50 flex items-center justify-center bg-white/50 p-4 backdrop-blur-sm dark:bg-neutral-900/80'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
					onClick={handleClose}
				>
					<m.div
						className='relative w-[90%] max-w-md rounded-3xl border border-neutral-200 bg-white p-6 shadow-lg dark:border-neutral-600 dark:bg-neutral-800'
						initial={{ opacity: 0, scale: 0.95, y: -20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: -20 }}
						transition={{
							type: 'spring',
							stiffness: 400,
							damping: 25
						}}
						onClick={e => e.stopPropagation()}
						role='dialog'
						aria-modal='true'
					>
						<button
							onClick={handleClose}
							className='group absolute top-6 right-6 cursor-pointer'
							aria-label='Close modal'
						>
							<CircleX
								size={24}
								className='text-gray-400 transition-all duration-300 hover:scale-110 hover:text-red-500 dark:text-neutral-400 dark:hover:text-red-400'
							/>
						</button>
						{children}
					</m.div>
				</m.div>
			)}
		</AnimatePresence>,
		document.body
	)
}
