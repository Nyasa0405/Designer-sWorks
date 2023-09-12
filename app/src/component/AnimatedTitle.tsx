"use client";

import React from 'react'
import {Box, Typography} from '@mui/material'
import {keyframes} from '@emotion/react'


const revealTop = keyframes`
  0% {
    clipPath: polygon(0 0, 100% 0, 100% 0%, 0 0%);
  }
  100% {
    clipPath: polygon(0 0, 100% 0, 100% 50%, 0 50%);
  }
`

const revealBottom = keyframes`
  0% {
    clipPath: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
  }
  100% {
    clipPath: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
  }
`
type SplitCharProps = {
  char: string;
};

const SplitChar: React.FC<SplitCharProps> = ({char}) => {
  return (
    <span style={{position: 'relative', display: 'inline-block', width: '10ch', height: '10em',　overflow: 'hidden'}}>
      <Typography
        component="span"
        sx={{
          position: 'absolute',
          top: '0',
          animation: `${revealTop} 5s forwards`,
          width: '1em',
          whiteSpace: 'pre',
          clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)',
        }}
        color="secondary"
      >
        {char}
      </Typography>
      <Typography
        component="span"
        sx={{
          position: 'absolute',
          bottom: '0',
          animation: `${revealBottom} 5s forwards`,
          width: '1em',
          whiteSpace: 'pre'
        }}
      >
        {char}
      </Typography>
    </span>
  )
}

type AnimatedTitleProps = {
  text: string;
};

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({text}) => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {Array.from(text).map((char, idx) => (
        <SplitChar key={idx} char={char}/>
      ))}
    </Box>
  )
}

export default AnimatedTitle
