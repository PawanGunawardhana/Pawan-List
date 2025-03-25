import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia porro
        voluptas molestiae impedit placeat voluptatum quis possimus quasi sit
        asperiores!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia porro
        voluptas molestiae impedit placeat voluptatum quis possimus quasi sit
        asperiores!
      </p>
      <Link href="/people">See People Listing</Link>
    </div>
  );
}
