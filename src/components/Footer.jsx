import React from "react";
import IconText from "./IconText";
import { GoMarkGithub, GoMail, GoBriefcase } from "react-icons/go";

export default function Footer() {
  return (
    <div className="h-10 flex w-full flex-row mt-10">
      <IconText
        icon={<GoMarkGithub className="h-5 w-5 text-black" />}
        text="GitHub"
        link="https://github.com/AlejandroCristM"
        sw="true"
      />
      <IconText
        icon={<GoMail className="h-5 w-5 text-black" />}
        text="alejandrocristm@gmail.com"
        sw="true"
      />
      <IconText
        icon={<GoBriefcase className="h-5 w-5 text-black" />}
        text="LinkedIn"
        link="https://www.linkedin.com/in/alejandrocristm/"
        sw="true"
      />
    </div>
  );
}
