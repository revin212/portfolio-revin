import React, {useState} from 'react'

export default function AnimationOnScroll() {
  const [scroll, setScroll] = useState(0)
 
    document.addEventListener('scroll', (e)=>{
        setScroll(e)
    })
  return (
    <>
    </>
  )
}
