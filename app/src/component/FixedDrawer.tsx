import {ImportContacts} from '@mui/icons-material'
import {Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import React from 'react'


function FixedDrawer() {
  return (
    <Drawer variant="permanent" open={true}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {<ImportContacts />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default FixedDrawer