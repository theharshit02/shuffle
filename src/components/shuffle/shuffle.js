import React from 'react'
import styles from './shuffle.module.css'

export default function shuffle(props) {
  function handleclick(){
    props.check(1)
  }
  return (
    <div className={styles.shuffleDiv}>
      <button onClick={handleclick} className={styles.button}>Shuffle</button>
    </div>
  )
}