import React, { useState } from 'react'
import styles from './filter.module.css'

const Filter = (props) => {
  const [option, setoption] = useState()
  // setoption()
  function handlechange(e){
    setoption(e.target.value)
  }
  props.filter(option)
  // console.log(option);

  return (
    <div>
      <select  name="" id="select" className={styles.filter} onChange={handlechange}>
        <option value="">Filter</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
        <option value="likes">Likes</option>
      </select>
    </div>
  )
}

export default Filter
