<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title || 'Untitled Blog post'}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title || 'Untitled Blog post'} />
</svelte:head>

<article class="my-auto mx-auto lg:w-2/3 w-full m-0 lg:mx-auto">
	<hgroup>
		<h1 class="capitalize text-3xl">{data.meta.title || 'Untitled Blog post'}</h1>
		{#if data.meta.date}
			<p class="mt-2 text-surface-700 dark:text-surface-200">
				Published at {formatDate(data.meta.date)}
			</p>
		{/if}
	</hgroup>

	{#if data.meta.categories && data.meta.categories.length >= 1}
		<div class="flex gap-4 mt-4">
			{#each data.meta.categories as category}
				<span class="p-2 px-4 rounded-md bg-surface-200 dark:bg-surface-700">&num;{category}</span>
			{/each}
		</div>
	{/if}

	<div class="bk-prose py-10">
		<svelte:component this={data.content} />
	</div>
</article>
