import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	resolve: {
		alias: {
			$components: '/src/components'
		}
	},
	plugins: [sveltekit()]
});
