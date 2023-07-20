---
title: Example Blog Post
description: This is just a litle example on how you can create a new Blog Post
date: '2023-07-20'
categories:
  - Tutorial
  - BlogKit
published: true
---

<script lang="ts">
	let count = 0

	const increment = () => (count += 1)
	const showAlert = () => { alert("Hello my Friend!") }
</script>

# BlogKit

### Table of Contents

Your new BlogKit Blog is working! 🎉

## Code Highlighting

```ts
function greet(name: string) {
	console.log(`Hey ${name}! 👋`);
}
```

## Sevelte Components

<button on:click={increment} class="btn py-2 px-4 bg-surface-200 dark:bg-surface-700">
	Counter: {count}
</button>

## TailwindCSS Styling of Svelte Components

<button class="btn py-2 px-4 rounded-full bg-green-200 dark:bg-green-700">Click Me, I Do Nothing</button>

### TailwindCSS

```css
class="py-2 px-4 rounded-full bg-green-200 dark:bg-green-700"
```
