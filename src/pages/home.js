import React from 'react'
import Category from '../components/category/category'
import Gallery from '../components/gallery/gallery'
import Shuffle from '../components/shuffle/shuffle'

import styles from './home.module.css'

const home = () => {
  return (
    <div className={styles.container}>
        <div className={styles.subContainer}>
            <Category/>
            <div className={styles.gallery}>
              <Gallery/>
              <Gallery/>
              <Gallery/>
              <Gallery/>
            </div>
        </div>
      <Shuffle/>
    </div>
  )
}

export default home
