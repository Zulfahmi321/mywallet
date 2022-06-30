import Image from 'next/image'
import TelpIcon from 'assets/icons/telp-icon.png'
import Lock from 'assets/icons/lock-icon.png'
import Download from 'assets/icons/download-icon.png'
import Windows from 'assets/img/windows-logo.png'
import DropBox from 'assets/img/dropbox-logo.png'
import Hm from 'assets/img/hm-logo.png'
import Air from 'assets/img/air-logo.png'
import Canon from 'assets/img/canon-logo.png'
import Dell from 'assets/img/dell-logo.png'
import styles from '../styles/Home.module.css'
import Layout from 'assets/img/layout.png'
import ArrowLeft from 'assets/icons/arrow-left.png'
import ArrowRight from 'assets/icons/arrow-right.png'
import ProfImg from 'assets/img/profil.png'


export default function Home() {
  return (
    <div>
      <header className={styles.headerBg}>
        <section className={styles.navBanner}>
          <div className={styles.fazzPay}>Fazzpay</div>
          <div className={styles.wrapperButton}>
            <div className={styles.btnLogin}>Login</div>
            <div className={styles.btnSignUp}>Sign Up</div>
          </div>
        </section>
        <section className={styles.mainBanner}>
          <div className={styles.mainBannerTitle}>Awesome App For Saving Time.</div>
          <div className={styles.mainBannerBody}>We bring you a mobile app for banking problems that oftenly wasting much of your times.</div>
          <div className={styles.mainBannerFooter}>Try It Free</div>
        </section>
      </header>
      <main className={styles.containerContent}>
        <section className={styles.wrapperFeature}>
          <section className={styles.featureContent}>
            <div className={styles.featureContentTitle} ><div className={styles.why}>Why</div> Choose FazzPay?</div>
            <div className={styles.featureContentBody} >We have some great features from the application and it’s totally free to use by all users around the world.</div>
          </section>
          <section className={styles.featureContentFooter}>
            <div className={styles.wrapperFeatureContentFooter}>
              <div className={styles.featureContentFooterTitle}>
                <Image src={TelpIcon} alt='TelpIcon' />
              </div>
              <div className={styles.featureContentFooterBody}>24/7 Support</div>
              <div className={styles.featureContentFooterFooter}>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</div>
            </div>
            <div className={styles.wrapperFeatureContentFooterLock}>
              <div className={styles.featureContentFooterTitle}>
                <Image src={Lock} alt='LockIcon' />
              </div>
              <div className={styles.featureContentFooterBody}>Data Privacy</div>
              <div className={styles.featureContentFooterFooter}>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</div>
            </div>
            <div className={styles.wrapperFeatureContentFooter}>
              <div className={styles.featureContentFooterTitle}>
                <Image src={Download} alt='DownloadIcon' />
              </div>
              <div className={styles.featureContentFooterBody}>Easy Download</div>
              <div className={styles.featureContentFooterFooter}>Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.</div>
            </div>
          </section>
        </section>
        <section className={styles.wrapperMainLogo}>
          <Image src={Windows} alt='logo'></Image>
          <Image src={DropBox} alt='logo'></Image>
          <Image src={Hm} alt='logo'></Image>
          <Image src={Air} alt='logo'></Image>
          <Image src={Canon} alt='logo'></Image>
          <Image src={Dell} alt='logo'></Image>
        </section>
        <section className={styles.wrapperPrice}>
          <div className={styles.priceTitle}>Rp. 390.736.500</div>
          <div className={styles.priceBody}><div className={styles.why}>Money </div>has Been Transfered.</div>
          <div className={styles.priceFooter}>That amount of money has been transfered from all users. We still counting and going strong!</div>
        </section>
        <section className={styles.wrapperFeatureTwo}>
          <aside className={styles.featureTwoImage}>
            <Image src={Layout} alt='layoutImg'></Image>
          </aside>
          <aside className={styles.featureTwoContent}>
            <div className={styles.featureTwoContentTitle}>All The <div className={styles.why}>Great</div> FazzPay Features.</div>
            <div className={styles.wrapperFeatureContentBody}>
              <div className={styles.featureTwoContentHeader}><div className={styles.why}>1.</div>Small Fee</div>
              <div className={styles.featureTwoContentBody}>We only charge 5% of every success transaction done in FazzPay app.</div>
            </div>
            <div className={styles.wrapperFeatureContentBody}>
              <div className={styles.featureTwoContentHeader}><div className={styles.why}>2.</div>Data Secured</div>
              <div className={styles.featureTwoContentBody}>All your data is secured properly in our system and it’s encrypted.</div>
            </div>
            <div className={styles.wrapperFeatureContentBody}>
              <div className={styles.featureTwoContentHeader}><div className={styles.why}>3.</div>User Friendly</div>
              <div className={styles.featureTwoContentBody}>FazzPay come up with modern and sleek design and not complicated.</div>
            </div>
          </aside>
        </section>
        <section className={styles.wrapperUser}>
          <div className={styles.userHeader}>
            <div className={styles.userTitle}>What Users are <div className={styles.why}>Saying.</div></div>
            <div className={styles.userBody}>We have some great features from the application and it’s totally free to use by all users around the world.</div>
            <div className={styles.wrapperCard}>
              <div className={styles.arrowIcon}>
                <Image src={ArrowLeft} alt='arrowIcon'></Image>
              </div>
              <div className={styles.card}>
                <div className={styles.cardImg}>
                  <Image src={ProfImg} alt='profilImage'></Image>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.username}>Alex Hansinburg</div>
                  <div className={styles.role}>Designer</div>
                </div>
                <div className={styles.cardFooter}>“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”</div>
              </div>
              <div className={styles.arrowIcon}>
                <Image src={ArrowRight} alt='arrowIcon'></Image>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.containerFooter}>
        <aside className={styles.wrapperFooterHeader}>
          <div className={styles.fazzPay}>FazzPay</div>
          <div className={styles.footerBody}>Simplify financial needs and saving much time in banking needs with one single app.</div>
        </aside>
        <div className={styles.wrapperFooterEnd}>
          <div className={styles.year}>2020 FazzPay. All right reserved.</div>
          <div className={styles.contactNumber}>+62 5637 8882 9901</div>
          <div className={styles.contactEmail}>contact@fazzpay.com</div>
        </div>
      </footer>
    </div>
  )
}
