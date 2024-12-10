# ACatThatPrograms Website

Codebase for https://acatthatprograms.com

## Develop

1. `pnpm i`
2. `pnpm dev`

Backend Functionality Requires [Websites Core API](https://github.com/ACatThatPrograms/websites-server)

## Deploy

1. Deploy BE Somewhere and set ENV accordingly on FE
2. Build front-end (`pnpm i && pnpm build`)*
3. Deploy `dist/` folder to static location

<sup>*Ensure that `public/` has the desired CV added as `cv.pdf`</sup>

## ENV

`VITE_ROOT_API_URL` - Root location of core api for this website, if using Core-API, this is `<DEPLOYED_API_URL>/cat`

