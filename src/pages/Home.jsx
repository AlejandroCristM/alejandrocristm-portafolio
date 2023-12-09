import React from 'react';
import AcademicInfo from 'components/AcademicInfo';
import CertificationInfo from 'components/CertificationInfo';
import InterestInfo from 'components/InterestInfo';
import PerfilInfo from 'components/PerfilInfo';
import ProjectsInfo from 'components/ProjectsInfo';
import WorkExpInfo from 'components/WorkExpInfo';
import NavBar from 'components/molecules/NavBar';
import CharacteristicsInfo from 'components/CharacteristicsInfo';

export default function Home() {
  return (
    <section className='font-sans'>
      <NavBar />
      <section className='flex flex-col md:mx-20 lg:mx-36'>
        <PerfilInfo />
        <CharacteristicsInfo />
        <AcademicInfo />
        <div className='lg:hidden'>
          <InterestInfo />
        </div>
      </section>
      <div className='hidden lg:block'>
        <InterestInfo />
      </div>

      <article>
        <WorkExpInfo />
      </article>

      <article>
        <ProjectsInfo />
      </article>

      <article>
        <CertificationInfo />
      </article>
    </section>
  );
}
