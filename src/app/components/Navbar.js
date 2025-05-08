import React from 'react'
import style from '@/app/styles/Navbar.module.css'
import Link from 'next/link'
// import Home from '../pages/Home'
const Navbar = () => {
    return (
        <div className={style.navbar}>
            <Link href='/' className={style.link}>
            <h1 className={style.header}>ZOO</h1>
            </Link>


            <ul className={style.list}>
                <li className={style.listItems}>
                    {/* <Link href='/' className={style.link}>HOME</Link> */}
                    <Link href='/about' className={style.link}>ABOUT</Link>
                    <Link href='/services' className={style.link}>SERVICES</Link>
                    <Link href='/contact' className={style.link}>CONTACT</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar