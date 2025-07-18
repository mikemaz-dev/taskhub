import { z } from 'zod'

export const TaskSchema = z.object({
	title: z.string().min(1, 'Title is required').max(100, 'Title must be less than 100 characters'),
	dueDate: z.object({
		date: z.date(),
		startTime: z.date(),
		endTime: z.date()
	}),
	icon: z.string().min(1, 'Icon is required')
})

export type TTaskFormData = z.infer<typeof TaskSchema>
