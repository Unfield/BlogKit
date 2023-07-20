<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="h-full grid place-content-center text-3xl">
	<h1>{$page.status}: {$page.error?.message}</h1>
	<button
		on:click={() => history.back()}
		class="text-center text-xl mt-4 dark:text-surface-300 text-surface-700">back</button
	>
</div>
