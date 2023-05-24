import React from 'react'
import styles from '/components/Header/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <Image src='/images/logo.svg' width={132} height={27}></Image>
        </div>
        <div className={styles.right}>
            <div className={styles.MobileView}></div>
            <div className={styles.DesktopView}>
                <ul>
                    <Link href='/'><a><li>Home</li></a></Link>
                    <Link href=''><a><li>Portfolio Blog </li></a></Link>
                    <Link href='/blog'><a><li>Blog</li></a></Link>
                    <Link href='/Shop'><a><li>Shop</li></a></Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header