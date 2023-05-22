import React from 'react';
import IconTitleText from 'components/IconTitleText';
import { useTranslation } from 'react-i18next';

export default function AcademicInfo() {
  const { t } = useTranslation();

  return (
    <section className='mt-10 text-center bg-gradient-to-b from-white to-black md:bg-none md:mt-16 lg:mt-20'>
      <h1 className='text-l mt-5 py-3 font-bold'>
        {t('sectionTitles.academic')}
      </h1>

      <div className='flex flex-col items-center'>
        <IconTitleText
          icon='academic'
          title='Bachiller académico'
          color='blue'
          desc='Gimnasio campestre - 2018'
          colorText='platinium'
        />
        <IconTitleText
          icon='academic'
          title='Ingeniería de sistemas'
          color='blue'
          desc='Pregrado en la Universidad de Antioquia - 2023'
          colorText='platinium'
        />
      </div>
    </section>
  );
}
