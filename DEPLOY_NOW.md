# Dukun — Deploy Now

This project is prepared for a normal Vite production deployment. No terminal is required on your computer if you deploy through a Git provider + Vercel/Netlify.

## Recommended: Vercel

1. Put this project in a GitHub repository.
2. In Vercel, choose **New Project** and import that repository.
3. Keep the detected framework as **Vite**.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Install command: `npm install` (default is fine).
7. Deploy.

The project pins Node compatibility through `.nvmrc` and `package.json` so Vite 7 gets a supported Node runtime.

## If deploying under a sub-path

The source now uses `import.meta.env.BASE_URL` for public assets. The default `/` is correct for a root domain such as `https://example.com/`.

For a repository deployment such as `https://username.github.io/dukun-website/`, set:

`VITE_BASE_PATH=/dukun-website/`

before the Vite build. On Vercel/Netlify this is a dashboard environment variable; no terminal is needed.

## Before going live

The source has been corrected so the collection test expects all five objects, public asset URLs work with a configured Vite base path, and a failed collection-data request falls back instead of leaving the WebGL scene empty.

The included `dist/` directory is an older prebuilt snapshot. For production, let the hosting provider rebuild from source with `npm run build` rather than manually uploading that old snapshot.
