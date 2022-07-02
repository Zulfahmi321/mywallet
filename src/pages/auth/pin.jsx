import Layout from "components/Layout"
import Aside from "components/aside/Aside"
import styles from "../../styles/Auth.module.css"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { Check2 } from "react-bootstrap-icons";
import axios from "axios";
// import Link from "next/link"
const Pin = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""))
    const [isSuccess, setIsSuccess] = useState(false)
    const [msg, setMsg] = useState("")
    const { data } = useSelector(state => state.auth)

    useEffect(() => {

    }, [])

    const handlerChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    }

    const createPinHandler = async () => {
        try {
            const { token } = data
            console.log(otp.join(""));
            const body = { pin: otp.join("") }
            const config = { headers: { Authorization: `Bearer ${token}` } }
            const response = await axios.patch(`${process.env.NEXT_PUBLIC_BE_HOST}/user/pin/${data.id}`, body, config)
            setMsg(response.data.msg)
            console.log(response)
            setIsSuccess(true)
        } catch (error) {
            console.log(error)

        }
    }
    return (
        <Layout title="Pin">
            <main className={styles.globalContainer}>
                <Aside />
                {isSuccess ?
                    <section className={`${styles.mainContainer} ${styles.pinSuccess}`}>
                        <div className={styles.checkContainer}><Check2 /></div>
                        <div className={styles.mainContentTitle}>
                            Your PIN Was Successfully Created
                        </div>
                        <div className={styles.mainContentInfo}>
                            Your PIN was successfully created and you can now access all the features in FazzPay.
                        </div>
                        <Link href={"/home"}>
                            <div className={styles.button}>Go To Dashboard</div>
                        </Link>
                    </section>
                    :
                    <section className={styles.mainContainer}>
                        <div className={styles.mainContentTitle}>Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</div>
                        <div className={styles.mainContentInfo}>Create 6 digits pin to secure all your money and your data in FazzPay app. Keep it secret and don&apos;t tell anyone about your FazzPay account password and the PIN.</div>
                        <div className={styles.wrapperInputPin}>
                            <div className={styles.inputContainerPin}>
                                {otp.map((data, index) => {
                                    return (
                                        <input type="number"
                                            maxLength="1"
                                            key={index}
                                            value={data}
                                            onChange={e => handlerChange(e.target, index)}
                                            onFocus={e => e.target.select()}
                                        />
                                    )
                                })}
                            </div>
                            {/* {isError === null ? <></> : isError ? <div className={styles.errorMsg}>{msg}</div> : <div className={styles.successMsg}>{msg}</div>} */}
                            <button onClick={createPinHandler}>CONFIRM</button>
                        </div>
                    </section>
                }
            </main>
        </Layout>
    )
}

export default Pin;