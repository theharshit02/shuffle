import React from 'react'
import styles from './gallery.module.css'
import axios from 'axios';

const gallery = (props) => {
function handlelike(e){
  const id = e.target.id
  const url = `http://localhost:3000/api/discover/favourite/${id}`
  axios.get(url)
}

  return (
    <div className={styles.card}>
      <div>
        <img className={styles.image} src={props.link} alt="" />
      </div>
      <div className={styles.description}>
        <p id={props.id} onClick={handlelike} className={styles.likes}>❤️</p>
        <p className={styles.name}>{props.name}</p>
      </div>
    </div>
  )
}

export default gallery
