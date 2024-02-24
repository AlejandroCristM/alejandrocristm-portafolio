import React from 'react';
import CertificationInfo from 'components/CertificationInfo';
import PerfilInfo from 'components/PerfilInfo';
import ProjectsInfo from 'components/ProjectsInfo';
import TimelineInfo from 'components/TimelineInfo';
import NavBar from 'components/molecules/NavBar';
import CharacteristicsInfo from 'components/CharacteristicsInfo';
import AboutMe from 'components/AboutMe';

export default function Home() {
  return (
    <article className='font-sans'>
      <NavBar />
      <section className='md:mx-20 lg:mx-36'>
        <PerfilInfo />
      </section>

      <section>
        <CharacteristicsInfo />
      </section>

      <section className='flex flex-col md:flex-row px-6 md:px-10 mt-10'>
        <div className='md:w-1/2'>
          <TimelineInfo />
        </div>
        <div className='md:w-1/2'>
          <AboutMe />
        </div>
      </section>

      <section>
        <ProjectsInfo />
      </section>

      <article>
        <CertificationInfo />
      </article>
    </article>
  );
}
