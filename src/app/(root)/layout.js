import Footer from '@/components/Footer'
import React from 'react'
import Navber from '@/components/Navber'
export default function Mainlayout({children}) {
  return (
   <>
   
   
   <Navber/>

   {children}
   
   <Footer/>
   </>
  )
}
