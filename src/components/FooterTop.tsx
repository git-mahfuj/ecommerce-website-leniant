import React from 'react'
import Container from './Container'
import { Clock, Mail, MapPin, PhoneCall } from 'lucide-react'

const FooterTop = () => {
    const footertopdata = [
        {
            id : 1,
            title : "Visit us",
            des : "Lorem ipsum",
            icon : <MapPin/>
        },
        {
            id : 2,
            title : "Call us",
            des : "Lorem ipsum",
            icon : <PhoneCall />
        },
        {
            id : 3,
            title : "Working Hours",
            des : "Lorem ipsum",
            icon : <Clock />
        },
        {
            id : 4,
            title : "Email Us",
            des : "Lorem ipsum",
            icon : <Mail />
        },
    ]
  return (
    <div className='border-t border-gray-200 mt-2'>
        <Container>
            <div className='grid grid-cols-2 justify-center items-center w-full px-7 pt-6 gap-7 md:w-[60%] mx-auto lg:grid-cols-4 md:gap-12 lg:justify-around lg:gap-19'>
                {footertopdata?.map((i) => (
                    <div key={i.id} className='flex items-center gap-2'>
                       <div>{i.icon}</div>
                       <div>
                        <p className='text-lg font-medium'>{i.title}</p>
                        <p className=''>{i.des}</p>
                       </div>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default FooterTop