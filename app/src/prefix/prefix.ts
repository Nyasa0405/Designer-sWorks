export function addUrlPrefix(url: string) {
    return process.env.NEXT_PUBLIC_URL_PREFIX
        ? `/${process.env.URL_PREFIX}${url}`
        : url;
}