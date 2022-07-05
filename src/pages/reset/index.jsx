// import styles from '../../styles/Forgot.module.css'
// import Image from 'next/image'
// import mail from '../../../assets/img/mail.png'
// import { forgotPassword } from '../../../api/api'
// import { useSelector } from 'react-redux'
// import AuthLayout from '../../../components/auth/AuthLayout'
// import { useState } from 'react'
// import Modal from '../../../components/Modal'
// const ForgotPassword = (props) => {
//     const [btn, setBtn] = useState(false)
//     const [email, setEmail] = useState('')
//     const id = useSelector(state => state.login.userInfo.id)
//     const token = useSelector(state => state.login.userInfo.token)
//     const [msg, setMsg] = useState('')
//     const [show, setShow] = useState('')
//     const sendEmail = async () => {
//         try {
//             const body = {
//                 email,
//                 linkDirect: `http://localhost:3000/auth/reset-password`
//             }
//             const result = await forgotPassword(id, body, token)
//             setMsg(result.data.msg)
//             setShow(true)
//         } catch (error) {
//             console.log(error);
//             setMsg(error.response.data.msg)
//             setShow(true)
//         }
//     }
//     return (
//         <AuthLayout title={'Reset Password'}>
//             <div className={styles.forgotContainer}>
//                 <Modal show={show} response={msg} onClose={() => {
//                     setShow(false)
//                 }} />
//                 <span>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</span>
//                 <p>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</p>
//                 <div className={styles.inputmail}>
//                     <Image src={mail} alt="emailIcon" />
//                     <input type="text" placeholder='Enter your email ...' onChange={(e) => {
//                         setBtn(true)
//                         setEmail(e.target.value)
//                     }} />
//                 </div>
//                 <div className={btn ? styles.confirmButtonAct : styles.confirmButton} onClick={sendEmail} >Confirm</div>
//             </div>
//         </AuthLayout>
//     )
// }

// export default ForgotPassword
