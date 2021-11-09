import React from "react";
import { NavItem } from "../SidLeft/SidItem";
import styles from "./Introduction.module.scss";
import Link from "next/link";
const Introduction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        An escape sequence contains a backslash (\) symbol followed by one of
        the escape sequence characters or an octal or hexadecimal number. A
        hexadecimal escape sequence contains an x followed by one or more
        hexadecimal digits (0-9, A-F, a-f). An octal escape sequence uses up to
        three octal digits (0-7). The value of the hexadecimal or octal number
        specifies the value of the desired character or wide character.
      </div>
      <div className={`${styles.firstRow} ${styles.row}`}>
        <div>Escape sequence</div>
        <div>Character represented</div>
      </div>
      <div>
        {NavItem.map((item) => {
          if (item.flag !== "") {
            return (
              <Link href={item.Link} key={item.Id}>
                <div key={item.Id} className={`${styles.row} ${styles.option}`}>
                  <div>{item.flag}</div>
                  <div>{item.Name}</div>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Introduction;
