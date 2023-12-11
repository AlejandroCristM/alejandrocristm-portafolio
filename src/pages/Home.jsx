import React from 'react';
import CertificationInfo from 'components/CertificationInfo';
import PerfilInfo from 'components/PerfilInfo';
import ProjectsInfo from 'components/ProjectsInfo';
import TimelineInfo from 'components/TimelineInfo';
import NavBar from 'components/molecules/NavBar';
import CharacteristicsInfo from 'components/CharacteristicsInfo';

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

      <article>
        <TimelineInfo />
      </article>

      <article>
        <ProjectsInfo />
      </article>

      <article>
        <CertificationInfo />
      </article>
    </article>
  );
}
