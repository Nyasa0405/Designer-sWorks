const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: urlPrefix,
    basePath: urlPrefix,
    trailingSlash: true,
    publicRuntimeConfig: {
        basePath: urlPrefix,
    },
    output: "export"
}

module.exports = nextConfig
