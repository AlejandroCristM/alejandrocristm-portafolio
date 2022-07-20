import React from "react";
import AcademicInfo from "../components/AcademicInfo";
import CertificationInfo from "../components/CertificationInfo";
import InterestInfo from "../components/InterestInfo";
import PerfilInfo from "../components/PerfilInfo";
import ProjectsInfo from "../components/ProjectsInfo";

export default function Home() {
  return (
    <section className="font-sans">
      <section className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <PerfilInfo />
        </div>
        <div className="md:w-1/2">
          <AcademicInfo />
          <InterestInfo />
        </div>
      </section>

      <article>
        <ProjectsInfo />
      </article>

      <article>
        <CertificationInfo />
      </article>
    </section>
  );
}
