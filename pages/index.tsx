import styles from "../styles/Home.module.scss";
import Head from "next/head";

import SidLeft from "../components/SidLeft/SidLeft";
import Introduction from "../components/Introduction/Introduction";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mohsen_Bg</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>
        <Introduction />
      </div>
    </div>
  );
}
