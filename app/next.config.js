const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: urlPrefix,
    basePath: urlPrefix,
    trailingSlash: true,
    publicRuntimeConfig: {
        basePath: urlPrefix,
    },
    output: "export",
    // webpack: (config) => {
    //     config.resolve.fallback = { fs: false };
    //
    //     return config;
    // },
}

module.exports = nextConfig
