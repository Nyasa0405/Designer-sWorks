import {getWorkInfos, getWorksFolders} from '@/api/folders'
import WorksList from '@/app/works/WorksList'
import {NonNullable} from '@/util/filterEx'


export default async function Content() {
  const list: string[] = await getWorksFolders()
  const folders = (await Promise.all(
    list.map(async (folder: string) => (
    await getWorkInfos(folder)
    )
  ))).filter(NonNullable)

  return (
    <div>
      <WorksList folders={folders}/>
    </div>
  )
}