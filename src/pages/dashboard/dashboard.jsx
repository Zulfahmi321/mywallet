import UserLayout from "components/UserLayout"
import Image from "next/image"
import { ArrowDown, ArrowUp, PlusLg } from "react-bootstrap-icons"
import styles from '../../styles/Dashboard.module.css'
import ProfDef from '../../assets/img/profil-default.png'
import { useEffect, useState } from "react"
import axios from "axios"
import { Button, Modal } from "react-bootstrap"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { getUserDataAction } from "redux/actionCreators/userData"
import { currencyFormatter } from "helper/formatter"


function Dashboard() {
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
        <UserLayout title="Dashboard">
            <main className={styles.mainContainer}>
                <section className={styles.balanceContainer}>
                    <div className={styles.balanceLeft}>
                        <div className={styles.title}>Balance</div>
                        <div className={styles.balance}>{currencyFormatter.format(userData.balance)}</div>
                        {/* <div className={styles.navbarProfNumber}>{userData.noTelp}</div> */}
                        <div className={styles.phone}>+62 813-9387-7946</div>
                    </div>
                    <div className={styles.balanceRight}>
                        <div className={styles.transfer}><ArrowUp className={styles.icon} /> Transfer</div>
                        <button className={styles.transfer}
                            onClick={handleShow}
                        ><PlusLg className={styles.icon} /> Top Up</button>
                    </div>
                </section>
                <section className={styles.bottomContainer}>
                    <section className={styles.chartContainer}>
                        <div className={styles.chartTop}>
                            <div className={styles.income}>
                                <ArrowDown className={styles.icon} />
                                <div className={styles.title}>Income</div>
                                <div className={styles.total}>Rp2.120.000</div>
                            </div>
                            <div className={styles.expense}>
                                <ArrowUp className={styles.icon} />
                                <div className={styles.title}>Expense</div>
                                <div className={styles.total}>Rp1.560.000</div></div>
                        </div>
                        <div className={styles.chartBottom}>
                            <div className={styles.dayContainer}>
                                <div className={styles.bar} style={{ height: "80%" }}></div>
                                <div className={styles.day}>Sat</div>
                            </div>
                            <div className={styles.dayContainer}>
                                <div className={styles.bar} style={{ height: "80%" }}></div>
                                <div className={styles.day}>Sun</div>
                            </div>
                            <div className={styles.dayContainer}>
                                <div className={styles.bar} style={{ height: "80%" }}></div>
                                <div className={styles.day}>Mon</div>
                            </div>
                            <div className={styles.dayContainer}>
                                <div className={styles.bar} style={{ height: "80%" }}></div>
                                <div className={styles.day}>Tue</div>
                            </div>
                            <div className={styles.dayContainer}>
                                <div className={styles.bar} style={{ height: "80%" }}></div>
                                <div className={styles.day}>Wed</div>
                            </div>
                            <div className={styles.dayContainer}>
                                <div className={styles.bar} style={{ height: "80%" }}></div>
                                <div className={styles.day}>Thu</div>
                            </div>
                            <div className={styles.dayContainer}>
                                <div className={styles.bar} style={{ height: "80%" }}></div>
                                <div className={styles.day}>Fri</div>
                            </div>
                        </div>
                    </section>
                    <section className={styles.historyContainer}>
                        <div className={styles.titleContainer}>
                            <div className={styles.title}>Transaction History</div>
                            <div className={styles.seeAll}>See all</div>
                        </div>
                        <div className={styles.transactionContainer}>
                            <div className={styles.item}>
                                <div className={styles.pictNameContainer}>
                                    <div className={styles.profPictContainer}><Image src={ProfDef} className={styles.profPict} alt='Profil-img' /></div>
                                    <div className={styles.nameContainer}>
                                        <div className={styles.name}>Samuel Suhi</div>
                                        <div className={styles.status}>Accept</div>
                                    </div>
                                </div>
                                <div className={`${styles.nominal} ${styles.out}`}>-Rp50.000</div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.pictNameContainer}>
                                    <div className={styles.profPictContainer}><Image src={ProfDef} className={styles.profPict} alt='Profil-img' /></div>
                                    <div className={styles.nameContainer}>
                                        <div className={styles.name}>Samuel Suhi</div>
                                        <div className={styles.status}>Accept</div>
                                    </div>
                                </div>
                                <div className={`${styles.nominal} ${styles.in}`}>+Rp50.000</div>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
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
        </UserLayout>
    )
}

export default Dashboard