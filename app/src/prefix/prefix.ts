import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export function addUrlPrefix(url: string) {
    const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || "";
    return basePath
        ? `/${basePath}${url}`
        : url;
}