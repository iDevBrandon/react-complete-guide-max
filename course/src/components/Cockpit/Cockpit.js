import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request...
    const timer = setTimeout(() => {
      alert("saved data in cloud");
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("[Cockpit.js] clearnup work in useEffect");
    };
  }, []); //props.persons

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] 2nd clearnup work in useEffect");
    };
  });

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className="classes.Cockpit">
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}> this is really working</p>
      <button className={btnClass} onClick={props.clicked}>
        Switch name
      </button>
    </div>
  );
};

export default Cockpit;
