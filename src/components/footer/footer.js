import React from "react";
import styles from "./footer.module.css";
import arrow from '../../assets/asset3.png'
const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.head1}>Ready to build? Get started today</div>
      <div className={styles.buttons}>
        <div className={styles.devButton} onClick={()=>window.location.href="https://dashboard.trymetafab.com/auth/register"}>
          <div className={styles.devBut}>
            <span>Get Started, We're Free</span>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className={styles.devButton} onClick={()=>window.open("https://docs.trymetafab.com/docs/getting-started","_blank")}>
          <div className={styles.devBut}>
            <span>View Our Dev Docs</span>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className={styles.devButton} onClick={()=>window.open("https://calendly.com/metafab-erick/intro-call-with-metafab","_blank")}>
          <div className={styles.devBut}>
            <span>Schedule an Intro Call</span>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className={styles.devButton} onClick={()=>window.open("https://discord.com/invite/metafab","_blank")}>
          <div className={styles.devBut}>
            <span>Join Discord</span>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
