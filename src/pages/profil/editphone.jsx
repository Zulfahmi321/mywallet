import axios from "axios"
import UserLayout from "components/UserLayout"
import { useRouter } from "next/router"
import { useState } from "react"
import { Telephone } from "react-bootstrap-icons"
import { useSelector } from "react-redux"
import styles from '../../styles/Profil.module.css'
function Editphone() {
    const [noTelp, setNoTelp] = useState("")
    // const [msg, setMsg] = useState("")

    // const router = useRouter()
    const { data } = useSelector(state => state.auth)

    const handlerEditPhone = async () => {
        try {
            const { id, token } = data
            const body = { noTelp }
            const config = { headers: { Authorization: `Bearer ${token}` } }
            const response = await axios.patch(`${process.env.NEXT_PUBLIC_BE_HOST}/user/profile/${id}`, body, config)
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <UserLayout title='Edit Phone'>
            <main className={styles.container}>
                <section className={styles.mainContainerChangePin}>
                    <div className={styles.mainContentTitle}>Edit Phone Number</div>
                    <div className={styles.mainContentInfo}>Add at least one phone number for the transfer ID so you can start transfering your money to another user.</div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="phone">
                            <Telephone className={styles.icon} />
                            +62
                            <input type="number" placeholder="Enter your phone number"
                                onChange={e => setNoTelp(e.target.value)}
                            />
                        </label>
                        <button className={styles.button} onClick={handlerEditPhone}>Edit Phone Number</button>
                    </div>
                </section>
            </main>
        </UserLayout>
    )
}

export default Editphone