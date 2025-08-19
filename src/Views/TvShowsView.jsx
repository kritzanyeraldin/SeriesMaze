import { Filters, PaginatedGrid } from '../components'
import {
	useSearchTvShows,
	useGenres,
	useFiltered,
	useDebouncedValue,
	useTvShowsPages,
	useShowFilters
} from '../hooks'

const TvShowsView = () => {
	const { data, loading, error } = useTvShowsPages()
	const genres = useGenres(data)
	const { showFilters } = useShowFilters()
	const debouncedQuery = useDebouncedValue(showFilters.q, 500)
	const { filters, setFilters, filtered } = useFiltered(data)
	const { data: searchData, loading: searchLoading } =
		useSearchTvShows(debouncedQuery)
	const isSearching = !!showFilters.q
	const showsToDisplay = isSearching ? searchData : filtered
	const isLoading = isSearching ? searchLoading : loading

	return (
		<div className='h-full grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-6 py-6 px-20'>
			<section className='min-w-0'>
				<PaginatedGrid
					data={showsToDisplay}
					loading={isLoading}
					error={error}
				/>
			</section>
			<aside className='bg-gray-100 border border-gray-200 lg:top-6 rounded-md h-min sticky'>
				<Filters
					value={filters}
					onChange={next => setFilters(next)}
					genresOptions={genres}
				/>
			</aside>
		</div>
	)
}

export default TvShowsView
