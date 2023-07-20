<script lang="ts">
	import '../blogkit-default.postcss';
	//import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.css';
	import '../app.postcss';
	import Header from '$components/header.svelte';
	import Footer from '$components/footer.svelte';
	import PageTransition from './transition.svelte';

	export let data;
</script>

<div class="h-full max-w-7xl grid mx-auto px-8">
	<Header />
	<main class="py-16 2xl:py-0">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>
	<Footer />
</div>
