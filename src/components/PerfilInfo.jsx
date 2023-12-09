import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

import foto from 'assets/images/Me.jpeg';
import 'styles/PerfilInfo.css';

import { useTranslation } from 'react-i18next';

export default function PerfilInfo() {
  const { t } = useTranslation();

  return (
    <section className='flex flex-col text-center mx-1 md:flex-row'>
      <picture className='flex flex-col justify-center items-center rounded-full px-5 md:justify-start md:items-start md:w-2/5 lg:px-0'>
        <img
          src={foto}
          className='rounded-full w-52 md:w-72'
          alt='Foto personal'
        />
      </picture>
      <section className='flex flex-col content-center px-2 md:w-3/5 md:text-right md:justify-center'>
        <h1 className='mt-3.5 font-extrabold	text-2xl tracking-tighter md:text-5xl lg:text-6xl'>
          {t('position')}
        </h1>
        <h2 className='text-xl font-semibold tracking-tight text-green md:text-4xl md:mt-4 lg:text-5xl'>
          Frontend
        </h2>
        <h3 className='mt-3.5 text-xl font-medium	tracking-tight md:text-2xl lg:mt-5 lg:text-4xl'>
          {t('shortAboutMe')}
        </h3>
        <div className='flex font-medium justify-center gap-5	md:justify-end mt-3'>
          <a
            href='https://github.com/AlejandroCristM'
            target='_blank'
            rel='noreferrer'
          >
            <span className='w-6 h-6 inline-block'>
              <GoMarkGithub className='icon text-black' />
            </span>
          </a>
          <a href='/' target='_blank' rel='noreferrer'>
            <span className='w-6 h-6 inline-block'>
              <SiGmail className='icon text-black' />
            </span>
          </a>
          <a
            href='https://www.linkedin.com/in/alejandrocristm/'
            target='_blank'
            rel='noreferrer'
          >
            <span className='w-6 h-6 inline-block'>
              <BsLinkedin className='icon text-black' />
            </span>
          </a>
        </div>
      </section>
    </section>
  );
}
