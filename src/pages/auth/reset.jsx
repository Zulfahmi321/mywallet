import Layout from "components/Layout"
import Aside from "components/aside/Aside"
import styles from "../../styles/Auth.module.css"
import { Envelope, Lock } from "react-bootstrap-icons"
import Link from "next/link"
function Reset() {
    return (
        <Layout title="Reset Password">
            <main className={styles.globalContainer}>
                <Aside />
                <section className={styles.mainContainer}>
                    <div className={styles.mainContentTitle}>Did You Forgot Your Password? Don&apos;t Worry, You Can Reset Your Password In a Minutes.</div>
                    <div className={styles.mainContentInfo}>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="email">
                            <Envelope className={styles.icon} />
                            <input type="email" id="email" placeholder="Enter your e-mail" required
                                onChange={e => setEmail(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className={styles.button}>Confirm</div>
                </section>
            </main>
        </Layout>
    )
}

export default Reset