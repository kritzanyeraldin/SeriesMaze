import React from 'react'
import { useState } from 'react'

const Header = () => {
	const [findMovie, setFindMovie] = useState('')
	const handleFormSubmit = () => {}
	return (
		<nav className='flex bg-gray-100 justify-between p-4'>
			<a
				href='#'
				className='text-3xl font-bold '
			>
				SeriesMaze
			</a>
			<form onSubmit={handleFormSubmit}>
				<input
					type='text'
					value={findMovie}
					onChange={e => setFindMovie(e.target.value)}
					placeholder='Search movie'
					className='border rounded-md p-1'
				/>
				<button type='submit'>Search</button>
			</form>
		</nav>
	)
}

export default Header
