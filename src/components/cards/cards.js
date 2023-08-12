import React from "react";
import Card from "../card/card";
import img1 from "../../assets/asset5.png";
import img2 from "../../assets/asset6.png";
import img3 from "../../assets/asset7.png";
import img4 from "../../assets/asset8.png";
import img5 from "../../assets/asset9.png";
import img6 from "../../assets/asset10.png";
import img7 from "../../assets/asset11.png";
import img8 from "../../assets/asset12.png";
import img9 from "../../assets/asset13.png";
import img10 from "../../assets/asset14.png";
import img11 from "../../assets/asset15.png";
import img12 from "../../assets/asset16.png";
import styles from "./cards.module.css";
const Cards = () => {
  return (
    <div className={styles.mainn}>
      <Card
        imgPath={img1}
        heading={"No Friction For Players Or Developers"}
        content={
          "Blend blockchain invisibly into the backbone of your games. Designed for all developers, we support 10+ programming languages and have complete Unreal Engine & Unity SDKs."
        }
        footer={"View All SDKs"}
      />
      <Card
        imgPath={img2}
        heading={"Player Management, Registration & Auth"}
        content={
          "Streamline player authentication & registration through our custom white-label onboarding flow. Set, update & manage any game-related player data - no database required."
        }
        footer={"Learn About Auth Systems"}
      />
      <Card
        imgPath={img3}
        heading={"Managed Wallets & External Wallets"}
        content={
          "Generate player wallets automatically & support external wallets (EOAs) through Metamask, Coinbase Wallet & WalletConnect. Write one set of code for interactions with any wallet type."
        }
        footer={"Learn About Player Wallets"}
      />
      <Card
        imgPath={img4}
        heading={"Gasless & Fully Managed Transactions"}
        content={
          "Eliminate obtrusive gas fees, wallet popups & prompts during gameplay through our systems that forward, sign, send, prioritize, retry & verify transactions automatically."
        }
        footer={"Learn About Transactions"}
      />
      <Card
        imgPath={img5}
        heading={"Game Currencies (ERC20)"}
        content={
          "Launch blockchain-based in-game currencies with one line of code. Design, monitor & fine-tune your economy with real-time visibility into how players engage and transact."
        }
        footer={"Learn About Game Currencies"}
      />
      <Card
        imgPath={img6}
        heading={"Digital Collectibles & Items (ERC1155)"}
        content={
          "Create & manage tokenized weapons, skins, materials, consumable or other items. Enable traditional player experiences while interacting with web3 systems under the hood."
        }
        footer={"Learn About Items"}
      />
      <Card
        imgPath={img7}
        heading={"Shops & Item Crafting (On-Chain)"}
        content={
          "Launch highly configurable shop and crafting systems in under 5 minutes to allow players to purchase, sell and craft in game items with your game currency or other currencies."
        }
        footer={"Learn About Shops & Crafting"}
      />
      <Card
        imgPath={img8}
        heading={"Lootboxes(On-Chain)"}
        content={
          "Create & control looboxes with mechanics that use weighted probabilities to determine randomized items or rewards. Set item or progress prerequisites to earn or open."
        }
        footer={"Learn About Lootboxes"}
      />

      <Card
        imgPath={img9}
        heading={"Full Interoperability Between Games"}
        content={
          "Leverage infrastructure that works seamlessly across partner ecosystems and other MetaFab games. Limitless opportunities for cross-pollination and collaboration."
        }
        footer={"Learn About Interoperability"}
      />
      <Card
        imgPath={img10}
        heading={"Contract Ownership (No Lock-In)"}
        content={
          "Transfer ownership of contracts deployed with MetaFab to an external wallet. Full autonomy to revoke our role as your infrastructure partner; whenever you want."
        }
        footer={"Learn About No Lock-In"}
      />
      <Card
        imgPath={img11}
        heading={"Free Without The Premium"}
        content={
          "Ditch the limits, paywalls, restrictions, & upfront or hidden fees. We want our tech to be open, accessible, & free without a creativity and adoption limiting monetization model."
        }
        footer={"Learn About Business Model"}
      />
      <Card
        imgPath={img12}
        heading={"Community Driven & Developed"}
        content={
          "Believe in a team that listens, moves fast, & loves what they do. We listen to our community, co-create practical solutions, and are passionate about building a better way to web3."
        }
        footer={"Learn About Our Philosophy"}
      />
    </div>
  );
};

export default Cards;
