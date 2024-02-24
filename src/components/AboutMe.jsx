import React from 'react';
import { useTranslation } from 'react-i18next';
import colombianGuy from 'assets/images/colombianGuy.png';

function AboutMe() {
  const { t } = useTranslation();

  return (
    <section className='flex flex-col justify-center items-center about-me-container'>
      <h2 className='text-center text-4xl font-semibold tracking-tight text-green mt-5 mb-3 md:text-5xl'>
        {t('sectionTitles.aboutme')}
      </h2>
      <p className='p-4 md:px-10 text-justify'>{t('info.aboutme')}</p>
      <picture className='md:w-4/5 lg:w-1/2'>
        <img src={colombianGuy} alt='Colombian guy saying hi!' />
      </picture>
    </section>
  );
}

export default AboutMe;
