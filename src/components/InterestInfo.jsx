import React from 'react';
import DetailText from 'components/atoms/DetailText';
import { useTranslation } from 'react-i18next';

export default function InterestInfo() {
  const { t } = useTranslation();
  const interests = [
    'Html',
    'Css',
    'JS',
    'Angular',
    'React',
    'Python',
    'Agile methodologies',
    'Blockchain',
    'web 3.0',
    'Smart Contracts',
  ].map((interest) => (
    <DetailText key={interest} detail={interest} color='orange' />
  ));

  return (
    <section className='w-full pt-5 pb-4 px-3 text-center bg-black md:bg-white'>
      <h1 className='text-l mt-5 py-3 font-bold text-platinium md:text-black'>
        {t('sectionTitles.interest')}
      </h1>
      <div className='flex flex-wrap justify-center'>{interests}</div>
    </section>
  );
}
