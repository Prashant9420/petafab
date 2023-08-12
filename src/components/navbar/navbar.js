import React from 'react'
import twitterLogo from '../../assets/asset0.png'
import discordLogo from '../../assets/asset1.png'
import styles from './navbar.module.css'
import arrow from '../../assets/asset3.png'
const Navbar = () => {
  return (
    <div className={styles.main}>
        <div className={styles.leftMenu}>
            <div onClick={()=>{window.location.href="https://docs.trymetafab.com/docs/getting-started"}}>Docs</div>
            <div onClick={()=>{window.location.href="https://docs.trymetafab.com/docs/language-framework-sdks"}}>SDKs</div>
            <div onClick={()=>{window.location.href="https://docs.trymetafab.com/reference/getcollections"}}>API Reference</div>
            <div onClick={()=>{window.open("https://discord.com/invite/metafab","_blank")}}>Support</div>
            <img src={twitterLogo} alt="x" onClick={()=>{window.location.href="https://twitter.com/tryMetaFab"}}/>
            <img src={discordLogo} alt="discord" onClick={()=>{window.location.href="https://discord.com/invite/metafab"}}/>
        </div>
        <div className={styles.mainName} onClick={()=>{window.location.href=window.location.origin}}><span className={styles.leftBrace}>{"{"}</span><span className={styles.mainHeading}>PETAFAB</span><span className={styles.rightBrace}>{"}"}</span>{}</div>
        <div className={styles.rightBlock}>
            <div onClick={()=>{window.location.href="https://dashboard.trymetafab.com/auth/login"}}>Login</div>
            <div className={styles.getStarted} onClick={()=>{window.location.href="https://dashboard.trymetafab.com/auth/register"}}><span>Get Started</span><img src={arrow} alt="arrow"/></div>
        </div>
    </div>
  )
}

export default Navbar