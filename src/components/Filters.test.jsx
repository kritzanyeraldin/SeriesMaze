import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Filters from './Filters'

const setShowFilters = vi.fn()
const deleteShowFilters = vi.fn()
vi.mock('../hooks', () => ({
	useShowFilters: () => ({
		setShowFilters,
		deleteShowFilters
	})
}))

describe('Filters', () => {
	const defaultValue = {
		genres: new Set(),
		status: 'All',
		orderBy: 'ratingDesc'
	}

	it('renders title and clear button', () => {
		render(
			<Filters
				value={defaultValue}
				onChange={vi.fn()}
				genresOptions={['Drama']}
			/>
		)

		expect(screen.getByText('Filters')).toBeInTheDocument()
		expect(screen.getByRole('button', { name: /Clear/i })).toBeInTheDocument()
	})

	it('filters genres based on search input', () => {
		render(
			<Filters
				value={defaultValue}
				onChange={vi.fn()}
				genresOptions={['Drama', 'Comedy']}
			/>
		)

		const input = screen.getByPlaceholderText(/Search…/i)
		fireEvent.change(input, { target: { value: 'com' } })

		expect(screen.getByLabelText('Comedy')).toBeInTheDocument()
		expect(screen.queryByLabelText('Drama')).not.toBeInTheDocument()
	})

	it('shows "No genres" when no match found', () => {
		render(
			<Filters
				value={defaultValue}
				onChange={vi.fn()}
				genresOptions={['Drama']}
			/>
		)

		const input = screen.getByPlaceholderText(/Search…/i)
		fireEvent.change(input, { target: { value: 'xyz' } })

		expect(screen.getByText(/No genres/i)).toBeInTheDocument()
	})

	it('toggles a genre on check and calls setShowFilters + onChange', () => {
		const onChange = vi.fn()
		render(
			<Filters
				value={{ ...defaultValue, genres: new Set() }}
				onChange={onChange}
				genresOptions={['Drama']}
			/>
		)

		const checkbox = screen.getByLabelText('Drama')
		fireEvent.click(checkbox)

		expect(setShowFilters).toHaveBeenCalledWith({ genres: 'Drama' })
		expect(onChange).toHaveBeenCalled()
	})

	it('removes a genre and calls deleteShowFilters when none left', () => {
		const onChange = vi.fn()
		render(
			<Filters
				value={{ ...defaultValue, genres: new Set(['Drama']) }}
				onChange={onChange}
				genresOptions={['Drama']}
			/>
		)

		const checkbox = screen.getByLabelText('Drama')
		fireEvent.click(checkbox)

		expect(deleteShowFilters).toHaveBeenCalledWith(['genres'])
		expect(onChange).toHaveBeenCalled()
	})

	it('clearAll resets filters to defaults', () => {
		const onChange = vi.fn()
		render(
			<Filters
				value={{ ...defaultValue, genres: new Set(['Drama']) }}
				onChange={onChange}
				genresOptions={['Drama']}
			/>
		)

		fireEvent.click(screen.getByRole('button', { name: /Clear/i }))

		expect(onChange).toHaveBeenCalledWith({
			...defaultValue,
			genres: new Set(),
			status: 'All',
			orderBy: 'ratingDesc'
		})
	})
})
