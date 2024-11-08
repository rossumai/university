# Rossum.ai University

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Run the website locally

First, install dependencies:

```
yarn
```

Then, run it:

```
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Run tests locally

```
yarn playwright test [--ui]
```

If needed, you can also build the website locally:

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service or locally via `yarn serve`.

## Archiving and deprecating pages

1. Use `<Deprecated />` tag on all the relevant pages
1. Move the page as is into the `deprecated` folder
1. Adjust any broken links and imports
1. Add `slug` into the [front matter](https://docusaurus.io/docs/create-doc#doc-front-matter) (to remove the `/deprecated/` path from the URL for backwards compatibility)
