'use client'
import {WorkInfo} from '@/api/folders'
import ContentDrawer from '@/component/ContentDrawer'
import MotionWrapper from '@/component/motionWrapper'
import WorksCard from '@/component/WorksCard'
import {Grid} from '@mui/joy'
import {Box} from '@mui/material'
import React, {useState} from 'react'


export default function WorksList(
  props: { folders: WorkInfo[] }
) {

  const [state, setState] = useState<number | undefined>()
  return (
    <Box>
      <MotionWrapper>
        <Box
          component='div'
          sx={{
            overflowY: 'auto',
            height: '90vh'
          }}
        >
          <Grid
            container
            spacing={2}
            alignItems="flex-start"
            padding={2}
          >
            <Grid>
              <WorksCard caption={'説明文です'} title={'タイトルです'}/>
            </Grid>
            <Grid>
              <WorksCard caption={'説明文です'} title={'タイトルです'}/>
            </Grid>

            {props.folders.map((folder, index) => (
              <Grid key={index}>
                <WorksCard
                  caption={folder.caption}
                  title={folder.title}
                  onClick={() => {
                    setState(index)
                  }}
                />
                <React.Fragment
                  key={index}
                >
                  <ContentDrawer
                    key={index}
                    content={folder.caption}
                    open={state == index}
                    onClose={() => setState(-1)}
                    onOpen={ () => setState(index) }
                  />
                </React.Fragment>

              </Grid>
            ))}
          </Grid>
        </Box>

      </MotionWrapper>
    </Box>
  )
}