'use client'
import {SideMenu} from '@/component/SideMenu'
import {Grid, Typography} from '@mui/joy'
import {Box} from '@mui/material'
import {usePathname} from 'next/navigation'
import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'


function AnimatedText({text}: { text: string }) {
  const customRandom = () => {
    let number
    do {
      number = Math.random() * 1200 - 1200/2
    } while (-200 <= number && number <= 200)
    return number
  }
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <AnimatePresence
        key={text}
      >
        <div style={{display: 'flex'}}>
          {text.split('').map((char, i) => (
            <motion.div
              key={char}
              initial={{x: customRandom(), y:  customRandom(), opacity: 0}}
              animate={{x: 0, y: 0, opacity: 1}}
              transition={{duration: 2}}
            >
              {char}
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </Box>
  )
}

export default function MainContent(
  {children}:
    { children: React.ReactNode }
) {
  const location = usePathname()

  const pageTitle = location == '/' ? 'Home' : 'Works'
  return (
    <Box>
      <Typography
        level="h1"
        noWrap
        variant="plain"
        sx={{
          position: 'fixed',
          fontSize: '8rem',
          width: '100%',
          height: '100%',
          alignSelf: 'center'
        }}
      >
        <AnimatedText text={pageTitle}/>
      </Typography>
      <Grid
        container
        direction="row"
        spacing={2}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid xs={'auto'}>
          <SideMenu/>
        </Grid>
        <Grid xs>
          {children}
        </Grid>
      </Grid>
    </Box>
  )
}
