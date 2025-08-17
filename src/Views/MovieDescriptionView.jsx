const MovieDescriptionView = () => {
	return (
		<div className='bg-amber-200'>
			<div className='w-full h-max-[300px] h-[300px] rounded-lg shadow'>
				<img
					src='https://images.unsplash.com/photo-1611787640592-ebf78080d96e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='movie image'
					className='w-full h-full'
				/>
			</div>
			<p>Movie Description</p>
		</div>
	)
}

export default MovieDescriptionView
