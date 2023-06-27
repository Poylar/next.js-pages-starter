import Footer from '@/components/Footer'
import Header from '@/components/Header'

const Layout = ({ children }) => {
	return (
		<div className='app'>
			<Header />

			<main className='py-3'>{children}</main>

			<Footer />
		</div>
	)
}

export default Layout
