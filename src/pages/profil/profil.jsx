import UserLayout from 'components/UserLayout'
import styles from '../../styles/Profil.module.css'
import ProfDef from '../../assets/img/profil-default.png'
import Image from 'next/image'
import { ArrowRight } from 'react-bootstrap-icons'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useState } from 'react'

function Profil() {
    const [previewImg, setPreviewImg] = useState(null)
    const [image, setImage] = useState("")

    const { data } = useSelector(state => state.auth)
    const { userData } = useSelector(state => state.user)


    const handlerChangeImage = async () => {
        try {
            const { id, token } = data
            const body = { image }
            const config = { headers: { Authorization: `Bearer ${token}`, "content-type": "multipart/form-data" } }
            const response = await axios.patch(`${process.env.NEXT_PUBLIC_BE_HOST}/user/image/${id}`, body, config)
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <UserLayout title='Profil'>
            <div className={styles.main}>
                <div className={styles.img}>
                    <Image
                        alt="Profil-img"
                        src={previewImg !== null ? previewImg : userData.image === null ? ProfDef : `${process.env.NEXT_PUBLIC_IMG}${userData.image}`} width={80} height={80}
                    />
                    <input
                        type="file"
                        name="image"
                        onChange={(e) => {
                            const file = e.target.files[0]
                            if (file) {
                                const reader = new FileReader()
                                reader.onload = () => {
                                    setPreviewImg(reader.result)
                                    setImage(file)
                                }
                                reader.readAsDataURL(file)
                            }
                        }}
                    />
                </div>
                <div className={styles.saveImage} onClick={handlerChangeImage}>
                    Save
                </div>
                <div className={styles.nameType}>
                    <div className={styles.name}>{userData.firstName} {userData.lastName}</div>
                    <div className={styles.type}>{userData.noTelp}</div>
                </div>
                <div className={styles.wrapperNavigation}>
                    <Link href="/profil/info">
                        <div className={styles.linkContainer}>
                            <div>Personal Information</div>
                            <ArrowRight className={styles.icon} />
                        </div>
                    </Link>
                    <Link href="/profil/changepassword">
                        <div className={styles.linkContainer}>
                            <div>Change Password</div>
                            <ArrowRight className={styles.icon} />
                        </div>
                    </Link>
                    <Link href="/profil/changepin">
                        <div className={styles.linkContainer}>
                            <div>Change Pin</div>
                            <ArrowRight className={styles.icon} />
                        </div>
                    </Link>
                </div>
            </div>
        </UserLayout>
    )
}

export default Profil