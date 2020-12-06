import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div>Menu</div>
      <Logo />
      <ul>
        <li>..</li>
        <li>..</li>
        <li>..</li>
      </ul>
    </header>
  );
};

export default Toolbar;
