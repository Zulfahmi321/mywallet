import axios from "axios"
import UserLayout from "components/UserLayout"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styles from '../../styles/Profil.module.css'
function Info() {
    const { userData } = useSelector(state => state.user)
    return (
        <UserLayout title='Personal Information'>
            <main className={styles.container}>
                <section className={styles.mainContainerChangePin}>
                    <div className={styles.mainContentTitle}>Personal Information</div>
                    <div className={styles.mainContentInfo}>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</div>
                    <div className={styles.itemContainer}>
                        <div className={styles.infoLabel}>First Name</div>
                        <div className={styles.infoValue}>{userData.firstName}</div>
                    </div>
                    <div className={styles.itemContainer}>
                        <div className={styles.infoLabel}>Last Name</div>
                        <div className={styles.infoValue}>{userData.lastName}</div>
                    </div>
                    <div className={styles.itemContainer}>
                        <div className={styles.infoLabel}>Verified E-mail</div>
                        <div className={styles.infoValue}>{userData.email}</div>
                    </div>
                    <div className={styles.itemContainer}>
                        <div className={styles.infoLabel}>Phone Number</div>
                        <div className={styles.infoValue}>{userData.noTelp}</div>
                        <div className={styles.wrapperManage}>
                            <Link href="/profil/editphone">
                                <a className={styles.managePhone}>Manage</a>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </UserLayout>
    )
}

export default Info