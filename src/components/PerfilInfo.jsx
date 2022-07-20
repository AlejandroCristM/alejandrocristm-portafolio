import React from "react";
import foto from "../assets/images/Me.jpeg";
import { GoMarkGithub, GoMail, GoBriefcase } from "react-icons/go";
import "../styles/PerfilInfo.css";
import DetailText from "./DetailText";

export default function PerfilInfo() {
  var birthDate = new Date("01/05/2002");
  var todayDate = new Date();

  var totalYears = Math.floor(
    (todayDate.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365)
  );

  return (
    <section className="flex flex-col text-center">
      <h1 className="text-xl mt-5 font-bold">Alejandro Cristancho Medina</h1>
      <picture className="flex flex-col items-center rounded-full px-5">
        <img
          src={foto}
          className=" w-1/2 rounded-full md:w-1/3"
          alt="Foto personal"
        />
      </picture>
      <h3 className="mt-2">{totalYears + " años"}</h3>
      <div className="flex font-medium justify-center mt-3">
        <a href="https://github.com/AlejandroCristM" target="_blank" rel="noreferrer">
          <GoMarkGithub className="icon text-black" />
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <GoMail className="icon text-black" />
        </a>
        <a href="https://www.linkedin.com/in/alejandrocristm/" target="_blank" rel="noreferrer">
          <GoBriefcase className="icon text-black" />
        </a>
      </div>
      <article className="flex w-full justify-center leading-tight">
        <p className="w-3/4 mt-2 md:w-3/5">
          Soy estudiante de cuarto año universitario, caracterizado por la
          disciplina, trabajo en equipo, persistencia y curiosidad por aprender
          y mejorar mis habilidades. Mi experiencia se basa en diferentes tipos
          de proyectos y cursos universitarios, en los cuales he logrado
          excelentes rendimientos, de igual manera en cursos de plataformas
          autodidactas.
        </p>
      </article>
      <div className="flex justify-center mt-5">
        <DetailText detail="Ingles" color="blue" textColor="platinium" />
        <DetailText detail="Español (N)" color="blue" textColor="platinium" />
      </div>
    </section>
  );
}
