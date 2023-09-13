import {StringUtils} from '@/util/MethodEx'
import fs from 'fs'
import path from 'path'


export async function getWorksFolders(): Promise<string[]> {

  const directoryPath = path.join(process.cwd(), 'works')
  const folders = fs.readdirSync(directoryPath).filter(file =>
    fs.statSync(path.join(directoryPath, file)).isDirectory()
  )
  return folders.map((folder): string => {
    return path.join(process.cwd(), 'works', folder)
  })
}

export type WorkInfo = {
  title: string,
  caption: string,
  link: string,
  tags: string[]
}

type Param = {
  title: string,
  link: string,
  tags: string[]
}

export async function getWorkInfos(folder: string): Promise<WorkInfo | null> {
//  const directoryPath = path.join(process.cwd(), 'works', folder)
  if (!fs.statSync(folder).isDirectory()) return null
  const files = fs.readdirSync(folder).map(file => path.join(folder, file)).filter((file) => fs.statSync(file).isFile())

  const readmes = files.filter((file) => {
    return StringUtils.isReadmePath(file)
  })
  const jsonPath = files.filter((file) => StringUtils.isJsonPath(file))
  const param: Param = jsonPath.length == 1 ? getParamJson(jsonPath[0]) : {title: '', link: '', tags: []}
  return {
    title: param.title,
    caption: await getReadme(readmes),
    link: param.link,
    tags: param.tags
  }
}

async function getReadme(paths: string[]): Promise<string> {
  let out: string = ''
  paths.forEach((filePath) => {
    out += fs.readFileSync(filePath, 'utf8')
  })
  return out
}

function getParamJson(jsonPath: string): Param {
  const rawData = fs.readFileSync(jsonPath, 'utf8')
  const jsonData: Param = JSON.parse(rawData)

  // オプショナル: 型のバリデーションを行う
  if (!jsonData.title || !jsonData.link || !Array.isArray(jsonData.tags)) {
    throw new Error('Invalid JSON structure')
  }

  return jsonData
}
