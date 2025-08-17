import { Footer, Header } from '../components'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
	return (
		<div className='w-lvw h-lvh'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default MainLayout
