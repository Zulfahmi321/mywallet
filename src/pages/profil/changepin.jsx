import axios from "axios"
import UserLayout from "components/UserLayout"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styles from '../../styles/Profil.module.css'
function Changepin() {
    const [otp, setOtp] = useState(new Array(6).fill(""))
    const [page, setPage] = useState("enter")
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

    const checkPinHandler = async () => {
        try {

            const { token } = data
            const config = { headers: { Authorization: `Bearer ${token}` } }
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BE_HOST}/user/pin?pin=${otp.join('')}`, config)
            setMsg(response.data.msg)
            setPage('change')

            transfer()
        } catch (error) {
            // setMsg(error)
            console.log(error)

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
        } catch (error) {
            console.log(error)

        }
    }
    return (
        <UserLayout title='Change PIN'>
            <main className={styles.container}>
                {page === "enter" ?
                    <section className={styles.mainContainer}>
                        <div className={styles.mainContentTitle}>Change PIN</div>
                        <div className={styles.mainContentInfo}>Enter your current 6 digits Zwallet PIN below to continue to the next steps.</div>
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
                            <button onClick={checkPinHandler}>CONTINUE</button>
                        </div>
                    </section>
                    :
                    <section className={styles.mainContainer}>
                        <div className={styles.mainContentTitle}>Change PIN</div>
                        <div className={styles.mainContentInfo}>Type your new 6 digits security PIN to use in Zwallet.</div>
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
                            <button onClick={createPinHandler}>CHANGE PIN</button>
                        </div>
                    </section>
                }
            </main>
        </UserLayout>
    )
}

export default Changepin