import { MovieCard } from '../components'

const MovieView = () => {
	return (
		<div className='flex pt-6 px-20 bg-gray-200'>
			<div className='p-4'>
				<div className='h-['>
					<p>Filters</p>
				</div>
				<div className='grid grid-cols-6 gap-4 bg-gray-200'>
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
					<MovieCard />
				</div>
			</div>
			<div className='bg-amber-400 flex-1'>
				<p>Filters</p>
			</div>
		</div>
	)
}

export default MovieView
