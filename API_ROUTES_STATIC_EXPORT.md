# API Routes and Static Export

## Issue

Next.js API routes (`/app/api/*`) are **incompatible** with static export (`output: 'export'`). API routes require server-side execution, which is not available in static builds.

## Current Status

The GHL integration includes API routes:
- `/api/ghl/upsert` - Upsert contact to GoHighLevel

These routes **will not build** when `output: 'export'` is enabled in `next.config.ts`.

## Solutions

### Option 1: Vercel/Netlify Deployment (Recommended)
- Remove `output: 'export'` from `next.config.ts` for these deployments
- API routes work automatically on Vercel/Netlify
- No code changes needed

### Option 2: Static Export with Serverless Functions
- Keep `output: 'export'` for static pages
- Deploy API routes as separate serverless functions (Vercel Functions, Netlify Functions, AWS Lambda)
- Update front-end to call serverless function URLs instead of `/api/*`

### Option 3: External API Proxy
- Deploy API routes to a separate server/service
- Proxy requests from static site to external API
- Update front-end to call external API URLs

### Option 4: Client-Side GHL SDK (Not Recommended)
- Use GHL JavaScript SDK directly from client
- **Security Risk:** Exposes API keys to client-side
- Not recommended for production

## Temporary Workaround for Development

To build with static export during development, temporarily comment out API routes or use a build script that excludes them.

## Next Steps

For Phase 2 completion, the API route code is correct and will work on Vercel/Netlify. The static export limitation is a deployment concern to be addressed in Phase 17-18.

