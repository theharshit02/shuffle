import React from 'react'
import styles from './gallery.module.css'

const gallery = () => {
  return (
    <div className={styles.card}>
      <div>
        <img className={styles.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Nature_Portrait.jpg/1200px-Nature_Portrait.jpg" alt="" />
      </div>
      <div className={styles.description}>
        <p className={styles.likes}>❤️</p>
        <p className={styles.name}>image name</p>
      </div>
    </div>
  )
}

export default gallery
