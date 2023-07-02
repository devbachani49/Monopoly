import React from "react";
import Card from "../UI/Card";
import "./DarkBlue.css";

const DarkBlue = (props) => {
  return (
    <Card className="top">
      <div className="Colour-Name">
        <div className="DarkBlue"></div>
        <div className="CardName">{props.CardName}</div>
      </div>
      <div className="Price">{props.Price}</div>
    </Card>
  );
};

export default DarkBlue;
