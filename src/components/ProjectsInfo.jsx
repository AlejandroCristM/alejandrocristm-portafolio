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
    <section className='flex flex-col w-full items-center mt-3 md:mt-5 gradient-projects-section'>
      <h2 className='text-center text-4xl font-semibold tracking-tight text-green mt-10 mb-3 md:text-5xl'>
        {t('sectionTitles.projects')}
      </h2>
      <div className=' flex flex-no-wrap w-full overflow-x-scroll scrolling-touch items-center mt-2 md:mt-4 pb-2 md:flex-wrap md:justify-center md:align-center md:overflow-auto'>
        {projects}
      </div>
    </section>
  );
}
