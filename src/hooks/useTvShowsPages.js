import { useState } from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { adaptGetTvShowsPerPage } from '../api/adaptGetTvShowsPerPage'
import { getFiltersFromUrl } from '../utils'

export const useTvShowsPages = () => {
	const [searchParams] = useSearchParams()
	const { page } = getFiltersFromUrl(searchParams)
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchPage = async () => {
			setLoading(true)
			setError(null)
			try {
				const res = await fetch(`https://api.tvmaze.com/shows?page=${page}`)
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
	}, [page])

	const stats = {
		total: data.length,
		hasAny: data.length > 0
	}

	return { data, loading, error, stats }
}

export default useTvShowsPages
