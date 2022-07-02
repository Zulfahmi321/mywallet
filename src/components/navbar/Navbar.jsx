import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import ProfDef from '../../assets/img/profil-default.png'
import { Bell } from 'react-bootstrap-icons'

function Navbar() {
    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.navbarLogo}>FazzPay</div>
            <div className={styles.wrapperNavbarProf}>
                <div className={styles.navbarProfPict}>
                    <Image src={ProfDef} alt='Profil-Image' width={40} height={40}></Image>
                </div>
                <div className={styles.wrapperNavbarInfo}>
                    <div className={styles.navbarProfName}>Robert Chandler</div>
                    <div className={styles.navbarProfNumber}>+62 8139 3877 7946</div>
                </div>
                <div className={styles.wrapperIcon}>
                    <Bell className={styles.icon} />
                </div>
            </div>
        </nav >
    )
}

export default Navbar