import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./../../containers/BurgerBuilder/BurgerBuilder.module.css";

const Layout = (props) => {
  return (
    <Aux>
      <div>Toolbar, Side, backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
