import React from 'react'
import Homeslider from './Homeslider'
import Container from './Container'

const Homebanner = () => {
  return (
    <Container className='px-6 lg:w-[80%] mx-auto'>
        <Homeslider/>
    </Container>
  )
}

export default Homebanner