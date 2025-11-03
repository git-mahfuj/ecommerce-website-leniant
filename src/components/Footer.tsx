import React from 'react'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SocialIcons from './SocialIcons'
import {Title} from './ui/text'
import { SubText } from './ui/text'
import { SubTitle } from './ui/text'
import Link from 'next/link'
import { quickLinksData } from '@/constants/data'
import { categoriesData } from '@/constants/data'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Footer = ({arrowClassName} : {arrowClassName?: string}) => {
  return (
    <footer>
      <FooterTop/>
      <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="px-5 space-y-2">
            <Logo />
            <SubText>
              Discover curated furniture collections at Shopcartyt, blending
              style and comfort to elevate your living spaces.
            </SubText>
            <SocialIcons
              className="text-darkColor/60 mt-0"
              iconClassname="text-leniant"
              tooltipClassname="bg-black text-white"
              arrowClassName='bg-black fill-black'
            />
          </div>
          <div className='px-5'>
            <SubTitle>Important Links</SubTitle>
            <ul className="space-y-3 mt-4">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='px-5'>
            <SubTitle>Links</SubTitle>
            <ul className="space-y-3 mt-4">
              {categoriesData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={`/category/${item?.href}`}
                    className="hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 px-12">
            <SubTitle>Newsletter</SubTitle>
            <SubText>
              Subscribe to our newsletter to receive updates and exclusive
              offers
            </SubText>
            <form className="space-y-3">
              <Input placeholder="Enter your email" type="email" required />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t text-center text-sm">
          <div className='flex flex-col justify-center items-center gap-3 lg:flex-row lg:gap-3 lg:items-center'>
            <p className='font-semibold'>© {new Date().getFullYear()}</p> <Logo className="text-sm" /><p>. All
            rights reserved.</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer