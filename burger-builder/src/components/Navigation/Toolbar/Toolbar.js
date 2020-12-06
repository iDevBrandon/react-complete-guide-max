import React from "react";
import classes from "./Toolbar.module.css";

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div>Menu</div>
      <div>Logo</div>
      <ul>
        <li>..</li>
        <li>..</li>
        <li>..</li>
      </ul>
    </header>
  );
};

export default Toolbar;
