/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: false,
  theme: {
		extend: {
			colors: {
				custom: {
					green: '#00BF6F',
					greenDark: '#006038',
					mustard: '#F9C645'
				},

				blue: {
					100: '#D8EBFD',
					200: '#88C9FF',
					300: '#459AFF',
					400: '#005FC5',
					500: '#004F84',
					600: '#2C4368'
				},

				gray: {
					100: '#E1E5EA',
					200: '#C4C9D4',
					300: '#BBBDBF',
					400: '#95A0B4',
					500: '#707070',
					600: '#464A54',
					700: '#272A32'
				},

				silver: {
					100: '#EDEDED'
				},

				notifications: {
					light: {
						success: '#e6f8f0',
						alert: '#fdede5'
					},

					normal: {
						success: '#06BF6F',
						alert: '#FC4C02',
						verify: '#f8d304'
					}
				}
			},
			fontSize: {
				sm: [ '.625rem', '1rem' ], //10px
				md: [ '.75rem', '1rem' ], //12px
				mdl: ['0.8125rem', '1rem'], //13px
				lg: [ '.875rem', '1rem' ], //14px
				xl: [ '1rem', '1.5rem' ], //16px
				'2xl': [ '1.125rem', '1.5rem' ], //18px
				'3xl': [ '2rem', '1.5rem' ],
				'4xl': [ '1.375rem', '1.5rem' ] //22px
			},
			fontWeight: {
				hairline: 100,
				thin: 200,
				light: 300,
				regular: 400,
				medium: 500,
				semibold: 600,
				bold: 700,
				extrabold: 800,
				black: 900
			},
			padding: {
				sm: '8px',
				md: '16px',
				lg: '24px',
				xl: '1rem'
			},
			boxShadow: {
				sm: '0px 0px 7px 0px rgb(0 0 0 / 20%);',
				md: '-1px 2px 5px 1px rgba(0,0,0,0.1);'
			},
			borderColor: {
				green: '#00BF6F',
				blue: '#004F84',
				blueRoyal: '#0172CE',
				yellow: '#F9C645',
				orange: '#FC4C02',
				gray: '#707070'
			},
			borderWidth: {
				'1': '1px'
			}
		}
	},
  plugins: [],
}
