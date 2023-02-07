import React from "react";

import styles from "./Container.module.css";

function Container({children}) {
  return (
    <div className={styles.Wrap}>{children}</div>
  )
}

export default Container;