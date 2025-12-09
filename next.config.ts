import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export disabled to allow API routes to work on Vercel
  // NOTE: API routes (/app/api/*) require server-side execution
  // For static hosting (cPanel), you'll need to use serverless functions or remove API routes
  // output: 'export',

  // Enforce trailing slash behavior
  trailingSlash: false, // Remove trailing slashes

  // Image optimization (disabled for static export, use unoptimized)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
