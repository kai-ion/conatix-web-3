import React from 'react'
import styles from '../style'
import { HeroNews, Navbar, Footer, HeroNews2 } from '../components'
import useFetch from '../hooks/useFetch';

const News = () => {

  const { loading, error, data } = useFetch('http://localhost:1338/api/newsletters');
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className='bg-black w-full overflow-hidden flex flex-col min-h-screen'>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>      
          
          <div className={` bg-black ${styles.flexCenter} flex-grow`}>
            <div className={`${styles.boxWidth} container justify-content-center align-items-center`}>
              <HeroNews2 />
            </div>
          </div>

          <div className={`bg-gray-900 ${styles.flexStart}`}>        
              <Footer />
          </div>
    </div>
  )
}

export default News