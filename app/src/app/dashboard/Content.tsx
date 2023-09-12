import {getFolders} from '@/api/folders'
import WorksList from '@/app/dashboard/WorksList'


export default async function Content() {
  const folders = await getFolders()
  return <div>
    <WorksList folders={folders}/>
  </div>
}