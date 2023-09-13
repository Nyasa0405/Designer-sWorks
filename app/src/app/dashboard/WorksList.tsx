'use client'
import {WorkInfo} from '@/api/folders'
import Particles from '@/component/particles'
import WorksCard from '@/component/WorksCard'
import {Grid} from '@mui/joy'
import {Box} from '@mui/material'
import {motion} from 'framer-motion'
import React from 'react'


export default function WorksList(
  props: { folders: WorkInfo[] }
) {
  console.log(props.folders)
  return (
    <Box>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}/>
      <motion.div>
        <Grid
          container
          spacing={2}
          sx={{flexGrow: 1}}
          alignItems="center"
        >
          <Grid>
            <WorksCard caption={'説明文です'} title={'タイトルです'}/>
          </Grid>
          <Grid>
            <WorksCard caption={'説明文です'} title={'タイトルです'}/>
          </Grid>

          {props.folders.map((folder, index) => (
            <Grid key={index}>
              <WorksCard caption={folder.caption} title={folder.title}/>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  )
}