import React from 'react'
import styles from './CssModule.module.css'


const CssModules = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}> Ejemplo Css</h1>
        <img src="" alt="" className={styles.img} />
        <p className={styles.parrafo}> esto es un parrafo</p>

      
    </div>
  )
}

export default CssModules
