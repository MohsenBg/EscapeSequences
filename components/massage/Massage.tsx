import React from "react";
import styles from "./Massage.module.scss";
const Massage = ({ close }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h1 className={styles.title}>Mohsen_BG</h1>
        <div className={styles.text}>Sorry for not supporting Persian</div>
        <div className={styles.button}>
          <span onClick={close}>Ok</span>
        </div>
      </div>
    </div>
  );
};

export default Massage;
