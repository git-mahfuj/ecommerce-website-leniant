import { cn } from '@/lib/utils'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
    className?: string,
    amount : number | undefined
}

const Priceformator = ({amount , className} : Props) => {
    const formattedPrice = new Number(amount).toLocaleString("en-US", {
        currency: "BDT",
        style: "currency",
        minimumFractionDigits: 2
    })
  return (
    <span className={cn("font-semibold text-sm", className)}>
        {formattedPrice}
    </span>
  )
}

export default Priceformator