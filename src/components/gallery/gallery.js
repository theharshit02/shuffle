import React from 'react'
import styles from './gallery.module.css'
import axios from 'axios';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const gallery = (props) => {
function handlelike(e){
  const id = e.target.id
  const url = `https://microassessment.onrender.com/api/discover/favourite/${id}`
  axios.get(url)
}

return (
    <div className={styles.card}>
      <div>
        <img className={styles.image} src={props.link} alt="" />
      </div>
      <div className={styles.description}>

        {props.like===1?
          <p id={props.id} onClick={handlelike} className={styles.likes}><FavoriteIcon className={styles.likeIcon} sx={{ color: "red" }}/></p>
        :
          <p id={props.id} onClick={handlelike} className={styles.likes}><FavoriteBorderIcon className={styles.likeIcon}/></p>}

        
        <p className={styles.name}>{props.name}</p>
      </div>
    </div>
  )
}

export default gallery
