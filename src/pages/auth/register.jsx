import Layout from "components/Layout"
import Aside from "components/aside/Aside"
import styles from "../../styles/Auth.module.css"
import Link from "next/link"
import { Envelope, Person, Lock, Eye, EyeSlash } from "react-bootstrap-icons"
import { useState } from "react"
import axios from "axios"
function Register() {
    const [showPassword, setShowPassword] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isError, setIsError] = useState(false)
    const [msg, setMsg] = useState("")

    const showPassHandler = () => {
        setShowPassword(!showPassword)
    }

    const registerHandler = async () => {
        try {
            setIsError(false)
            setMsg("")
            let body = { firstName, lastName, email, password }
            let res = await axios.post(`${process.env.NEXT_PUBLIC_BE_HOST}/auth/register`, body)
            console.log(res);
            setMsg(res.data.msg)
        }
        catch (error) {
            setIsError(true)
            console.log(error);
            setMsg(error.response.data.msg)
        }
    }
    return (
        <Layout title="Register">
            <main className={styles.globalContainer}>
                <Aside />
                <section className={styles.mainContainer}>
                    <div className={styles.mainContentTitle}>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</div>
                    <div className={styles.mainContentInfo}>Transfering money is eassier than ever, you can access FazzPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="first-name">
                            <Person className={styles.icon} />
                            <input type="text" id="first-name" placeholder="Enter your firstname" required
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="last-name">
                            <Person className={styles.icon} />
                            <input type="text" id="last-name" placeholder="Enter your lastname" required
                                onChange={e => setLastName(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="email">
                            <Envelope className={styles.icon} />
                            <input type="email" id="email" placeholder="Enter your e-mail" required
                                onChange={e => setEmail(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="password">
                            <Lock className={styles.icon} />
                            <input type={showPassword ? "text" : "password"} id="password" placeholder="Enter your Password" required
                                onChange={e => setPassword(e.target.value)}
                            />
                            {showPassword ? <Eye className={`${styles.icon} ${styles.eye}`} onClick={showPassHandler} /> : <EyeSlash className={`${styles.icon} ${styles.eye}`} onClick={showPassHandler} />}
                        </label>
                    </div>
                    {isError ? <div className={styles.errorMsg}>{msg}</div> : <div className={styles.successMsg}>{msg}</div>}
                    <div className={styles.button}
                        onClick={registerHandler}
                    >Sign Up</div>
                    <div className={styles.login}>Already have an account <Link href={'/login'}><a>Login</a></Link></div>
                </section>
            </main>
        </Layout>
    )
}

export default Register