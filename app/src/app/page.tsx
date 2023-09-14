'use client'
import MotionWrapper from '@/component/motionWrapper'
import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/navigation'
import {AnimatePresence} from 'framer-motion'


const App = () => {
  const router = useRouter()

  const [isVisible, setIsVisible] = useState(false)

  return (
    <div>
      <MotionWrapper>
        <button type="button" onClick={() => router.push('/dashboard')}>
          Dashboard
        </button>
      </MotionWrapper>
    </div>

)
};

export default App;