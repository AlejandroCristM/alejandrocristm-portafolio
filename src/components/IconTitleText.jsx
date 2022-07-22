import React from 'react'
import IconText from './IconText'
import {GoMortarBoard, GoCode, GoVerified} from "react-icons/go";

export default function IconTitleText({icon, title, desc, color, details, colorText, size}) {
  
  /*
  This component return a component which contains an icon, title,
  description, details, main color, color text and a size 

  Icons, main color and color text are predefined but can be changed and be added
  title, desc and details are strings
  size is a number waited in px
  */


  const iconToUse=()=>{

    var iconStyle="h-5 w-5"
    if(colorText==='platinium' ){
      iconStyle+=" text-platinium"
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

  var stylesComponent ="overflow-hidden rounded w-64 p-3 my-2 mx-3 min-w-[240px]"

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

  if(size){
    stylesComponent+= " "+size;
    /* 
      wasn't able to use just the pixels quantity cause the browser
      so, now size is a relevant tailwind instruction to manage the component size 
    */
  }

  return (
    <div className={stylesComponent}>
      <span>
        {iconToUse()}
      </span>
      <p className="mt-3 text-base font-semibold">{details}</p>
      <p className="mt-1 text-sm text-center">{desc}</p>
    </div>
  )
}
