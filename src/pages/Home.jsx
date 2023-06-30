import React from 'react';
import AcademicInfo from 'components/AcademicInfo';
import CertificationInfo from 'components/CertificationInfo';
import InterestInfo from 'components/InterestInfo';
import PerfilInfo from 'components/PerfilInfo';
import ProjectsInfo from 'components/ProjectsInfo';
import WorkExpInfo from 'components/WorkExpInfo';
import NavBar from 'components/molecules/NavBar';

export default function Home() {
  return (
    <section className='font-sans'>
      <NavBar />
      <section className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 lg:w-2/3'>
          <PerfilInfo />
        </div>
        <div className='md:w-1/2 lg:w-1/3'>
          <AcademicInfo />
          <div className='lg:hidden'>
            <InterestInfo />
          </div>
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
