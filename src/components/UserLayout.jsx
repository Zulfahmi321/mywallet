import styles from '../styles/UserLayout.module.css'
import Navbar from "components/navbar/Navbar"
// import AsideDashboard from "components/aside/AsideDashboard"
import Footer from "components/footer/Footer"
import Head from 'next/head'
import { ArrowUp, BoxArrowInRight, Grid, Person, Plus } from 'react-bootstrap-icons'
import Link from 'next/link'
import { Button, Modal } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getUserDataAction } from 'redux/actionCreators/userData'

function UserLayout(props) {
    const [amount, setAmount] = useState(0)
    const [isSuccess, setIsSuccess] = useState(false)
    const [msg, setMsg] = useState("")
    const [showTopUp, setShowTopUp] = useState(false)
    const [link, setLink] = useState("")

    const dispatch = useDispatch()
    const { data } = useSelector(state => state.auth)
    const { userData } = useSelector(state => state.user)

    const handleClose = () => setShowTopUp(false);
    const handleShow = () => setShowTopUp(true);

    useEffect(() => {
        dispatch(getUserDataAction(data.id, data.token))
    }, [data.id, data.token, dispatch])

    const handlerSubmitTopUp = async () => {
        try {
            const { token } = data
            const body = { amount }
            const config = { headers: { Authorization: `Bearer ${token}` } }
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BE_HOST}/transaction/top-up`, body, config)
            console.log(response);
            setIsSuccess(true)
            setMsg(response.data.msg)
            setLink(response.data.data.redirectUrl)
        }
        catch (error) {
            console.log(error);
            setIsSuccess(false)
        }
    }
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <div className={styles.container}>
                <Navbar />
                <div className={styles.mainContainer}>
                    <aside className={styles.asideCard}>
                        <Link href={'/dashboard'} >
                            <div className={styles.cardButton}>
                                <Grid className={styles.icon} />
                                <div className={styles.button}>Dashboard</div>
                            </div>
                        </Link>
                        <Link href={'/transfer'}>
                            <div className={styles.cardButton}>
                                <ArrowUp className={styles.icon} />
                                <div className={styles.button}>Transfer</div>
                            </div>
                        </Link>

                        <div className={styles.cardButton}>
                            <Plus className={styles.icon} />
                            <div className={styles.button} onClick={handleShow}>Top Up</div>
                        </div>

                        <Link href={'/profil'}>
                            <div className={styles.cardButton}>
                                <Person className={styles.icon} />
                                <div className={styles.button}>Profile</div>
                            </div>
                        </Link>
                        <div className={styles.cardButton}>
                            <BoxArrowInRight className={styles.icon} />
                            <div className={styles.button}>Logout</div>
                        </div>
                    </aside>
                    {props.children}
                </div>
                <Footer />
                <Modal show={showTopUp} onHide={handleClose} className={styles.topUpModal}>
                    <Modal.Header closeButton className={styles.modalHeader}>
                        <Modal.Title>Top Up</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={styles.modalBody}>
                        {isSuccess ?
                            <>
                                {msg}
                            </>
                            : <>
                                Enter the amount of money, and click submit
                                <label htmlFor="amount" className={styles.inputTopUpContainer}>
                                    <input type="number" id="amount" className={styles.inputTopUp}
                                        onChange={e => setAmount(e.target.value)} placeholder="Input amount" />
                                </label>
                            </>
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        {isSuccess ?
                            <>
                                <Button variant="secondary" onClick={handleClose} className={styles.modalCancelButton}>
                                    Cancel
                                </Button>
                                <Button variant="primary" className={styles.modalPrimaryButton} onClick={handleClose}>
                                    <Link href={link}>
                                        <a target="_blank">Pay</a>
                                    </Link>
                                </Button>
                            </>
                            :
                            <Button variant="primary" onClick={handlerSubmitTopUp} className={styles.modalPrimaryButton}>
                                Submit
                            </Button>
                        }
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default UserLayout