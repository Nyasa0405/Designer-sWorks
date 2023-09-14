'use client'
import {Home, KeyboardArrowRight, ImportContacts} from '@mui/icons-material'
import {List, ListItem, ListItemButton, ListItemContent, ListItemDecorator} from '@mui/joy'
import {AnimatePresence} from 'framer-motion'
import {useRouter} from 'next/navigation'


export function SideMenu() {
  const router = useRouter()
  return (
    <AnimatePresence>
      <List sx={{width: '200px'}}>
        <ListItem>
          <ListItemButton color="primary" onClick={() => router.push("/")}>
            <ListItemDecorator><Home /></ListItemDecorator>
            <ListItemContent>Home</ListItemContent>
            <KeyboardArrowRight />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton color="primary" onClick={() => router.push("/works")}>
            <ListItemDecorator><ImportContacts /></ListItemDecorator>
            <ListItemContent>Works</ListItemContent>
            <KeyboardArrowRight />
          </ListItemButton>
        </ListItem>
      </List>
    </AnimatePresence>
  )
}