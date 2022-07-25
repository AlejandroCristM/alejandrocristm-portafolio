import React from 'react';
import IconTitleText from 'components/IconTitleText';

export default function ProjectsInfo() {
  const projects = [
    {
      id: 1,
      title: 'Gistura',
      year: '2020',
      desc: 'Sistema realizado para facilitar la búsqueda y promoción de eventos culturales en el valle de aburrá.',
    },
    {
      id: 2,
      title: 'Icocinema',
      year: '2021-2022',
      desc: 'Sistema realizado para reducir el tiempo gastado por usuarios del cine al tener que reservar para ver una película.',
    },
    {
      id: 3,
      title: 'Onboarding platform',
      year: '2022 - act',
      desc: '(Proyecto integrador con empresa) Sistema útil para onboarding de personal nuevo, principalmente información de la empresa, temas y conceptos claves para su trabajo.',
    },
    {
      id: 4,
      title: 'Portafolio personal',
      year: '2021-act',
      desc: 'Página web desarrollada como objetivo personal con la finalidad de construir una tarjeta de presentación para alejandrocristm',
    },
  ].map((project) => (
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
      <h1 className='text-l mt-5 py-3 font-bold text-platinium md:text-black'>
        Proyectos
      </h1>
      <div className=' flex flex-no-wrap w-full overflow-x-scroll scrolling-touch items-center mb-4 pb-2 md:flex-wrap md:justify-center md:align-center md:overflow-auto'>
        {projects}
      </div>
    </section>
  );
}
