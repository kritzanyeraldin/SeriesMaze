import { useState } from 'react'
import { useMemo } from 'react'

const useFiltered = TvShows => {
	const [filters, setFilters] = useState({
		genres: new Set(),
		status: 'All',
		orderBy: 'ratingDesc'
	})

	const filtered = useMemo(() => {
		let arr = [...TvShows]

		if (filters.genres.size) {
			arr = arr.filter(s => s.genres?.some(g => filters.genres.has(g)))
		}

		return arr
	}, [TvShows, filters])

	return { filters, setFilters, filtered }
}

export default useFiltered
