const Header = ({ searchQuery, setSearchQuery }) => {
	const handleFormSubmit = e => {
		e.preventDefault()
	}

	return (
		<nav className='flex bg-gray-100 justify-between p-4'>
			<a
				href='#'
				className='text-3xl font-bold'
			>
				SeriesMaze
			</a>
			<form
				onSubmit={handleFormSubmit}
				className='max-w-xl'
			>
				<div className='relative'>
					<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
						<svg
							className='w-4 h-4 text-gray-500 dark:text-gray-400'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 20 20'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
							/>
						</svg>
					</div>
					<input
						type='text'
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
						placeholder='Search movie'
						className='block w-full p-2 ps-10 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-200 focus:border-gray-200'
					/>
				</div>
			</form>
		</nav>
	)
}

export default Header
