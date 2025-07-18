import type { ReactNode } from 'react'

import { cn } from '@/utils/cn.util'

interface SidebarTopicProps {
	title: string
	children: ReactNode
	rightSide?: ReactNode
	className?: string
}

export function SidebarTopic({ title, children, rightSide, className }: SidebarTopicProps) {
	return (
		<div className={cn('flex flex-col gap-2.5', className)}>
			<div className='flex items-center justify-between'>
				<span className='dark:tex-white font-medium opacity-60'>{title}</span>
				{rightSide}
			</div>
			{children}
		</div>
	)
}
