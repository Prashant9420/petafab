import React from "react";
import styles from "./outro.module.css";
import sdks from '../../assets/asset17.png'
import arrow from '../../assets/asset3.png'
import Card from '../card/card'
const Outro = () => {
  return (
    <div className={styles.main}>
      <div className={styles.head1}>See MetaFab in action</div>
      <div className={styles.desc1}>
        Check out Arcane Survivor, a demo game implementing MetaFab products
        like player authentication, gasless transactions, game currencies,
        tokenized items, shops, crafting, & more. Built in under a week by a
        developer with no prior blockchain experience.
      </div>
      <div className={styles.gameBox}>
      <div className={styles.play} onClick={()=>window.location.href="https://v6p9d9t4.ssl.hwcdn.net/html/6828646/index.html"}>
        <div>
          <span>Play Arcane Survivor</span>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      </div>
      <div className={styles.head1}>We put in the time, money & headache, so you don't have to</div>
      <div className={styles.desc1}>
        Reliable, scalable & secure systems; battle tested to handle 100,000's
        of active players and 10,000+ transactions per second, per game.
      </div>
      <div className={styles.play} onClick={()=>window.open("https://docs.trymetafab.com/docs/understanding-gasless-transactions","_blank")}>
        <div className>
          <span>Learn More</span>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      <div className={styles.cards}>
        <Card
          heading={"Get to Market Faster"}
          content={
            "Offset months of ground-up smart contract and systems development with our simple but powerful REST APIs and SDKs that cover 95% of blockchain implementation and design patterns for games in just a few lines of code."
          }
          footer={"View Our SDKs"} comp={"outro"}
        />
        <Card
          heading={"Focus on Building a Great Game"}
          content={
            "Reallocate the 10's to 100's of thousands saved on blockchain R&D toward more developers, designers, and areas that scale, not toward building, writing, rewriting & re-rewriting efficient and immutable contracts & systems."
          }
          footer={"View Our Documentation"} comp={"outro"}
        />
      </div>
      <div className={styles.head1}>Take your game & our tools anywhere</div>
      <div className={styles.desc1}>
        Build programmatically using your preferred languages across popular
        blockchains with one vertically integrated infrastructure suite -
        MetaFab.
      </div>
      <div className={styles.play} onClick={()=>window.open("https://docs.trymetafab.com/docs/language-framework-sdks","_blank")}>
        <div>
          <span>View Developer SDKs</span>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      <img className={styles.sdkImgs} src={sdks} alt="sdks"/>
    </div>
  );
};

export default Outro;
