import path from "path";
import fs from "fs";

export async function getFolders() {
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  await delay(3000); // 例: 3秒の遅延
  const directoryPath = path.join(process.cwd(), 'works')
  console.log(directoryPath)
  return fs.readdirSync(directoryPath).filter(file =>
    fs.statSync(path.join(directoryPath, file)).isDirectory()
  )
}