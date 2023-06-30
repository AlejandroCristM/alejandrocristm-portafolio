import React from 'react';
import IconTitleText from 'components/atoms/IconTitleText';
import { useTranslation } from 'react-i18next';

export default function WorkExpInfo() {
  const { t } = useTranslation();
  const workExp = [
    {
      id: 1,
      title: 'Intern developer en Rockwell Automation',
      year: 'Dic 2022-act',
      desc: 'Desarrollador frontend (Angular), enfocado en la inserción de nuevas funcionalidades y resolución de anomalías tanto en UX como UI',
    },
  ].map((project) => (
    <IconTitleText
      component={project}
      key={project.id}
      icon='job'
      title={project.title}
      desc={project.desc}
      color='blue'
      colorText='platinium'
      details={project.year}
      size='min-h-[220px]'
    />
  ));
  return (
    <section className='flex flex-col w-full bg-black md:bg-white items-center  md:mt-10'>
      <h1 className='text-l mt-5 py-3 font-bold text-platinium md:text-black'>
        {t('sectionTitles.workExp')}
      </h1>
      <div className=' flex flex-no-wrap w-full overflow-x-scroll scrolling-touch justify-center items-center mb-4 pb-2 md:flex-wrap md:justify-center md:align-center md:overflow-auto'>
        {workExp}
      </div>
    </section>
  );
}
