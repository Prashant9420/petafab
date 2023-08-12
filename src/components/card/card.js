import React from 'react'
import styles from './card.module.css'
import arrow from '../../assets/asset3.png'
const Card = ({imgPath,heading,content,footer,comp}) => {
  return (
    <div className={styles.main} style={{width:(comp && window.innerWidth<=768)?'100vw':(comp)?'448px':(window.innerWidth<=768)?'100vw':'228px',padding:(!comp)?'10px':'0px 10px'}}>
        <div className={styles.upper}>
            {(imgPath)?<img className={styles.icons} alt="logo" src={imgPath}/>:null}
            <div className={styles.heading}>{heading}</div>
        </div>
        <div className={styles.cont}>{content}</div>
        <div className={styles.foot}><div>{footer}</div><img src={arrow} alt="arrow" style={{paddingLeft:'10px'}}/></div>
    </div>
  )
}

export default Card