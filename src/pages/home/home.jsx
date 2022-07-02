import Layout from "components/Layout"
import styles from '../../styles/Home.module.css'
import Navbar from "components/navbar/Navbar"
import AsideHome from "components/aside/AsideHome"

function home() {
    return (
        <Layout title="Home">
            <Navbar />
            <div className={styles.container}>
                <AsideHome />
            </div>

        </Layout>
    )
}

export default home