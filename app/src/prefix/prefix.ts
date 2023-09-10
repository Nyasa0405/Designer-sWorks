export function addUrlPrefix(url: string) {
    return process.env.URL_PREFIX
        ? `/${process.env.URL_PREFIX}${url}`
        : url;
}