import { useEffect } from 'react'
import { useState } from 'react'
import { adaptGetTvShowsSearch } from '../api/adaptGetTvShowsSearch'

const useSearchTvShows = query => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	useEffect(() => {
		if (!query) {
			setData([])
			return
		}

		const controller = new AbortController()
		const fetchResults = async () => {
			setLoading(true)
			setError(null)
			try {
				console.log(query)
				const res = await fetch(
					`https://api.tvmaze.com/search/shows?q=${query}`,
					{
						signal: controller.signal
					}
				)
				const rawData = await res.json()
				console.log(rawData)
				const normalized = adaptGetTvShowsSearch(rawData)
				setData(normalized)
				console.log(normalized)
			} catch (err) {
				if (err.name !== 'AbortError') {
					setError(err.message || 'Error fetching search data')
				}
			} finally {
				setLoading(false)
			}
		}

		fetchResults()
		return () => controller.abort()
	}, [query])

	return { data, loading, error }
}

export default useSearchTvShows
