import React, { useEffect, useState } from 'react'
import styles from './button.module.css'
import axios from 'axios'

const Button = (props) => {
  const [fetchCats, setfetchCats] = useState([]);

  async function getCategory(){
    const url="http://localhost:3000/api/discover/listCategories"
    const result= await axios.get(url)
    if(result.data){
      // console.log("result",result.data);
      setfetchCats(result.data);
    } 
  }

  function handleclick(e){
    props.select(e.target.id)
    console.log(e.target.id);
  }

  useEffect(() => {
    getCategory()
  }, []);

  return (
    <div>
      {console.log(fetchCats)}
      {fetchCats.map((i)=>{
        return <button onClick={handleclick} id={i} className={styles.button}>{i}</button>
      })}
    </div>
  )
}

export default Button
