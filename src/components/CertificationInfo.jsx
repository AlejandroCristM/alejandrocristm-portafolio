import React from 'react';
import IconTitleText from 'components/IconTitleText';
import { useTranslation } from 'react-i18next';

export default function CertificationInfo() {
  const { t } = useTranslation();
  const certifications = [
    {
      id: 1,
      title: 'Blockchain basics',
      desc: 'Coursera - University at Buffallo - 2018',
    },
    {
      id: 2,
      title: 'Mobile first design',
      desc: 'Platzi - 2020',
    },
    {
      id: 3,
      title: 'Html and css',
      desc: 'platzi - 2020',
    },
    {
      id: 4,
      title: 'JS - Basic',
      desc: 'Platzi - 2021',
    },
    {
      id: 5,
      title: 'Figma',
      desc: 'Platzi - 2021',
    },
    {
      id: 6,
      title: 'Js practice',
      desc: 'Platzi - 2021',
    },
    {
      id: 7,
      title: 'Angular - The Complete Guide (2023 Edition)',
      desc: 'Udemy - 2023',
    },
    {
      id: 8,
      title: 'Clean Code',
      desc: 'Udemy - 2023',
    },
  ].map((cert) => (
    <IconTitleText
      component={cert}
      key={cert.id}
      icon='certification'
      title={cert.title}
      desc={cert.desc}
      color='green'
      colorText='platinium'
      size='min-h-[100px]'
    />
  ));

  return (
    <section className='flex flex-col w-full p-auto items-center bg-gradient-to-b from-blue-prussian to-white md:bg-gradient-to-b md:from-black md:to-white'>
      <h1 className='text-l mt-5 py-3 font-bold text-platinium'>
        {t('sectionTitles.certifications')}
      </h1>
      <div className=' flex flex-no-wrap w-full overflow-x-scroll scrolling-touch items-center mb-4 pb-2 items-center md:flex-wrap md:justify-center md:align-center md:overflow-hidden'>
        {certifications}
      </div>
    </section>
  );
}
