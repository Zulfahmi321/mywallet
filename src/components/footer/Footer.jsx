import styles from '../../styles/UserLayout.module.css'
function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>2022 FazzPay. All right reserved.</div>
            <div className={styles.right}>
                <div className={styles.phone}>+62 822 421 617 66</div>
                <div className={styles.email}>contact@fazzpay.com</div>
            </div>
        </footer>
    )
}

export default Footer