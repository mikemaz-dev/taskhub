import { ProjectStatCard } from '@/components/sections/project-stats/ProjectStatCard'

import { PROJECT_STATS_DATA } from '@/data/project-stats/project-stats.data'

export function ProjectStats() {
	return (
		<div className='flex flex-col gap-5'>
			{PROJECT_STATS_DATA.map(projectStat => (
				<ProjectStatCard
					key={projectStat.id}
					projectStat={projectStat}
				/>
			))}
		</div>
	)
}
