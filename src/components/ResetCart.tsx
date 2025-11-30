import React from 'react'
import useStore from '../../store'

const ResetCart = () => {
    const {resetCart , items} = useStore()
    
  return (
    <div>ResetCart</div>
  )
}

export default ResetCart