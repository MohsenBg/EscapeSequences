import "../styles/globals.scss";
import { useState } from "react";
import type { AppProps } from "next/app";
import styles from "../styles/app.module.scss";
import SidLeft from "../components/SidLeft/SidLeft";
import NavBar from "../components/Nav/NavBar";
import Panel from "../components/Panel/Panel";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Massage from "../components/massage/Massage";
function MyApp({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [MassageOpen, setMassageOpen] = useState(true);
  const menuHandel = () => {
    setMenuOpen(!menuOpen);
  };

  const handelCloseMassage = () => {
    setMassageOpen(false);
  };

  return (
    <>
      <Provider store={store}>
        <div className="main">
          {MassageOpen ? (
            <div className={styles.Massage}>
              <Massage close={handelCloseMassage} />
            </div>
          ) : null}

          <div className={styles.Nav}>
            <NavBar />
          </div>
          <div className={styles.app}>
            <div className={styles.panel}>
              <Panel menu={menuHandel} />
            </div>
            <div className={styles.flex}>
              <div
                className={`${styles.C_SidLeft}  ${
                  !menuOpen ? styles.C_SidLeftMobile : {}
                }`}
              >
                <div className={styles.sid}>
                  <SidLeft />
                </div>
              </div>
              <div className={styles.C_EscapeSequences}>
                <Component {...pageProps} />
              </div>
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
}
export default MyApp;
