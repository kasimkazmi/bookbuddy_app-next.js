/** @type {import('next').NextConfig} */
const nextConfig = {
    // Define redirects for the application
    async redirects() {
        return [
            {
                source: '/', // The source path to redirect from
                destination: '/home', // The destination path to redirect to
                permanent: true // Indicates this is a permanent redirect (HTTP 301)
            }
        ];
    },

    // Configure image optimization settings
    images: {
        // Allow loading images from these external domains
        domains: [
            'img.icons8.com', // Icons8 domain for icons
            'firebasestorage.googleapis.com', // Firebase Storage domain for images
            'flagcdn.com' // CDN for flag images
        ]
    },

    // ESLint configuration
    eslint: {
        // Ignore ESLint errors during the build process
        ignoreDuringBuilds: true
    },

    // Experimental features configuration
    experimental: {
        // Specify external packages that can be used in server components
        serverComponentsExternalPackages: [
            'puppeteer-core', // Library for controlling headless Chrome
            '@sparticuz/chromium' // Chromium binary for Puppeteer
        ],
        // Control behavior related to Suspense in server components
        missingSuspenseWithCSRBailout: false // Do not bail out of rendering when Suspense is missing
    }
};

// Export the configuration object
export default nextConfig;
