<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{config.title || 'Untitled Blog post'}</title>
</svelte:head>

<section class="lg:w-2/3 w-full m-0 lg:mx-auto">
	<ul class="grid gap-8">
		{#each data.posts as post}
			<li
				class="last:border-none pb-8 border-b border-surface-200 dark:border-surface-700 max-w-7xl"
			>
				<a href={post.slug} class="text-3xl capitalize">{post.title || 'Untitled Blog post'}</a>
				{#if post.date}
					<p class="text-surface-700 dark:text-surface-200 cursor-default">
						{formatDate(post.date)}
					</p>
				{/if}
				<p class="mt-2 cursor-default">{post.description || ''}</p>
			</li>
		{/each}
	</ul>
</section>
