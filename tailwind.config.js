/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],

	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 10s linear infinite',
			},
			colors: {
		
			},
			fontSize: {
				'8xl': ['9rem', '9.5rem'],
				'7xl': ['5.625rem', '6rem'],
				'6xl': ['4rem', '4.5rem'],
				'5xl': ['3rem', '3.5rem'],
				'4xl': ['2.5rem', '2.75rem'],
				'3xl': ['2rem', '2.5rem'],
				'2xl': ['1.5rem', '2rem'],
				xl: ['1.25rem', '1.875rem'],
				lg: ['1.125rem', '1.625rem'],
				base: ['1rem', '1.5rem'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		({ addComponents }) => {
			addComponents({
				'.container': {
					maxWidth: '100%',
					width: '100%',
					paddingLeft: '1rem',
					paddingRight: '1rem',
					margin: '0 auto',
					'@screen sm': {
						maxWidth: '640px',
					},
					'@screen md': {
						maxWidth: '768px',
					},
					'@screen lg': {
						maxWidth: '1280px',
					},
					'@screen xl': {
						maxWidth: '1480px',
					},
				},
			})
		},
	],
}
