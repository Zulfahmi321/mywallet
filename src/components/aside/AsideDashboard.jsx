// // import FullLayout from 'assets/img/full-layout.png'
// import Link from 'next/link'
// import { ArrowUp, BoxArrowInRight, Grid, Person, Plus } from 'react-bootstrap-icons'
// import styles from '../../styles/UserLayout.module.css'

// function AsideDashboard() {
//     return (
//         <div className={styles.mainContainer}>
//             <aside className={styles.asideCard}>
//                 <Link href={"/dashboard"}>
//                     <div className={styles.button}>
//                         <Grid className={styles.icon} />
//                         Dashboard
//                     </div>
//                 </Link>
//                 <Link href={"/transfer"}>
//                     <div className={styles.button}>
//                         <ArrowUp className={styles.icon} />
//                         Transfer
//                     </div>
//                 </Link>
//                 <Link href={"/topup"}>
//                     <div className={styles.cardButton}>
//                         <Plus className={styles.icon} />
//                         <div className={styles.button}>Top Up</div>
//                     </div>
//                 </Link>
//                 <Link href={"/profil"}>
//                     <div className={styles.cardButton}>
//                         <Person className={styles.icon} />
//                         <div className={styles.button}>Profile</div>
//                     </div>
//                 </Link>
//                 <div className={styles.cardButton}>
//                     <BoxArrowInRight className={styles.icon} />
//                     <div className={styles.button}>Logout</div>
//                 </div>
//             </aside>
//             {props.children}
//         </div>
//     )
// }

// export default AsideDashboard