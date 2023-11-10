import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

import foto from 'assets/images/Me.jpeg';
import 'styles/PerfilInfo.css';
import DetailText from 'components/atoms/DetailText';

import { useTranslation } from 'react-i18next';

export default function PerfilInfo() {
  const { t } = useTranslation();

  return (
    <section className='flex flex-col text-center lg:flex-row'>
      <section className='flex flex-col mx-1 lg:w-2/3'>
        <picture className='flex flex-col items-center rounded-full px-5'>
          <img
            src={foto}
            className='w-52 rounded-full md:w-1/3 lg:w-2/5'
            alt='Foto personal'
          />
        </picture>
        <h1 className='mt-3.5	font-extrabold	text-2xl tracking-tighter'>
          {t('position')}
        </h1>
        <h2 className='text-xl font-semibold tracking-tight text-green'>
          Frontend
        </h2>
        <h3 className='mt-3.5 text-xl font-medium	tracking-tight'>
          {t('shortAboutMe')}
        </h3>
        <div className='flex font-medium justify-center mt-3'>
          <a
            href='https://github.com/AlejandroCristM'
            target='_blank'
            rel='noreferrer'
          >
            <GoMarkGithub className='icon text-black' />
          </a>
          <a href='/' target='_blank' rel='noreferrer'>
            <SiGmail className='icon text-black' />
          </a>
          <a
            href='https://www.linkedin.com/in/alejandrocristm/'
            target='_blank'
            rel='noreferrer'
          >
            <BsLinkedin className='icon text-black' />
          </a>
        </div>
      </section>
      <section className='flex flex-col mt-2 lg:max-w-xs lg:w-2/5 lg:mt-24'>
        <article className='flex w-full justify-center leading-tight'>
          <p className='w-3/4 mt-2 md:w-3/5 lg:w-full'>{t('textAboutMe')}</p>
        </article>
        <div className='flex justify-center mt-5'>
          <DetailText detail='English' color='blue' textColor='platinium' />
          <DetailText detail='Español (N)' color='blue' textColor='platinium' />
        </div>
      </section>
    </section>
  );
}
