import React from 'react'
import Button from '../button/button'
import Filter from '../filter/filter'
import styles from './category.module.css'


const category = () => {

  return (
    <div>
      <div className={styles.category}>
        <Button />
      </div>
      <div className={styles.filter}>
        <Filter />
      </div>
    </div>
  )
}

export default category
