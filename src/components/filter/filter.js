import React from 'react'
import styles from './filter.module.css'

const filter = () => {
  return (
    <div>
      <select name="" id="" className={styles.filter}>
        <option value="">Filter</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
        <option value="likes">Likes</option>
      </select>
    </div>
  )
}

export default filter
