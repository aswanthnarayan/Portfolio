import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


const AOSWrapper = ({children}) => {
    useEffect(()=>{
        AOS.init({
            once:true
        })
    },[])
  return (
    <div>{children}</div>
  )
}

export default AOSWrapper