import React from 'react';
import { useTranslation } from 'react-i18next';
import CardWithImages from 'components/atoms/cardWithImages';

export default function CharacteristicsInfo() {
  const { t } = useTranslation();

  const characteristicsInfo = t('info.characteristicsObject', {
    returnObjects: true,
  }).map((item) => (
    <CardWithImages
      title={item.title}
      desc={item.text}
      color='blue'
      colorText='platinium'
      showFrameworkIcons={item.images === 'framework'}
      showNewKnowledgeIcons={item.images === 'learn'}
    />
  ));

  return (
    <div className='w-100 mt-10 flex flex-col items-center justify-center md:flex-row lg:flex-col'>
      {characteristicsInfo}
    </div>
  );
}
