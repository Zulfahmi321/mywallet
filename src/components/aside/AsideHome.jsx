// import FullLayout from 'assets/img/full-layout.png'
import Image from 'next/image'
import { ArrowBarUp, ArrowUp, BoxArrowInRight, Grid, Person, Plus } from 'react-bootstrap-icons'
import styles from '../../styles/Home.module.css'


function AsideHome() {
    return (
        <aside className={styles.asideContainer}>
            <div className={styles.card}>
                <div className={styles.cardButton}>
                    <Grid className={styles.icon} />
                    <div className={styles.button}>Dashboard</div>
                </div>
                <div className={styles.cardButton}>
                    <ArrowUp className={styles.icon} />
                    <div className={styles.button}>Transfer</div>
                </div>
                <div className={styles.cardButton}>
                    <Plus className={styles.icon} />
                    <div className={styles.button}>Top Up</div>
                </div>
                <div className={styles.cardButton}>
                    <Person className={styles.icon} />
                    <div className={styles.button}>Profile</div>
                </div>
                <div className={styles.cardButton}>
                    <BoxArrowInRight className={styles.icon} />
                    <div className={styles.button}>Logout</div>
                </div>
            </div>
        </aside>
    )
}

export default AsideHome