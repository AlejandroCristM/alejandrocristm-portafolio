import React from 'react';
import IconTitleText from 'components/atoms/IconTitleText';
import { useTranslation } from 'react-i18next';

export default function ProjectsInfo() {
  const { t } = useTranslation();
  const projects = t('info.projectsobject', {
    returnObjects: true,
  }).map((project) => (
    <IconTitleText
      component={project}
      key={project.id}
      icon='project'
      title={project.title}
      desc={project.desc}
      color='platinium'
      details={project.year}
      size='min-h-[220px]'
    />
  ));

  return (
    <section className='flex flex-col w-full items-center bg-gradient-to-b from-black to-blue-prussian md:bg-gradient-to-b md:from-white md:to-black md:mt-10'>
      <h2 className='text-l mt-5 py-3 font-bold text-platinium md:text-black'>
        {t('sectionTitles.projects')}
      </h2>
      <div className=' flex flex-no-wrap w-full overflow-x-scroll scrolling-touch items-center mb-4 pb-2 md:flex-wrap md:justify-center md:align-center md:overflow-auto'>
        {projects}
      </div>
    </section>
  );
}
