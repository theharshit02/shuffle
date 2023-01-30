import React, { useEffect, useState } from 'react'
import Category from '../components/category/category'
import Gallery from '../components/gallery/gallery'
import Shuffle from '../components/shuffle/shuffle'
import axios from 'axios'
import styles from './home.module.css'

const Home = () => {

  const [name, setname] = useState([])
  const [link, setlink] = useState([])
  const [id, setid] = useState([])
  const [cat, setcat] = useState("")
  const [filter, setfilter] = useState("asc")
  const [shfl, setshfl] = useState(0)
  const [liked, setliked] = useState([])

  useEffect(() => {
    async function getCategory(e){
      const url=`https://microassessment.onrender.com/api/discover/getimages/${cat}?sortDate=${filter}&shuffle=${shfl}`
      const result= await axios.get(url)
      setname(result.data.name)
      setlink(result.data.link)
      setid(result.data.id)
      setliked(result.data.like)
    }

    getCategory()
  }, [cat, filter, shfl, liked]);

  function selected(e){
    setcat(e)
  }
  
  function filtered(e){
    if(e === undefined || e === ""){
      setfilter("asc")
    }
    else{
      setfilter(e)
    }
  }

  function checked(e){
    setshfl(e)
  }
  return (
    <div className={styles.container}>
        <div className={styles.subContainer}>
            <Category selectCategory={selected} filteroption={filtered}/>
            <div className={styles.gallery}>
              <Gallery name={name[0]} link={link[0]} id={id[0]} like={liked[0]} />
              <Gallery name={name[1]} link={link[1]} id={id[1]} like={liked[1]} />
              <Gallery name={name[2]} link={link[2]} id={id[2]} like={liked[2]} />
              <Gallery name={name[3]} link={link[3]} id={id[3]} like={liked[3]} />
            </div>
        </div>
      <Shuffle check={checked}/>
    </div>
  )
}

export default Home
