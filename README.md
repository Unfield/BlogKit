
# BlogKit Setup Guide

Welcome to the setup guide for BlogKit - an open-source blog framework built with SvelteKit, Markdown, Skeleton UI, and Tailwind. This guide will walk you through the steps to set up the project on your local machine and get your blog up and running.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- Node.js and npm (Node Package Manager)
- Git

## Step 1: Clone the Repository

Open your terminal (command prompt) and navigate to the directory where you want to set up the project. Then, run the following command to clone the BlogKit repository:

```cmd
git clone https://github.com/Unfield/BlogKit.git
```

This will create a new folder named `BlogKit` containing all the project files.

## Step 2: Install Dependencies

Change into the project directory:

```cmd
cd BlogKit
```

Next, install the required dependencies using npm:

```cmd
npm install
```

## Step 3: Configure the Blog

The project comes with default configurations, but you may need to make some adjustments based on your preferences. Open the `blogkit-config.json` file in the project's src directory and modify any necessary settings, such as title, description, url, etc.

## Step 4: Create Blog Posts

Blog posts are written in Markdown and are located in the `src/posts` directory. To create a new blog post, simply add a new Markdown file with the following filename format: `post-title.md`.

The Markdown files should include a front matter section at the top, which contains metadata about the blog post:

```markdown
---
title: Introducing BlogKit
description: Learn how Markdown and Svelte components revolutionize content creation.
date: '2023-06-04'
categories:
  - Release
  - v1
  - BlogKit
published: true | false [If set to false the blog post is not visible by any means]
unlisted: true [If this is set to true the post can be viewed but will not be listed in the overview]
publishingDate: '2023-06-04 13:45' [if published is set to true this will be ignored]
---
```

## Step 5: Start the Development Server

```cmd
npm run dev
```

This will compile the project and start a local development server. You can access your blog by navigating to http://localhost:5173 in your web browser.

<pre></pre>

Congratulations! You've successfully set up BlogKit. Now you can start creating content and sharing your thoughts with the world.

If you encounter any issues or have questions, feel free to check the project's documentation or reach out to the community for support.

Happy blogging! 🚀