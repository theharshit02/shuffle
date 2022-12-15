import React from 'react'
import styles from './shuffle.module.css'

export default function shuffle() {
  return (
    <div className={styles.shuffleDiv}>
      <button className={styles.button}>Shuffle</button>
    </div>
  )
}