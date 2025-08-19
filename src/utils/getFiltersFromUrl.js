export const getFiltersFromUrl = searchParams => {
	const page = searchParams.get('page')
		? parseInt(searchParams.get('page'), 10)
		: 1
	const genresAsString = searchParams.get('genres')
	let genres = new Set(genresAsString ? genresAsString.split(',') : [])
	genres = [...genres]

	const q = searchParams.get('q') ?? ''

	return {
		page: page - 1,
		genres,
		q
	}
}
