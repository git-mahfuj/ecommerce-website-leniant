import React from 'react'
import { getProductsCategory } from '@/sanity/query'
import Shop from '@/components/Shop'

const Shoppage = async () => {
    const categories = await getProductsCategory(6)
    console.log(categories)
  return (
    <div>
        <Shop categories={categories} />
    </div>
  )
}

export default Shoppage