import React from "react";
import IconTitleText from "./IconTitleText";

export default function CertificationInfo() {
  const certifications = [
    {
      id: 1,
      title: "Blockchain basics",
      desc: "Coursera - 2018",
    },
    {
      id: 2,
      title: "Mobile first design",
      desc: "Platzi - 2020",
    },
    {
      id: 3,
      title: "Html and css",
      desc: "platzi - 2020",
    },
    {
      id: 4,
      title: "JS - Básico",
      desc: "Coursera - 2021",
    },
    {
      id: 5,
      title: "Figma",
      desc: "Platzi - 2021",
    },
    {
      id: 6,
      title: "Js práctico",
      desc: "Platzi - 2021",
    },
  ].map((cert) => {
    return (
      <IconTitleText
        component={cert}
        key={cert.id}
        icon="certification"
        title={cert.title}
        desc={cert.desc}
        color="green"
        colorText="platinium"
      />
    );
  });

  return (
    <section className="flex flex-col m-auto p-auto items-center bg-gradient-to-b from-blue-prussian to-white md:bg-gradient-to-b md:from-black md:to-white">
      <h1 className="text-l mt-5 py-3 font-bold text-platinium">
        Certificaciones
      </h1>
      <div className=" flex flex-no-wrap w-screen overflow-x-scroll scrolling-touch items-start mb-4 pb-2 md:flex-wrap md:justify-center md:align-center">
        {certifications}
      </div>
    </section>
  );
}
