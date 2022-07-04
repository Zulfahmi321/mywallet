// import UserLayout from 'components/UserLayout'
// import styles from '../../styles/profil.module.css'
// import ProfDef from '../../assets/img/profil-default.png'
// import Image from 'next/image'
// function Profil() {
//     const[]
//     return (
//         <UserLayout>
//             <main className={styles.mainContainer}>
//                 <section className={styles.transferCard}>
//                     <div className={styles.title}>Transfer Money</div>
//                     <div className={styles.userCard}>
//                         <div className={styles.profPictContainer}><Image src={ProfDef} className={styles.profPict} alt='Profil-img' /></div>
//                         <div className={styles.nameContainer}>
//                             <div className={styles.name}>{`${user.firstName} ${user.lastName}`}</div>
//                             <div className={styles.number}>{user.noTelp}</div>
//                         </div>
//                     </div>
//                     <div className={styles.transferInfo}>Type the amount you want to transfer and then press continue to the next steps.</div>
//                     <label htmlFor='transfer' className={styles.transferInputContainer}>
//                         <input type="number" name="transfer" id="transfer" placeholder='0'
//                             onChange={e => {
//                                 setAmount(e.target.value)
//                             }}
//                         />
//                     </label>
//                     <div className={styles.balanceInfo}>{`${currencyFormatter.format(userData.balance)} Available`}</div>
//                     <div className={styles.noteContainer}>
//                         <label htmlFor='notes' className={isNotesFilled ? styles.noteActive : styles.note}>
//                             <Pencil className={isNotesFilled ? styles.iconActive : styles.icon} />
//                             <input type="text" id='notes' placeholder='Add some notes'
//                                 onChange={e => setNotes(e.target.value)}
//                             />
//                         </label>
//                     </div>
//                     <div className={styles.buttonContainer}>
//                         {isAmountFilled && isNotesFilled ?
//                             <div className={styles.continueButton}
//                                 onClick={() => setPage('detail')}
//                             >Continue</div>
//                             :
//                             <div className={styles.continueButtonInactive}>Continue</div>
//                         }
//                     </div>
//                 </section>
//             </main>
//         </UserLayout>
//     )
// }

// export default Profil