import React from 'react'
import TrendingGroup from './TrendingGroup'
import Collabo from './Collabo'

const RightBar = () => {
  return <section className='flex flex-col gap-4 '>
    <TrendingGroup />
    <Collabo />
  </section>
  
}

export default RightBar
