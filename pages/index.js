import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pawan list | Home</title>
        <meta name="keywords" content="pawan list" />
      </Head>

      <div className={styles.title}>
        <h1>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          porro voluptas molestiae impedit placeat voluptatum quis possimus
          quasi sit asperiores!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          porro voluptas molestiae impedit placeat voluptatum quis possimus
          quasi sit asperiores!
        </p>
        <Link href="/people" className={styles.btn}>
          See People Listing
        </Link>
      </div>
    </>
  );
}
