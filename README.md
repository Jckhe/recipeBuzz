# RecipeBuzz

RecipeBuzz is a web application that allows you to search and discover new recipes to try. With a simple and easy-to-use interface, RecipeBuzz helps you find your next favorite meal, bookmark it, and easily access your favorite recipes anytime.

[Deployed URL](https://recipe-buzz.vercel.app/)

## Features

- Search for recipes using the search bar on the main page
- View recipe cards containing meal names, categories, preview images, and brief instructions
- Click on a recipe card to open a modal with more details, including ingredients, measurements, and detailed instructions
- Watch the associated YouTube video for each recipe
- Star and favorite recipes to bookmark them for future reference
- Access your bookmarked recipes in the Recipes tab, with data persistence even after leaving the site

## Technologies Used

- Next.js
- React
- TypeScript
- Chakra UI
- Redux Toolkit
- TanStack UseQuery

# Implementation of Dynamic Search

Dynamic search is implemented into the Search component which consists of the SearchBar and IndexContainer component.
The way it works is that the we use the UseQuery hook from the TanStack library to cache the recipe objects client-sided, by doing so we can both fetch and cache the recipe objects in memory. This means if the user decides to search for the same recipes again, we save time and energy usuage by not needing to fetch again (this also optimizes user experience by saving the time it needs to fetch).

In combination with the useQuery hook, we have a debounce wrapper function around the refetch() function from the useQuery hook in order to throttle and delay the time it takes the user to input a character in order to avoid being rate limited by the API.

# Lazy Loading

Added lazy loading and memoization of certain components to prevent unnecessary rerenders and only loading images/components when they are in the viewport.