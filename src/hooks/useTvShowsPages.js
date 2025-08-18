import { useState } from 'react'
import { useEffect } from 'react'
import { adaptGetTvShowsPerPage } from '../api/adaptGetTvShowsPerPage'

export const useTvShowsPages = tvPage => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchPage = async () => {
			setLoading(true)
			setError(null)
			try {
				const res = await fetch(`https://api.tvmaze.com/shows?page=${tvPage}`)
				const rawData = await res.json()
				const normalized = adaptGetTvShowsPerPage(rawData)
				setData(normalized)
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)
			}
		}
		fetchPage()
	}, [tvPage])

	const stats = {
		total: data.length,
		hasAny: data.length > 0
	}

	return { data, loading, error, stats }
}

export default useTvShowsPages
