import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { createMemoryRouter, Outlet, RouterProvider } from 'react-router-dom'

vi.mock('./layout', () => ({
	MainLayout: ({ children }) => <div data-testid='main-layout'>{children}</div>
}))
vi.mock('./Views', () => ({
	MovieView: () => <div>Movie View Content</div>,
	ErrorView: () => <div>Error View Content</div>
}))

const routes = [
	{
		element: (
			<div data-testid='main-layout'>
				<Outlet />
			</div>
		),
		errorElement: <div>Error View Content</div>,
		children: [
			{ index: true, element: <div>Movie View Content</div> },
			{ path: '*', element: <div>Error View Content</div> }
		]
	}
]

describe('App Router', () => {
	it('should render MainLayout and MovieView on default route', () => {
		const router = createMemoryRouter(routes, { initialEntries: ['/'] })
		render(<RouterProvider router={router} />)

		expect(screen.getByTestId('main-layout')).toBeInTheDocument()
		expect(screen.getByText(/Movie View Content/i)).toBeInTheDocument()
	})

	it('should render ErrorView when navigating to an unknown route', async () => {
		const router = createMemoryRouter(routes, { initialEntries: ['/unknown'] })
		render(<RouterProvider router={router} />)

		expect(await screen.findByText(/Error View Content/i)).toBeInTheDocument()
	})
})
