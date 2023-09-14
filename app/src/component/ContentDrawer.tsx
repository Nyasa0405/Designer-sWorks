import {Grid, Sheet, styled} from '@mui/joy'
import {Box, Drawer} from '@mui/material'
import React from 'react'

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
  ...theme.typography['body-sm'],
  padding: theme.spacing(3),
  color: theme.vars.palette.text.secondary,
  width: '600px'
}));

export default function ContentDrawer(
  props: {
    open?: boolean,
    onClose?: () => void,
    content: string
  }
) {
  return (
    <Drawer
      anchor={'right'}
      open={props.open}
      onClose={props.onClose}
      sx={{ flexGrow: 1 }}
    >
      <Grid container spacing={2}>
        <Grid >
          <Item className={'markdown'} dangerouslySetInnerHTML={{__html: props.content}}/>
        </Grid>
      </Grid>

    </Drawer>
  )
}