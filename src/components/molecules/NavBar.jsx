import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLanguage } from 'react-icons/fa';
import Logo from 'assets/images/ColorLogoAlejandroCristM.svg';
import Tooltip from '@mui/material/Tooltip';

const NavBar = () => {
  const { i18n, t } = useTranslation();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <section className='flex items-center justify-between md:mx-10'>
      <div className='w-1/2 md:w-1/3'>
        <img src={Logo} alt='Logo' />
      </div>
      <div className='w-1/2 flex justify-end md:w-2/3'>
        <Tooltip title={t('changeLang')}>
          <button
            type='button'
            className='flex items-center space-x-1 p-3 rounded hover:bg-blue-prussian hover:text-white
          border-none text-base text-gray-800 hover:text-blue-500 transition duration-300'
            onClick={() => {
              const language = i18n.language === 'es' ? 'en' : 'es';
              handleChangeLanguage(language);
            }}
          >
            <FaLanguage className='mr-1 w-5 h-5 md:w-8 md:h-8' />
            <p className='text-xl md:text-3xl'>
              {i18n.language === 'es' ? 'En' : 'Es'}
            </p>
          </button>
        </Tooltip>
      </div>
    </section>
  );
};

export default NavBar;
