# Cloudflare vinext deployment

The application uses the App Router through vinext, Vite and the native Cloudflare Vite integration. Existing routes and metadata stay in `app/`; `src/views/` holds imported presentation components. The former `src/pages/` name was removed to prevent accidental Pages Router discovery.

## Commands

- `pnpm install --frozen-lockfile`
- `pnpm dev` — build Markdown data, then start the Workers development server on port 3000.
- `pnpm typecheck` — check TypeScript after the initial development/build command has generated Cloudflare types.
- `pnpm build` — regenerate Markdown data, then build and prerender the app.
- `pnpm start` — preview the production output locally on port 3000.
- `pnpm deploy` — regenerate blog data, build, and deploy using `vinext-cloudflare deploy`.

For deployment, authenticate with `pnpm exec cf auth login`, or provide `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in CI. The Worker retains its existing name, `multirun`. Inspect existing custom domains/routes in Cloudflare before the first production deployment; none are invented by this migration.

## Validation

After `pnpm build`, run `pnpm start --port 4174` in one terminal and `pnpm verify:production http://localhost:4174` in another. The verification script checks every page, HTML/RSC snapshot counts, metadata, immutable build assets, RSC responses, private-cache isolation and 404s. `pnpm lint` currently passes with warnings inherited from the project’s Next.js lint rules.

## Cache behavior

`vite.config.ts` selects `staticAssetsAdapter()` and prerenders discoverable routes. Blog slugs are enumerated by `generateStaticParams()`.

Rendered HTML, RSC and eligible metadata responses are bundled with the deployment. The Worker reads them through `ASSETS`; hashed JavaScript and CSS bypass the Worker. The private `/_vinext/static-cache/*` artifacts route through the Worker, which prevents direct public access.

This is a read-only response cache: a new deployment publishes a new content snapshot. Runtime ISR and `revalidatePath`/`revalidateTag` do not refresh packaged responses. Non-prerendered routes still render on demand and are not persisted by this adapter. No R2, KV or Response Store cache binding is needed for the current static content model.

`public/_headers` keeps long-lived caching for hashed build assets. Public files with stable names keep the platform's revalidation behavior.

## Migration details

- The Webpack-only blog hook is replaced by the explicit `build:blog` command; failures fail the build instead of silently publishing stale JSON.
- Blog JSON uses a static ESM import, compatible with Workers bundling.
- Configuration files using `module.exports` use the `.cjs` extension because the package is ESM.
- `docs/migration/wrangler.opennext.jsonc` is an archived reference only. Its R2 bucket is not deleted by this change. The active deployment config is `cloudflare.config.ts`.
- React is upgraded to 19 for vinext's React Server Components runtime.
- The native integration currently uses the published Cloudflare Vite plugin v2 prerelease and `cf` beta; versions are recorded in the lockfile.

Official references: [Cloudflare deployment](https://vinext.dev/docs/deploying/cloudflare), [Static Assets cache](https://vinext.dev/docs/guides/caching#static-assets-response-cache).
