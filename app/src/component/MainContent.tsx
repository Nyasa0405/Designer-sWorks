'use client'
import {SideMenu} from '@/component/SideMenu'
import {ArrowBack, KeyboardDoubleArrowLeftOutlined, KeyboardDoubleArrowLeftTwoTone} from '@mui/icons-material'
import {Grid, Tooltip, Typography} from '@mui/joy'
import {Box, useMediaQuery} from '@mui/material'
import {grey} from '@mui/material/colors'
import {usePathname} from 'next/navigation'
import React, {useEffect, useState} from 'react'
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

  const [state, setState] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    // 画面サイズが小さい時にメニューを非表示にする
    if (isMobile) {
      setState(false);
    } else {
      setState(true);
    }
  }, [isMobile]);

  const [view, setMenu] = useState(false)

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
      { !state ?
        <Box
          sx={{
            position: 'fixed',
            top: 40,
            left: 0,
            zIndex: 'tooltip',
            background: grey[600]
          }}
          onClick={() => {
            if (view) setMenu(false)
            else setMenu(true)
          }}
        >
          { view ? <SideMenu /> : null }
          <Tooltip
            title="open Menu"
            variant="plain"
            color="neutral"
            sx={{
              p: 1
            }}
          >
            <KeyboardDoubleArrowLeftOutlined fontSize="large" />
          </Tooltip>
        </Box>
        : null
      }
      <Grid
        container
        direction="row"
        spacing={2}
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid xs={'auto'}>
          {state ? <SideMenu /> : null}
        </Grid>
        <Grid xs>
          {children}
        </Grid>
      </Grid>
    </Box>
  )
}
