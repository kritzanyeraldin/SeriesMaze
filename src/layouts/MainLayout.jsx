import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'

const MainLayout = () => {
	return (
		<div
			id='main-layout'
			className='w-[100lvw] h-[100lvh] flex flex-col overflow-x-hidden'
		>
			<Header />
			<main className='flex-1'>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

export default MainLayout
