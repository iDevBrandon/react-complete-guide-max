import React from "react";
import classes from "./BuildControls.module.css";
import BurgerControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = () => {
  return (
    <div className={classes.BuildControls}>
      {controls.map((ctrl) => (
        <BurgerControl key={ctrl.label} label={ctrl.label} />
      ))}
    </div>
  );
};

export default BuildControls;
