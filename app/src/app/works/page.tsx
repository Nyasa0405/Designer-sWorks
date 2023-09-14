// `app/dashboard/route.ts` is the UI for the `/dashboard` URL
import Content from '@/app/works/Content'
import {AnimatePresence} from 'framer-motion'
import {useRouter} from 'next/navigation'


export default function Page() {
  return (
  <div><Content></Content></div>
  )
}