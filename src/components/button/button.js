import React, { useEffect, useState } from 'react'
import styles from './button.module.css'
import axios from 'axios'

const Button = () => {
  const [fetchCats, setfetchCats] = useState([]);

  async function getCategory(){
    const url="http://localhost:3000/api/discover/listCategories"
    const result= await axios.get(url)
    if(result.data){
      // console.log("result",result.data);
      setfetchCats(result.data);
    } 
  }

  useEffect(() => {
    getCategory()
  }, []);

  return (
    <div>

      {/* <button onClick={getCategory}>click me</button> */}
      {/* {getCategory()} */}
      {console.log(fetchCats)}
      <button className={styles.button}>{fetchCats[0]}</button>
      <button className={styles.button}>{fetchCats[1]}</button>
      {/* <button className={styles.button}>hello</button>
      <button className={styles.button}>hello</button> */}
    </div>
  )
}

export default Button
