import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/insert");
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Amazon clone</title>
        <meta name="description" content="Clone of Amazon" />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg"
        />
      </Head>

      <header>
        <Navbar />
      </header>

      <main className={styles.main}>
        <div>aa  a</div>
        {JSON.stringify(data)}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;

