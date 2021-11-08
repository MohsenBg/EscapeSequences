import React, { useEffect, useState } from "react";
import styles from "./Panel.module.scss";
import { RiMenu4Line } from "react-icons/ri";
import { NavItem } from "../SidLeft/SidItem";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { initialState } from "../../redux/store";
import { NavActionType } from "../../redux/Nav/ActionType";

const Panel = ({ menu }: any) => {
  const [title, setTitle] = useState("Introduction");
  const router = useRouter();
  const { doc } = router.query;
  useEffect(() => {
    if (doc !== undefined) {
      const selected = NavItem.filter((item) => item.Link === doc);
      setTitle(selected[0].Name);
    } else {
      setTitle("Introduction");
    }
  }, [doc]);
  const dispatch = useDispatch();
  const menuOpen = useSelector(
    (state: typeof initialState) => state.Nav.menuOpen
  );

  const handelClickMenu = () => {
    if (menuOpen) {
      dispatch({ type: NavActionType.CLOSE_MENU });
    } else {
      dispatch({ type: NavActionType.OPEN_MENU });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu} onClick={menu}>
        <RiMenu4Line />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.right}>C++</div>
    </div>
  );
};

export default Panel;
