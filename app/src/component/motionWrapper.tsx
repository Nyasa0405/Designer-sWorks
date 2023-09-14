'use client' // クライアントサイドでレンダリングされるコンポーネントに必要な記述

import {AnimatePresence, motion} from 'framer-motion'
import {usePathname} from 'next/navigation'
import React from 'react'


export default function MotionWrapper(
  {
    children
  }: {
    children: React.ReactNode
  }) {
  // 一意のキーを設定するためにラップした画面のパスを取得
  const pathName = usePathname()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathName}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{ delay: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
