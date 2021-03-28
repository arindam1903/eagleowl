import React from "react";
import './_cards.scss';

export default function Cards(props) {
  return (
    <div id="card-main">
      <div id="card-title">{props.title}</div>
      <div id="card-description">
        hello
        <div id="card-items">{props.item}</div>
      </div>
    </div>
  );
}
