import Layout from "components/Layout"
import Aside from "components/aside/Aside"
import styles from "../../styles/Auth.module.css"
import Link from "next/link"
import { loginAction } from "../../redux/actionCreators/auth";
import { Envelope, Lock, Eye, EyeSlash } from "react-bootstrap-icons"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter, withRouter } from "next/router"
import { Modal } from "react-bootstrap"
function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isShow, setIsShow] = useState(false)

    const router = useRouter()
    const dispatch = useDispatch()

    const { isError, message, data } = useSelector(state => state.auth)
    useEffect(() => {
        if (isError === false) {
            (data.pin ? router.push('/dashboard') : router.push('/pin'))
        }
    })

    const handlerLogin = () => {
        const body = { email, password };
        dispatch(loginAction(body))
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // handlerChange = (e) => {
    //     this.useState({ [e.target.name]: e.target.value })
    // }

    const showPassHandler = () => {
        setShowPassword(!showPassword)
    }

    return (
        <Layout title="Login">
            <main className={styles.globalContainer}>
                <Aside />
                <section className={styles.mainContainer}>
                    <div className={styles.mainContentTitle}>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</div>
                    <div className={styles.mainContentInfo}>Transfering money is eassier than ever, you can access FazzPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="email">
                            <Envelope className={styles.icon} />
                            <input type="email" id="email" placeholder="Enter your e-mail"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="password">
                            <Lock className={styles.icon} />
                            <input type={showPassword ? "text" : "password"} id="password" placeholder="Enter your Password"
                                onChange={e => setPassword(e.target.value)}
                            />
                            {showPassword ? <Eye className={`${styles.icon} ${styles.eye}`} onClick={showPassHandler} /> : <EyeSlash className={`${styles.icon} ${styles.eye}`} onClick={showPassHandler} />}
                        </label>
                    </div>
                    <Link href={'/reset'}>
                        <div className={styles.forgot}>Forgot password?</div>
                    </Link>
                    {isError === null ? <></> : isError ? <div className={styles.errorMsg}>{message}</div> : <div className={styles.successMsg}>{message}</div>}
                    <div className={styles.button} onClick={handlerLogin}>Login</div>
                    <div className={styles.login}>Don&apos;t have an account? Let&apos;s <Link href={'/register'}><a>Sign Up</a></Link></div>
                </section>
                <Modal
                    show={isShow}
                    onHide={() => setIsShow(false)}>
                    <Modal.Header>
                        {message}
                    </Modal.Header>
                </Modal>
            </main>
        </Layout>
    )
}

export default withRouter(Login)