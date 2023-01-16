import React, { useEffect, useState } from 'react'
import Category from '../components/category/category'
import Gallery from '../components/gallery/gallery'
import Shuffle from '../components/shuffle/shuffle'
import axios from 'axios'
import styles from './home.module.css'

const Home = () => {

  const [name, setname] = useState([])
  const [link, setlink] = useState([])
  const [cat, setcat] = useState("")
  const [filter, setfilter] = useState("asc")
  console.log(filter);

  console.log(cat);
  console.log(name);
  console.log(link);

  async function getCategory(e){
    // e.preventDefault()
    const url=`http://localhost:3000/api/discover/getimages/${cat}?sortDate=${filter}&shuffle=0`
    const result= await axios.get(url)
    // console.log(result.data.name);
    setname(result.data.name)
    setlink(result.data.link)
  }

  useEffect(() => {
    getCategory()
  }, []);
  // const url = "http://localhost:3000/api/discover/getimages/Nature?sortDate=asc&shuffle=0"
  // const data = axios.get(url)
  // console.log(data.data.link);

  function selected(e){
    setcat(e)
  }
  
  function filtered(e){
    setfilter(e)
  }

  return (
    <div className={styles.container}>
        <div className={styles.subContainer}>
            <Category selectCategory={selected} filteroption={filtered}/>
            <div className={styles.gallery}>
              <Gallery name={name[0]} link={link[0]} />
              <Gallery name={name[1]} link={link[1]} />
              <Gallery name={name[2]} link={link[2]} />
              <Gallery name={name[3]} link={link[3]} />
            </div>
        </div>
      <Shuffle/>
    </div>
  )
}

export default Home
