import { join } from 'path'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs'

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts,md}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts,md}')],
	theme: {
		extend: {},
	},
	plugins: [forms,typography,...skeleton()],
}
