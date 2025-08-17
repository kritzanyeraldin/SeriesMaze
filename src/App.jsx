import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout'
import MovieView from './Views/MovieView'
import ErrorView from './Views/ErrorView'
import MovieDescriptionView from './Views/MovieDescriptionView'

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		errorElementent: <ErrorView />,
		children: [
			{
				index: true,
				element: <MovieView />
			},
			{
				path: '/movie',
				element: <MovieDescriptionView />
			}
		]
	}
])

const App = () => {
	return <RouterProvider router={router} />
}

export default App
