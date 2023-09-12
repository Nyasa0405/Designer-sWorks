// `app/dashboard/route.ts` is the UI for the `/dashboard` URL
import {getFolders} from '@/api/folders'
import Content from '@/app/dashboard/Content'
import WorksList from '@/app/dashboard/WorksList'


export default async function Page() {
  return <div><Content></Content></div>
}