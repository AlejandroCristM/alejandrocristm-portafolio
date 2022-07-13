import React from 'react'
import IconText from './IconText'
import {GoMortarBoard, GoCode, GoVerified} from "react-icons/go";

export default function IconTitleText({icon, title, desc, color, details, colorText}) {
  
  const iconToUse=()=>{

    var iconStyle="h-5 w-5"
    if(colorText=='platinium'){
      iconStyle+=" text-white"
    }

    switch(icon){

      case 'academic':
        return(
          <IconText
            icon={<GoMortarBoard className={iconStyle} />}
            text={title}
          />
        );

      case 'project':
        return(
          <IconText
            icon={<GoCode className={iconStyle} />}
            text={title}
          />
        );

      case 'certification':
        return(
          <IconText
            icon={<GoVerified className={iconStyle} />}
            text={title}
          />
        );

      default:
        return(<p>Bad component implementation"</p>)
    }
  };

  var stylesComponent ="rounded w-64 p-3 my-2"

  switch (color) {
    case "blue":
      stylesComponent+=" bg-blue-prussian";
      break;

    case "green":
      stylesComponent+=" bg-green-slimy";
      break;

    case "orange":
      stylesComponent+=" bg-orange-web";
      break;

    case "platinium":
      stylesComponent+=" bg-platinium";
      break;
    
    default:
      stylesComponent+=" bg-black";
      break;
  }

  switch (colorText) {
    case "blue":
      stylesComponent+=" text-blue-prussian";
      break;

    case "green":
      stylesComponent+= " text-green-slimy";
      break;

    case "orange":
      stylesComponent+= " text-orange-web";
      break;

    case "platinium":
      stylesComponent+=" text-platinium";
      break;

    default:
      stylesComponent+=" text-black";
      break;
  }

  return (
    <div className={stylesComponent}>
      <span>
        {iconToUse()}
      </span>
      <p className="mt-2">{details}</p>
      <p className="mt-1">{desc}</p>
    </div>
  )
}
