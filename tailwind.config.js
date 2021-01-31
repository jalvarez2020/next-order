const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {
			colors: {
				gray: colors.coolGray,
				blue: '#A7F3D0',
				red: colors.rose,
				pink: colors.fuchsia,
			},

		},
	},
	variants: {
		//Do not use!! anything added here will delete all other variant defaults and only use what is written here
		extend: {
			//Add Variants here to extend existing variants i.e 'active' for buttons.
			textColor: ['visited', 'active'],
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
