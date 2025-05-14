//import Image from "next/image";
import styles from "./page.module.css"
import Login from "./components/login/login";
import Widthdrawal from "./components/widthdrawal/widthdrawal";
import Welcome from "./components/welcome/welcome";
import About from "./components/about/about";
import WhatisGold365 from "./components/whatisGold365/whatisGold365";
import Whychooseus from "./components/whychooseus/whychooseus";
import Promotionbonuses from "./components/promotion-bonuses/promotion-bonuses";
import Gold365Other from "./components/Gold365-vs-Other/Gold365-vs-Other";
import FreeDemo from "./components/Free-Demo/Free-Demo";
import HowtoRegister from "./components/How-to-Register/How-to-Register";
import Fantasygames from "./components/fantasygames/fantasygames";
import Ninesteps from "./components/9steps/ninesteps";
import DepositWithdrawal from "./components/deposit-and-withdrawal/deposit-and-withdrawal";
import HowtoResetPassword from "./components/How-to-Reset-Password/How-to-Reset-Password";
import RecoverCutomerID from "./components/Recover-CutomerID/Recover-CutomerID";
import MajorSecurityFeatures from "./components/7-major-security-features/7-major-security-features";
import CustomerSupport from "./components/Customer-Support/Customer-Support";
import Testimonials from "./components/testimonials/testimonails";
import Faq from "./components/faq/faq";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div>
    <title>Gold365 Win</title>
    <meta name="title" content="Gold365 Win" />
    <meta name="description" content="Gaming platforms like CricAdda are the most popular in India for betting, live casino, and fantasy games. There are over 5000+ sports games available every day on CricAdda.com. Log in to your CricAdda account now." />
   
    <div className={styles.pages}>
      <main className={styles.mains}>

        {/*<Login />
        <Widthdrawal />*/}
        
        <div className="main-wrapper e-con">
        <Welcome />
        <About />
        <WhatisGold365 />
        <Whychooseus />
        <Promotionbonuses />
        <Gold365Other />
        <FreeDemo />
        <HowtoRegister />
        <Fantasygames />
        <Ninesteps />
        <DepositWithdrawal />
        <HowtoResetPassword />
        <RecoverCutomerID />
        <MajorSecurityFeatures />
        <CustomerSupport />
        <Testimonials />
        <Faq />
        <Footer />
        </div>
        
      </main>
      
    </div>
    </div>
  );
}
