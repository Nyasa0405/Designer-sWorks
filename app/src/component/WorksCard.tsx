import {AspectRatio, Card, CardContent, CardCover, CardOverflow, Divider, Typography} from '@mui/joy'
import React from 'react'
import {motion} from 'framer-motion'


function WorksCard(
  props: { title: string, caption: string, onClick?: () => void }
) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      onClick={ props.onClick }
    >
      <Card variant="outlined" sx={{ minHeight: '240px',width: 320 }}>
        <CardCover>
          <img
            src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
            srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </CardCover>
        <CardCover
          sx={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
          }}
        />
        <CardContent sx={{ justifyContent: 'flex-end' }}>
          <Typography level="title-md">{props.title}</Typography>
          {/* <Typography level="body-sm">{props.caption}</Typography> */}
        </CardContent>
      </Card>
    </motion.div>

  )
}

export default WorksCard
