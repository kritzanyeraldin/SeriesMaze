import { useEffect } from 'react'
import { useState } from 'react'
import { useMemo } from 'react'

const useGenres = (data = []) => {
	const [genreSet, setGenreSet] = useState(new Set())

	useEffect(() => {
		if (!Array.isArray(data)) return

		const next = new Set(genreSet)
		data.forEach(show => show.genres?.forEach(g => next.add(g)))
		setGenreSet(next)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data])

	const GENRES = useMemo(() => Array.from(genreSet).sort(), [genreSet])

	return GENRES
}

export default useGenres
