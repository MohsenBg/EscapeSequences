import React from "react";
import styles from "./NavBar.module.scss";
const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.NavContent}>
        <div className={styles.Name}>
          <a href="https://github.com/MohsenBg">Mohsen_Bg</a>
        </div>
        <div className={styles.title}>
          <h1>Escape sequence</h1>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
