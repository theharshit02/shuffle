import React from 'react'
import Button from '../button/button'
import Filter from '../filter/filter'
import styles from './category.module.css'


const category = (props) => {

  function handleselected(e){
    props.selectCategory(e)
  }

  function handlefilter(e){
    props.filteroption(e)
  }
  return (
    <div>
      <div className={styles.category}>
        <Button select={handleselected} />
      </div>
      <div className={styles.filter}>
        <Filter filter={handlefilter}/>
      </div>
    </div>
  )
}

export default category
