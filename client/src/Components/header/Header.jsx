import React from "react";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.Wrap}>
      <div className={styles.Inner}>
        <div className={styles.Logo}>Chamoe</div>
        <div>로그인</div>
      </div>
    </div>
  );
}

export default Header;