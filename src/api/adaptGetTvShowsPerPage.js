import { stripHtml } from '../utils/stripHtml'

export function adaptGetTvShowsPerPage(shows = []) {
	return shows.map(show => ({
		id: show.id,
		title: show.name ?? 'Untitled',
		poster: show.image?.medium ?? null,
		posterOriginal: show.image?.original ?? null,
		rating: show.rating?.average ?? null,
		year: show.premiered ? Number(show.premiered.slice(0, 4)) : null,
		genres: Array.isArray(show.genres) ? show.genres : [],
		status: show.status ?? 'Unknown',
		runtime: show.averageRuntime ?? show.runtime ?? null,
		network: show.network?.name ?? null,
		countryCode: show.network?.country?.code ?? null,
		schedule: {
			time: show.schedule?.time ?? null,
			days: Array.isArray(show.schedule?.days) ? show.schedule.days : []
		},
		summary: stripHtml(show.summary),
		officialSite: show.officialSite ?? show._links?.self?.href ?? null
	}))
}
