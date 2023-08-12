import React from "react";
import arrow from "../../assets/asset3.png";
import dashboard from "../../assets/asset4.png";
import styles from "./intro.module.css";
const Intro = () => {
  return (
    <div className={styles.main}>
      <div className={styles.head1}>
        Frictionless blockchain games build with MetaFab
      </div>
      <div className={styles.desc1}>
        The free, end-to-end, self-serve solution for games and gamified apps to
        integrate powerful blockchain infrastructure in minutes, not months.
      </div>
      <div className={styles.buttons1}>
        <div onClick={()=>{window.location.href="https://dashboard.trymetafab.com/auth/register"}}>
          <div className={styles.but1}>
            <span>Sign Up, We're Free</span>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div onClick={()=>window.open("https://calendly.com/metafab-erick/intro-call-with-metafab","_blank")}>
          <div className={styles.but2}>
            <span>Book an Intro Call</span>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <img className={styles.dashboardImg} src={dashboard} alt="dashboard" />
      <div className={styles.head2}>
        The solutions we wish we had when building our games
      </div>
      <div className={styles.desc2}>
        Interacting with blockchain systems should feel familiar for both
        players and developers. Read more about how our suite of tools makes
        this possible:
      </div>
      <div className={styles.devButton} onClick={()=>window.location.href="https://docs.trymetafab.com/docs/getting-started"}>
        <div className={styles.devBut}>
          <span>View All Developer Docs</span>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
