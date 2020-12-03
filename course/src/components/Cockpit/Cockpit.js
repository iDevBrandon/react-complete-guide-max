import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request...
    // setTimeout(() => {
    //   alert("saved data in cloud");
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
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

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className="classes.Cockpit">
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}> this is really working</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Switch name
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
