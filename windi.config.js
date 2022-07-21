module.exports = {
	extract: {

		include: [
			'layouts/**/*.html', // Layout files
			'content/**/*.{html,md}', // From content
			'themes/bgh-hugo-theme/layouts/**/*.html'
		],
		exclude: [
			'node_modules/**/*',
			'.git/**/*'
		]
	},
	preflight: true, // Default CSS reset
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				bg: 'var(--c-bg)',
				fg: 'var(--c-text)',
				code: 'var(--c-code)',
        gray: {
          '100': 'var(--c-gray-100)',
          '200': 'var(--c-gray-200)',
          '100': 'var(--c-gray-300)',
          '200': 'var(--c-gray-400)',
          '700': 'var(--c-gray-500)',
          '800': 'var(--c-gray-600)',
          '700': 'var(--c-gray-700)',
          '800': 'var(--c-gray-800)',
          '900': 'var(--c-gray-900)',
        },
				red: {
					'700': 'var(--c-red-700)'
				}
			},
			typography: {
				DEFAULT: {
					css: {
						color: 'inherit',
						code: {
              backgroundColor: 'var(--c-code-bg)',
              color: 'var(--c-code)',
            },
						a: {
              color: 'inherit',
              '&:hover': {
                color: 'inherit',
              },
            },
            strong: {
              color: 'var(--c-gray-900)',
            },
            h1: {
              color: 'var(--c-gray-900)',
            },
            h2: {
              color: 'var(--c-gray-900)',
            },
            h3: {
              color: 'var(--c-gray-900)',
            },
            h4: {
              color: 'var(--c-gray-900)',
            },
					}
				}
			}
		}
	},
  variants: {},
  plugins: [
    require('windicss/plugin/typography'),
		require('windicss/plugin/filters')
  ]
}
