import { useState } from 'react'
import { Footer, Header } from '../components'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
	const [searchQuery, setSearchQuery] = useState('')
	return (
		<div className='w-[100lvw] h-[100lvh] flex flex-col overflow-x-hidden'>
			<Header
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>
			<main className='flex-1'>
				<Outlet context={{ searchQuery }} />
			</main>
			<Footer />
		</div>
	)
}

export default MainLayout
