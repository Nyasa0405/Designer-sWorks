import path from 'path'
export const StringUtils = {
  isEmpty(value: string): boolean {
    return value === ''
  },
  isReadmePath(value: string): boolean {
    return path.extname(value) == ".md"
  },
  isJsonPath(value: string): boolean {
    return path.extname(value) == ".json"
  },
};
