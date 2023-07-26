import Head from 'next/head'

const Seo = ({ data }) => {
	return (
		<Head>
			<title>{data.longtitle + ' | ' + data.site_name}</title>
			<meta name='description' content={data.description} />
		</Head>
	)
}

export default Seo
