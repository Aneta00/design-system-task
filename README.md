# React DS Boilerplate

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
In addition there are several useful packages:

- Storybook
- Tailwind CSS (with container-queries plugin)
- Radix-ui

Use this repository as a starter to build your own app and feel free to add any tool/package that you need.

## Setup

```sh
# Install depedencies and set up repository.
pnpm i

# run the app
pnpm dev

# run Storybook
pnpm storybook
```

## Aneta's comments and process:

- Added more tokens to Tailwind config. Added dark theme colours.

- Created only two main components: MediaCard and Dialog. If I had more time I would created more atomic components that make of the inside of the dialog (like toggle buttons and titles). Would also create Headings as separate components, more typohraphy in general.

- MediaCard has a solution of accessible clickable area added in and two variants/layouts.

- Didn't have time to make it pixel perfect, was focusing on functinality as per spec document mentioning functionality is important. Still run out of time to implement changing the Favorite option, hardcoded it for now within data file.

- If it was going to production, would probably have removed the toggle for now, and spend time on making it visually more pleasant with a one Favorite option, and added more complex settings later.
