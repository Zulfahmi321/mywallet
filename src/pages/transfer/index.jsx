import axios from "axios"
import UserLayout from "../../components/UserLayout"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Search } from "react-bootstrap-icons"
import { useSelector } from "react-redux"
import ProfDef from '../../assets/img/profil-default.png'
import styles from '../../styles/Transfer.module.css'


function Transfer() {
    const [user, setUser] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(4)
    const [search, setSearch] = useState("")
    // const [sort, setSort] = useState("")

    const { data } = useSelector(state => state.auth)
    const router = useRouter()

    useEffect(() => {
        const getUser = async () => {
            try {
                const { token } = data
                const config = { headers: { Authorization: `Bearer ${token}` } }
                const url = `${process.env.NEXT_PUBLIC_BE_HOST}/user?page=${page}&limit=${limit}`
                if (search !== "") {
                    url += `&search=${search}`
                }
                const response = await axios.get(url, config)
                setUser(response.data.data)
                console.log(user)
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    }, [search])

    return (
        <UserLayout title="Transfer">
            <main className={styles.mainContainer}>
                <section className={styles.transferCard}>
                    <div className={styles.title}>Search Receiver</div>
                    <label className={styles.searchContainer}>
                        <div className={styles.iconContainer}><Search className={styles.icon} /></div>
                        <input type="text" placeholder='Search receiver here'
                            onChange={e => {
                                setTimeout(() => { setSearch(e.target.value) }, 2000)
                            }}
                        />
                    </label>
                    <div className={styles.receiverContainer}>
                        {user.map(user => (
                            <div className={styles.userCard} key={user.id}
                                onClick={() => router.push(`/transfer/${user.id}`)}
                            >
                                <div className={styles.profPictContainer}>
                                    <Image
                                        src={user.image === null ? ProfDef : `${user.image}`}
                                        className={styles.profPict} width={'80px'} height={'80px'} alt='profil-img' /></div>
                                <div className={styles.nameContainer}>
                                    <div className={styles.name}>{`${user.firstName} ${user.lastName}`}</div>
                                    <div className={styles.number}>{user.noTelp}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </UserLayout>
    )
}

export default Transfer