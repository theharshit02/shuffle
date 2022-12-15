import React from 'react'
import Category from '../components/category/category'
import Filter from '../components/filter/filter'
import Gallery from '../components/gallery/gallery'
import styles from './home.module.css'

const home = () => {
  return (
    <div className={styles.container}>
        <div className={styles.subContainer}>
            <Category/>
            <Filter/>
            <Gallery/>
        </div>
    </div>
  )
}

export default home
