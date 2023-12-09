import React from 'react';
import CardWithImages from 'components/atoms/cardWithImages';

export default function CharacteristicsInfo() {
  return (
    <div className='w-100 mt-10 flex flex-col items-center justify-center md:flex-row lg:flex-col'>
      <CardWithImages
        title='Versatile Framework Proficiency'
        desc='I have had the opportunity to work with several frontend frameworks, libraries and CSS preprocessors. '
        color='blue'
        colorText='platinium'
        showFrameworkIcons
      />
      <CardWithImages
        title='Willingness to learn'
        desc='I enjoy the opportunity to explore new horizons particularly  Blockchain, cloud computing, and design patterns - Figma.'
        color='blue'
        colorText='platinium'
        showNewKnowledgeIcons
      />
    </div>
  );
}
