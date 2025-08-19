import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import PaginatedGrid from './PaginatedGrid'

vi.mock('./TvShowCard', () => ({
	default: ({ title }) => <div data-testid='tvshow'>{title}</div>
}))

const setShowFilters = vi.fn()
vi.mock('../hooks', () => ({
	useShowFilters: () => ({
		showFilters: { page: 0 },
		setShowFilters
	})
}))

describe('PaginatedGrid', () => {
	it('renders loading state', () => {
		render(
			<PaginatedGrid
				data={[]}
				loading={true}
				error={null}
			/>
		)

		expect(screen.getByRole('status')).toBeInTheDocument()
	})

	it('renders error state', () => {
		render(
			<PaginatedGrid
				data={[]}
				loading={false}
				error='Something went wrong'
			/>
		)

		expect(screen.getByText(/Something went wrong/)).toBeInTheDocument()
	})

	it('renders data with TvShowCard', () => {
		const data = [{ id: 1, title: 'Test Show', poster: 'p.jpg', rating: 8 }]
		render(
			<PaginatedGrid
				data={data}
				loading={false}
				error={null}
			/>
		)

		expect(screen.getByTestId('tvshow')).toHaveTextContent('Test Show')
	})

	it('renders empty state message when no data', () => {
		render(
			<PaginatedGrid
				data={[]}
				loading={false}
				error={null}
			/>
		)

		expect(screen.getByText(/No items to display/i)).toBeInTheDocument()
	})

	it('calls setShowFilters when Next page is clicked', () => {
		render(
			<PaginatedGrid
				data={[]}
				loading={false}
				error={null}
			/>
		)

		const nextButton = screen.getByText('Next')
		fireEvent.click(nextButton)

		expect(setShowFilters).toHaveBeenCalledWith({ page: 2 })
	})
})
