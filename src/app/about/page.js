import React from 'react'
import Image from 'next/image'
import style from '@/app/styles/About.module.css'

const About = () => {
  return (
    <div className={style.container}>
        <div className={style.leftside}>
            <h1>About</h1>
          
        </div>
        <div className={style.rightside}>
            <Image className={style.image} src='' alt='user Image'/>
        </div>
    </div>
  )
}

export default About