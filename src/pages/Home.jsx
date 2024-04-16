import React from 'react'
import styles from '../style'
import { Navbar, Hero, Footer } from '../components'

const Home = () => {
  return (
    <div className='bg-black w-full overflow-hidden flex-col min-h-screen'>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>

          <div className={`bg-black ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>

          <div className={`bg-gray-900 ${styles.flexStart} flex-grow`}>        
              <Footer />
          </div>
    </div>
  )
}

export default Home