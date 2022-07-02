// import FullLayout from 'assets/img/full-layout.png'
import Image from 'next/image'
import styles from '../../styles/Auth.module.css'


function Aside() {
    return (
        <aside className={styles.asideContainer}>
            <div className={styles.asideLogo}>FazzPay</div>
            <Image src={require('../../assets/img/full-layout.png')} alt="full-layout" />
            <div className={styles.asideTitle}>
                App that Covering Banking Needs.
            </div>
            <div className={styles.asideInfo}>
                Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.
            </div>
        </aside>
    )
}

export default Aside