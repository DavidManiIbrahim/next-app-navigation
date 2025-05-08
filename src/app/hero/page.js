import React from 'react'
import style from '@/app/styles/Home.module.css'
import Image from 'next/image'
// import user from '../../../public/1.png'

const Home = () => {
  return (
    <div className={style.container}>
        <div className={style.leftside}>
          <h1>HOME</h1>
        </div>
        <div className={style.rightside}>
            <Image className={style.image} src='' alt='user Image'/>
        </div>
    </div>
  )
}

export default Home