import React from 'react'
import styles from './Layout.module.css'
import Link from 'next/link'
export default function Layout({children}) {
  return (
    <div className={styles.main}>
    <header className={styles.header}>
        <Link href={'/'}>
        راشا خودرو
        </Link>
        <p>
        دقیق ترین سامانه فروش خودرو در کشور

        </p>
    </header>
    <div className={styles.container}>{children}</div>
    <footer  className={styles.footer}>
        تمامی حقوق در اختیار تیم تامینو است | تامینو &copy;
    </footer>
    
    </div>
    
  )
}
