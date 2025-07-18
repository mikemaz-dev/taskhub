import { setHours, setMinutes } from 'date-fns'
import {
	Calendar,
	Code,
	Database,
	FileText,
	MessageSquare,
	Palette,
	Plane,
	Search,
	Settings,
	Shield,
	Users,
	Zap
} from 'lucide-react'

import { USERS_DATA } from '@/data/users/users.data'
import type { ITask } from '@/types/tasks/task.types'

export const TASKS_DATA: ITask[] = [
	{
		id: 1,
		icon: Plane,
		title: 'Create Dashboard',
		dueDate: {
			date: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
			startTime: setMinutes(setHours(new Date(), 9), 0),
			endTime: setMinutes(setHours(new Date(), 12), 30)
		},
		comments: ['First Comment', 'Second Comment', 'Third Comment'],
		resources: ['', '', '', '', '', ''],
		links: ['https://example.org', 'https://2example.com'],
		users: [USERS_DATA[0], USERS_DATA[1], USERS_DATA[2]],
		subTasks: [
			{
				id: 1,
				title: 'Create theme toggle functionality',
				isCompleted: true
			}
		]
	},
	{
		id: 2,
		icon: Code,
		title: 'Implement Authentication System',
		dueDate: {
			date: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
			startTime: setMinutes(setHours(new Date(), 10), 0),
			endTime: setMinutes(setHours(new Date(), 16), 0)
		},
		comments: [
			'Need to integrate OAuth',
			'Consider using NextAuth.js',
			'Add password reset functionality'
		],
		resources: ['', '', ''],
		links: ['https://next-auth.js.org', 'https://auth0.com/docs'],
		users: [USERS_DATA[0], USERS_DATA[3]],
		subTasks: [
			{
				id: 1,
				title: 'Set up OAuth providers',
				isCompleted: true
			},
			{
				id: 2,
				title: 'Create login/signup forms',
				isCompleted: false
			},
			{
				id: 3,
				title: 'Implement session management',
				isCompleted: false
			}
		]
	},
	{
		id: 3,
		icon: Users,
		title: 'User Management Interface',
		dueDate: {
			date: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000),
			startTime: setMinutes(setHours(new Date(), 8), 30),
			endTime: setMinutes(setHours(new Date(), 11), 45)
		},
		comments: ['Include role-based permissions', 'Add user search functionality'],
		resources: ['', '', '', ''],
		links: ['https://ui.shadcn.com/docs/components/data-table'],
		users: [USERS_DATA[1], USERS_DATA[2]],
		subTasks: [
			{
				id: 1,
				title: 'Design user list component',
				isCompleted: true
			},
			{
				id: 2,
				title: 'Add user creation modal',
				isCompleted: false
			},
			{
				id: 3,
				title: 'Implement user editing',
				isCompleted: false
			},
			{
				id: 4,
				title: 'Add bulk actions',
				isCompleted: false
			}
		]
	},
	{
		id: 4,
		icon: Database,
		title: 'Database Schema Migration',
		dueDate: {
			date: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
			startTime: setMinutes(setHours(new Date(), 13), 0),
			endTime: setMinutes(setHours(new Date(), 15), 30)
		},
		comments: ['Backup existing data first', 'Test migration on staging'],
		resources: ['', ''],
		links: ['https://prisma.io/docs/concepts/components/prisma-migrate'],
		users: [USERS_DATA[0]],
		subTasks: [
			{
				id: 1,
				title: 'Create migration scripts',
				isCompleted: true
			},
			{
				id: 2,
				title: 'Test on development environment',
				isCompleted: true
			},
			{
				id: 3,
				title: 'Deploy to staging',
				isCompleted: true
			}
		]
	},
	{
		id: 5,
		icon: Palette,
		title: 'UI/UX Design System',
		dueDate: {
			date: new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000),
			startTime: setMinutes(setHours(new Date(), 9), 15),
			endTime: setMinutes(setHours(new Date(), 17), 0)
		},
		comments: [
			'Focus on accessibility',
			'Create component library',
			'Ensure mobile responsiveness'
		],
		resources: ['', '', '', '', ''],
		links: ['https://www.figma.com', 'https://ui.shadcn.com'],
		users: [USERS_DATA[2], USERS_DATA[3], USERS_DATA[4]],
		subTasks: [
			{
				id: 1,
				title: 'Define color palette',
				isCompleted: true
			},
			{
				id: 2,
				title: 'Create typography scale',
				isCompleted: false
			},
			{
				id: 3,
				title: 'Design component variants',
				isCompleted: false
			},
			{
				id: 4,
				title: 'Create design tokens',
				isCompleted: false
			}
		]
	},
	{
		id: 6,
		icon: Shield,
		title: 'Security Audit & Implementation',
		dueDate: {
			date: new Date(new Date().getTime() + 21 * 24 * 60 * 60 * 1000),
			startTime: setMinutes(setHours(new Date(), 11), 0),
			endTime: setMinutes(setHours(new Date(), 14), 45)
		},
		comments: ['Run penetration testing', 'Implement rate limiting', 'Add CSRF protection'],
		resources: ['', '', '', '', '', '', ''],
		links: ['https://owasp.org/www-project-top-ten/', 'https://cheatsheetseries.owasp.org'],
		users: [USERS_DATA[0], USERS_DATA[1]],
		subTasks: [
			{
				id: 1,
				title: 'Conduct security assessment',
				isCompleted: false
			},
			{
				id: 2,
				title: 'Implement input validation',
				isCompleted: false
			},
			{
				id: 3,
				title: 'Add API rate limiting',
				isCompleted: false
			},
			{
				id: 4,
				title: 'Set up monitoring alerts',
				isCompleted: false
			}
		]
	},
	{
		id: 7,
		icon: Zap,
		title: 'Performance Optimization',
		dueDate: {
			date: new Date(new Date().getTime() + 12 * 24 * 60 * 60 * 1000),
			startTime: setMinutes(setHours(new Date(), 14), 0),
			endTime: setMinutes(setHours(new Date(), 17), 30)
		},
		comments: ['Focus on Core Web Vitals', 'Optimize bundle size', 'Implement caching strategies'],
		resources: ['', '', ''],
		links: [
			'https://web.dev/vitals/',
			'https://nextjs.org/docs/advanced-features/measuring-performance'
		],
		users: [USERS_DATA[0], USERS_DATA[2]],
		subTasks: [
			{
				id: 1,
				title: 'Analyze current performance metrics',
				isCompleted: true
			},
			{
				id: 2,
				title: 'Optimize images and assets',
				isCompleted: true
			},
			{
				id: 3,
				title: 'Implement code splitting',
				isCompleted: false
			},
			{
				id: 4,
				title: 'Add service worker for caching',
				isCompleted: false
			}
		]
	},
	{
		id: 8,
		icon: MessageSquare,
		title: 'Real-time Chat Feature',
		dueDate: {
			date: new Date(new Date().getTime() + 18 * 24 * 60 * 60 * 1000),
			startTime: setMinutes(setHours(new Date(), 10), 30),
			endTime: setMinutes(setHours(new Date(), 13), 15)
		},
		comments: [
			'Use WebSocket for real-time communication',
			'Add emoji support',
			'Implement message history'
		],
		resources: ['', '', '', ''],
		links: ['https://socket.io/', 'https://pusher.com/docs'],
		users: [USERS_DATA[1], USERS_DATA[3], USERS_DATA[4]],
		subTasks: [
			{
				id: 1,
				title: 'Set up WebSocket server',
				isCompleted: false
			},
			{
				id: 2,
				title: 'Create chat UI components',
				isCompleted: false
			},
			{
				id: 3,
				title: 'Implement message persistence',
				isCompleted: true
			},
			{
				id: 4,
				title: 'Add typing indicators',
				isCompleted: false
			},
			{
				id: 5,
				title: 'Test with multiple users',
				isCompleted: false
			}
		]
	},
	{
		id: 9,
		icon: Calendar,
		title: 'Event Management System',
		dueDate: {
			date: new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000),
			startTime: setMinutes(setHours(new Date(), 8), 0),
			endTime: setMinutes(setHours(new Date(), 12), 0)
		},
		comments: [
			'Include calendar integration',
			'Add reminder notifications',
			'Support recurring events'
		],
		resources: ['', '', '', '', ''],
		links: ['https://fullcalendar.io/', 'https://react-big-calendar.storybook.js.org/'],
		users: [USERS_DATA[2], USERS_DATA[4]],
		subTasks: [
			{
				id: 1,
				title: 'Design event creation form',
				isCompleted: true
			},
			{
				id: 2,
				title: 'Implement calendar view',
				isCompleted: false
			},
			{
				id: 3,
				title: 'Add event notifications',
				isCompleted: false
			},
			{
				id: 4,
				title: 'Support for recurring events',
				isCompleted: false
			}
		]
	},
	{
		id: 10,
		icon: Search,
		title: 'Advanced Search and Filtering',
		dueDate: {
			date: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
			startTime: setMinutes(setHours(new Date(), 15), 0),
			endTime: setMinutes(setHours(new Date(), 17), 30)
		},
		comments: [
			'Implement full-text search',
			'Add faceted search filters',
			'Include search analytics'
		],
		resources: ['', ''],
		links: ['https://www.algolia.com/doc/', 'https://www.elastic.co/elasticsearch/'],
		users: [USERS_DATA[0], USERS_DATA[3]],
		subTasks: [
			{
				id: 1,
				title: 'Set up search infrastructure',
				isCompleted: true
			},
			{
				id: 2,
				title: 'Create search UI components',
				isCompleted: true
			},
			{
				id: 3,
				title: 'Implement search filters',
				isCompleted: false
			},
			{
				id: 4,
				title: 'Add search result highlighting',
				isCompleted: false
			}
		]
	},
	{
		id: 11,
		icon: FileText,
		title: 'Documentation & API Reference',
		dueDate: {
			date: new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000),
			startTime: setMinutes(setHours(new Date(), 12), 55),
			endTime: setMinutes(setHours(new Date(), 16), 50)
		},
		comments: [
			'Use interactive examples',
			'Include code snippets',
			'Add search functionality to docs'
		],
		resources: ['', '', '', '', '', '', '', ''],
		links: ['https://docusaurus.io/', 'https://nextra.site/'],
		users: [USERS_DATA[1], USERS_DATA[2], USERS_DATA[4]],
		subTasks: [
			{
				id: 1,
				title: 'Set up documentation framework',
				isCompleted: true
			},
			{
				id: 2,
				title: 'Write API documentation',
				isCompleted: true
			},
			{
				id: 3,
				title: 'Create user guides',
				isCompleted: true
			},
			{
				id: 4,
				title: 'Add interactive examples',
				isCompleted: true
			},
			{
				id: 5,
				title: 'Implement docs search',
				isCompleted: true
			}
		]
	},
	{
		id: 12,
		icon: Settings,
		title: 'Application Configuration Panel',
		dueDate: {
			date: new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000),
			startTime: setMinutes(setHours(new Date(), 10), 10),
			endTime: setMinutes(setHours(new Date(), 12), 50)
		},
		comments: ['Include environment-specific settings', 'Add validation for config values'],
		resources: ['', '', ''],
		links: ['https://react-hook-form.com/', 'https://zod.dev/'],
		users: [USERS_DATA[0], USERS_DATA[1]],
		subTasks: [
			{
				id: 1,
				title: 'Design settings interface',
				isCompleted: false
			},
			{
				id: 2,
				title: 'Implement form validation',
				isCompleted: false
			},
			{
				id: 3,
				title: 'Add configuration persistence',
				isCompleted: false
			}
		]
	}
]
