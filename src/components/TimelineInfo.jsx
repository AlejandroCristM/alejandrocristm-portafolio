import React from 'react';
import { useTranslation } from 'react-i18next';
import CustomizedTimeline from 'components/molecules/Timeline';

export default function TimelineInfo() {
  const { t } = useTranslation();
  return (
    <section className='flex flex-col w-full items-center my-10'>
      <h2 className='text-4xl font-semibold tracking-tight text-green mb-2 md:mt-4 md:text-5xl'>
        {t('sectionTitles.timeline')}
      </h2>
      <div className='w-full'>
        <CustomizedTimeline />
      </div>
    </section>
  );
}
