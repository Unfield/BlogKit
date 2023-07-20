<script lang="ts">
	import * as config from '$lib/config';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	import NavbarElements from '../blogkit-navbar.json';
</script>

<nav class="py-12 md:flex md:justify-between hidden">
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>
	<ul class="links md:flex md:gap-12 md:my-0">
		{#each NavbarElements as Element}
			<li class="text-inherit no-underline">
				<a href={Element.href} target={Element.target ? Element.target : '_self'}>{Element.title}</a
				>
			</li>
		{/each}
	</ul>
	<LightSwitch rounded="rounded-xl" />
</nav>

<nav class="py-8 flex justify-between md:hidden">
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>
	<LightSwitch rounded="rounded-xl" />
</nav>
