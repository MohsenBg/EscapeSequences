import React from "react";
import styes from "./SidLeft.module.scss";
import { NavItem } from "./SidItem";
import Link from "next/link";
import { useRouter } from "next/router";
const SidLeft = () => {
  const router = useRouter();
  const { doc } = router.query;
  return (
    <div className={styes.container}>
      <div className={styes.mainContent}>
        <div className={styes.options}>
          {NavItem.map((item) => {
            return (
              <Link key={item.Id} href={item.Link}>
                <div
                  className={styes.option}
                  style={
                    doc === item.Link
                      ? { backgroundColor: "rgba(0, 255, 234, 0.6)" }
                      : item.Link === "/" && doc === undefined
                      ? { backgroundColor: "rgba(0, 255, 234, 0.6)" }
                      : {}
                  }
                >
                  <div className={styes.Icons}>
                    <item.Icon />
                  </div>
                  <div className={styes.Name}>{item.Name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SidLeft;
