import React from 'react'
import styles from './gallery.module.css'

const gallery = (props) => {
  return (
    <div className={styles.card}>
      <div>
        <img className={styles.image} src={props.link} alt="" />
      </div>
      <div className={styles.description}>
        <p className={styles.likes}>❤️</p>
        <p className={styles.name}>{props.name}</p>
      </div>
    </div>
  )
}

export default gallery
