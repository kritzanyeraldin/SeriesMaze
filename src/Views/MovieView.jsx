import { Filters, PaginatedGrid } from '../components'
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import {
	useSearchTvShows,
	useGenres,
	useFiltered,
	useDebouncedValue,
	useTvShowsPages
} from '../hooks'
const MovieView = () => {
	const [tvPage, setTvPage] = useState(0)
	const { data, loading, error } = useTvShowsPages(tvPage)
	const genres = useGenres(data)
	const { searchQuery } = useOutletContext()
	const debouncedQuery = useDebouncedValue(searchQuery, 500)
	const { filters, setFilters, filtered } = useFiltered(data)
	const { data: searchData, loading: searchLoading } =
		useSearchTvShows(debouncedQuery)
	const isSearching = !!searchQuery
	const showsToDisplay = isSearching ? searchData : filtered
	const isLoading = isSearching ? searchLoading : loading

	return (
		<div className='h-full grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-6 py-6 px-20  '>
			<section className='min-w-0 '>
				<PaginatedGrid
					tvPage={tvPage}
					setTvPage={setTvPage}
					data={showsToDisplay}
					loading={isLoading}
					error={error}
				/>
			</section>

			<aside className='bg-gray-100 border border-gray-200  lg:top-6 h-full rounded-md '>
				<Filters
					value={filters}
					onChange={next => setFilters(next)}
					genresOptions={genres}
				/>
			</aside>
		</div>
	)
}

export default MovieView
