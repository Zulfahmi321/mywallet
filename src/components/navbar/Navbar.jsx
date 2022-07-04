import Image from 'next/image'
import styles from '../../styles/UserLayout.module.css'
import ProfDef from '../../assets/img/profil-default.png'
import { Bell } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDataAction } from 'redux/actionCreators/userData'
import { useEffect } from 'react'

function Navbar() {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.auth)
    const { userData } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getUserDataAction(data.id, data.token))
    }, [data.id, data.token, dispatch])

    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.navbarLogo}>FazzPay</div>
            <div className={styles.wrapperNavbarProf}>
                <div className={styles.navbarProfPict}>
                    <Image src={user.image === null ? ProfDef : `${process.env.NEXT_PUBLIC_IMG}${user.image}`} alt='Profil-Image' width={40} height={40}></Image>
                </div>
                <div className={styles.wrapperNavbarInfo}>
                    <div className={styles.navbarProfName}>{userData.firstName} {userData.lastName}</div>
                    {/* <div className={styles.navbarProfNumber}>{userData.noTelp}</div> */}
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