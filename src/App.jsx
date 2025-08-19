import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layouts'
import { ErrorView, TvShowsView } from './Views'

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		errorElement: <ErrorView />,
		children: [
			{
				index: true,
				element: <TvShowsView />
			}
		]
	}
])

const App = () => {
	return <RouterProvider router={router} />
}

export default App
