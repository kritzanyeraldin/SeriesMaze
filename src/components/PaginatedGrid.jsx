import ReactPaginate from 'react-paginate'
import TvShowCard from './TvShowCard'
import { useShowFilters } from '../hooks'

const PaginatedGrid = ({ data, loading, error }) => {
	const { showFilters, setShowFilters } = useShowFilters()
	const handlePageClick = ({ selected }) => {
		document
			.getElementById('main-layout')
			?.scrollTo({ behavior: 'smooth', top: 0 })
		setShowFilters({ page: selected + 1 })
	}

	return (
		<div className='space-y-6  h-full '>
			{loading && (
				<div
					role='status'
					aria-label='loading'
					className='h-24 animate-pulse rounded-md bg-slate-800'
				/>
			)}
			{error && (
				<div className='rounded-md border border-red-500/40 bg-red-500/10 p-3 text-sm'>
					{String(error)}
				</div>
			)}

			{!loading && !error && (
				<>
					<div className='grid gap-4 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]'>
						{data.map(tvShow => (
							<TvShowCard
								key={tvShow.id}
								id={tvShow.id}
								title={tvShow.title}
								poster={tvShow.poster}
								rating={tvShow.rating}
							/>
						))}
						{!data.length && (
							<p className='col-span-full text-center text-sm text-slate-400'>
								No items to display.
							</p>
						)}
					</div>

					<ReactPaginate
						forcePage={showFilters.page}
						onPageChange={handlePageClick}
						pageCount={347}
						pageRangeDisplayed={15}
						marginPagesDisplayed={1}
						containerClassName='flex flex-wrap items-center justify-center gap-2 select-none max-w-full'
						pageLinkClassName='px-3 py-1 rounded border border-slate-700 hover:bg-slate-700'
						previousLabel='Prev'
						nextLabel='Next'
						previousLinkClassName='px-3 py-1 rounded border border-slate-700 hover:bg-slate-700'
						nextLinkClassName='px-3 py-1 rounded border border-slate-700 hover:bg-slate-700'
						breakLabel='…'
						breakLinkClassName='px-3 py-1 text-slate-400'
						activeLinkClassName='bg-red-500'
					/>
				</>
			)}
		</div>
	)
}

export default PaginatedGrid
