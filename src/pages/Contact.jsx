import React from 'react'
import styles from '../style'
import { Navbar, Hero, Footer } from '../components'

const Contact = () => {
  return (
    <div className='bg-black w-full overflow-hidden flex-col min-h-screen'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className='text-white'>PAGE UNDER CONSTRUCTION</div>

        <div className={`bg-gray-900 ${styles.flexStart} flex-grow`}>        
            <Footer />
        </div>
    </div>
  )
}

export default Contact