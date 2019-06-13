import React from "react";

const WeaponShowdown = props => (
  <>
    <h1>
      {props.userWeapon} | {props.AIChoice}
    </h1>
    <h3>{props.outcome}</h3>
  </>
);

export default WeaponShowdown;
