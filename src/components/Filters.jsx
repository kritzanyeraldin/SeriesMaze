import { useMemo } from 'react'
import { useState } from 'react'
import { useShowFilters } from '../hooks'

const Filters = ({ value, onChange, genresOptions = [] }) => {
	const { setShowFilters, deleteShowFilters } = useShowFilters()
	const [genreSearch, setGenreSearch] = useState('')

	const filteredGenres = useMemo(() => {
		const q = genreSearch.trim().toLowerCase()
		return q
			? genresOptions.filter(g => g.toLowerCase().includes(q))
			: genresOptions
	}, [genresOptions, genreSearch])

	const toggleGenre = g => {
		const next = new Set(value.genres)
		next.has(g) ? next.delete(g) : next.add(g)

		if (next.size === 0) {
			deleteShowFilters(['genres'])
		} else {
			setShowFilters({ genres: Array.from(next).join(',') })
		}

		onChange({ ...value, genres: next })
	}

	const clearAll = () =>
		onChange({
			...value,
			genres: new Set(),
			status: 'All',
			orderBy: 'ratingDesc'
		})

	return (
		<div className='rounded-lg p-4 '>
			<div className='flex items-center justify-between'>
				<h2 className='text-sm font-semibold tracking-tight'>Filters</h2>
				<button
					type='button'
					onClick={clearAll}
					className='text-xs px-2 py-1 rounded border border-gray-400 hover:bg-gray-200'
				>
					Clear
				</button>
			</div>

			<details
				open
				className='mt-4'
			>
				<summary className='cursor-pointer text-sm font-medium'>Genre</summary>
				<div className='mt-2 space-y-2'>
					<input
						type='search'
						placeholder='Search…'
						value={genreSearch}
						onChange={e => setGenreSearch(e.target.value)}
						className='w-full rounded-md  border-slate-700 text-sm p-2'
					/>
					<ul className='max-h-48 overflow-auto pr-1 space-y-1'>
						{filteredGenres.map(g => {
							const id = `genre-${g.replace(/\s+/g, '-').toLowerCase()}`
							const checked = value.genres.has(g)
							return (
								<li
									key={g}
									className='flex items-center gap-2'
								>
									<input
										id={id}
										type='checkbox'
										checked={checked}
										onChange={() => toggleGenre(g)}
										className='rounded border-slate-600 text-indigo-600 focus:ring-indigo-500'
									/>
									<label
										htmlFor={id}
										className='text-sm'
									>
										{g}
									</label>
								</li>
							)
						})}
						{!filteredGenres.length && (
							<li className='text-xs text-slate-400'>No genres</li>
						)}
					</ul>
				</div>
			</details>

			{/* <details
				open
				className='mt-4'
			>
				<summary className='cursor-pointer text-sm font-medium'>Status</summary>
				<div className='mt-2 space-y-2'>
					<ul className='max-h-48 pr-1 space-y-1'>
						{statuses.map(s => {
							const id = `status-${s.replace(/\s+/g, '-').toLowerCase()}`
							const checked = value.status === s
							return (
								<li
									key={id}
									className='flex items-center gap-2'
								>
									<input
										id={id}
										type='checkbox'
										checked={checked}
										onChange={() => setStatus(s)}
										className='text-indigo-600 focus:ring-indigo-500'
									/>
									<label
										htmlFor={id}
										className='text-sm'
									>
										{s}
									</label>
								</li>
							)
						})}
					</ul>
				</div>
			</details>

			<details
				open
				className='mt-4'
			>
				<summary className='cursor-pointer text-sm font-medium'>
					Order by
				</summary>
				<div className='mt-2 space-y-2'>
					<ul className='max-h-48 pr-1 space-y-1'>
						{orderByOptions.map(o => {
							const id = `order-by-${o.value.replace(/\s+/g, '-').toLowerCase()}`
							const checked = value.orderBy === o.value
							return (
								<li
									key={id}
									className='flex items-center gap-2'
								>
									<input
										id={id}
										type='checkbox'
										checked={checked}
										onChange={() => setOrderBy(o.value)}
										className='text-indigo-600 focus:ring-indigo-500'
									/>
									<label
										htmlFor={id}
										className='text-sm'
									>
										{o.label}
									</label>
								</li>
							)
						})}
					</ul>
				</div>
			</details> */}
		</div>
	)
}

export default Filters
