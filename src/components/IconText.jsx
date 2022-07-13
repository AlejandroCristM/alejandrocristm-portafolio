import React from "react";

export default function IconText({ icon, text, link, sw}) {

  //sw => bool which specify if the title component is responsive 

  if(sw){
    return (
      <div className="flex w-full justify-center">
        <a href={link} target="_blank" rel="noreferrer">
          {icon}
        </a>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="ml-6 hidden md:inline"
        >
          {text}
        </a>
      </div>
    );
  }
  
  return(
    <div className="flex w-full justify-center">
        <a href={link} target="_blank" rel="noreferrer">
          {icon}
        </a>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="ml-6"
        >
          {text}
        </a>
      </div>
  );
}
