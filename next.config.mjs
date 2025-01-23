/** @type {import('next').NextConfig} */
const nextConfig = {
    // Define redirects for the application
    // async redirects() {
    //     return [
    //         {
    //             source: '/', // The source path to redirect from
    //             destination: '/home', // The destination path to redirect to
    //             permanent: true // Indicates this is a permanent redirect (HTTP 301)
    //         }
    //     ];
    // },

    // Configure image optimization settings
    // Configure image optimization settings
    images: {
        // Configure image optimization settings using remotePatterns
        remotePatterns: [
            {
                protocol: 'https', // Specify the protocol
                hostname: 'img.icons8.com', // Icons8 domain for icons
                pathname: '/**' // Allow all paths
            },
            {
                protocol: 'https', // Specify the protocol
                hostname: 'firebasestorage.googleapis.com', // Firebase Storage domain for images
                pathname: '/**' // Allow all paths
            },
            {
                protocol: 'https', // Specify the protocol
                hostname: 'flagcdn.com', // CDN for flag images
                pathname: '/**' // Allow all paths
            }
        ]
    }

    // // ESLint configuration
    // eslint: {
    //     // Ignore ESLint errors during the build process
    //     ignoreDuringBuilds: true
    // }

    // // Experimental features configuration
    // experimental: {
    //     // Specify external packages that can be used in server components
    //     serverComponentsExternalPackages: [
    //         'puppeteer-core', // Library for controlling headless Chrome
    //         '@sparticuz/chromium' // Chromium binary for Puppeteer
    //     ],
    //     // Control behavior related to Suspense in server components
    //     missingSuspenseWithCSRBailout: false // Do not bail out of rendering when Suspense is missing
    // }
};

// Export the configuration object
export default nextConfig;
