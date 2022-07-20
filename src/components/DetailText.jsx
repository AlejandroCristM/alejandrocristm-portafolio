import React from "react";

export default function detailText({ detail, color, textColor }) {
  var textStyle =
    "font-semibold text-platinium px-1.5 py-2.5 mx-2 rounded mt-2";

  switch (color) {
    case "blue":
      textStyle += " bg-blue-prussian";
      break;

    case "orange":
      textStyle += " bg-orange-web";
      break;

    case "green":
      textStyle += " bg-green-slimy";
      break;

    case "platinium":
      textStyle += " bg-platinium";
      break;

    default:
      break;
  }

  switch (textColor) {
    case "blue":
      textStyle += " text-blue-prussian";
      break;

    case "orange":
      textStyle += " text-orange-web";
      break;

    case "green":
      textStyle += " text-green-slimy";
      break;

    case "platinium":
      textStyle += " text-platinium";
      break;

    default:
      textStyle += " text-black";
      break;
  }

  return <span className={textStyle}>{detail}</span>;
}
