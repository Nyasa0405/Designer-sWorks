import {Close} from '@mui/icons-material'
import {Grid, Sheet, styled} from '@mui/joy'
import {Box, Drawer, SwipeableDrawer} from '@mui/material'
import React from 'react'

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
  ...theme.typography['body-sm'],
  padding: theme.spacing(3),
  color: theme.vars.palette.text.secondary,
  width: '100%'
}));

export default function ContentDrawer(
  props: {
    open?: boolean,
    onClose?: () => void,
    onOpen?: () => void
    content: string
  }
) {
  return (
    <SwipeableDrawer
      anchor={'right'}
      open={props.open}
      onClose={ () => props.onClose?.() }
      onOpen={ () => props.onOpen?.() }
      sx={{ flexGrow: 1, width: 1 }}
    >
      <Box
        sx={{

        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            p: 0
          }}
          onClick={ () => props.onClose?.() }
        >
          <Close
          />
        </Box>

        <Item className={'markdown'} dangerouslySetInnerHTML={{__html: props.content}}/>
      </Box>


    </SwipeableDrawer>
  )
}