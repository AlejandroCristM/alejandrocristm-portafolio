import React from 'react';
import vueLogo from 'assets/icons/vueLogo.png';
import reactLogo from 'assets/icons/reactLogo.png';
import angularLogo from 'assets/icons/angularLogo.png';
import blockchainIcon from 'assets/icons/BlockchainIcon.png';
import cloudIcon from 'assets/icons/cloud-computing.png';
import figmaIcon from 'assets/icons/figma-logo.png';

export function CardWithImages({
  title,
  desc,
  color,
  colorText,
  showFrameworkIcons,
  showNewKnowledgeIcons,
}) {
  let stylesComponent =
    'flex flex-col justify-between items-center text-center overflow-hidden rounded w-64 p-3 my-2 mx-3 min-w-[300px] lg:p-5 lg:min-w-[900px] lg:flex-row';

  switch (color) {
    case 'blue':
      stylesComponent += ' bg-blue-prussian';
      break;

    case 'green':
      stylesComponent += ' bg-green-slimy';
      break;

    case 'orange':
      stylesComponent += ' bg-orange-web';
      break;

    case 'platinium':
      stylesComponent += ' bg-platinium';
      break;

    default:
      stylesComponent += ' bg-black';
      break;
  }

  switch (colorText) {
    case 'blue':
      stylesComponent += ' text-blue-prussian';
      break;

    case 'green':
      stylesComponent += ' text-green-slimy';
      break;

    case 'orange':
      stylesComponent += ' text-orange-web';
      break;

    case 'platinium':
      stylesComponent += ' text-platinium';
      break;

    default:
      stylesComponent += ' text-black';
      break;
  }

  return (
    <section className={stylesComponent}>
      <h3 className='text-xl font-bold mb-2 lg:w-1/3 lg:text-5xl lg:text-left lg:mb-0'>
        {title}
      </h3>
      {showFrameworkIcons && (
        <section className='flex justify-center lg:w-1/3'>
          <img className='w-20 h-20' src={angularLogo} alt='Angular logo' />
          <img className='w-20 h-20' src={reactLogo} alt='React logo' />
          <img className='w-20 h-20' src={vueLogo} alt='Vue logo' />
        </section>
      )}
      {showNewKnowledgeIcons && (
        <section className='flex justify-center lg:w-1/3'>
          <img className='w-20 h-20' src={blockchainIcon} alt='Blockchain' />
          <img className='w-20 h-20' src={cloudIcon} alt='Cloud' />
          <img className='w-20 h-20' src={figmaIcon} alt='Figma icon' />
        </section>
      )}
      <p className='mt-2 lg:w-1/4 lg:text-right lg:text-xl lg:mt-0'>{desc}</p>
    </section>
  );
}

export default CardWithImages;
