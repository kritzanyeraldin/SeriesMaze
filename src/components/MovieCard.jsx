const MovieCard = () => {
	return (
		<div className=' w-[200px] h-[320px] bg-amber-400'>
			<div className=' w-full h-[280px]  shadow'>
				<a href='/movie'>
					<img
						src='https://images.unsplash.com/photo-1611787640592-ebf78080d96e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt='movie image'
						className='w-full h-full'
					/>
				</a>
			</div>
			<div className='flex justify-center mt-1'>
				<a href='/movie'>
					<h5 className='text-2xl font-medium hover:text-amber-600'>
						Movie name
					</h5>
				</a>
			</div>
		</div>
	)
}

export default MovieCard
