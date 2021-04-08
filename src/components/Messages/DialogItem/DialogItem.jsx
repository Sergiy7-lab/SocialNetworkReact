import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Messages.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={"/messages/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
