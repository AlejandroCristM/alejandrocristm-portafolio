import React from 'react';
import AcademicInfo from 'components/AcademicInfo';
import CertificationInfo from 'components/CertificationInfo';
import InterestInfo from 'components/InterestInfo';
import PerfilInfo from 'components/PerfilInfo';
import ProjectsInfo from 'components/ProjectsInfo';
import WorkExpInfo from 'components/WorkExpInfo';
import { useTranslation } from 'react-i18next';
import { FaLanguage } from 'react-icons/fa';

export default function Home() {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <section className='font-sans'>
      <div className='flex justify-center space-x-5 mt-10'>
        <button
          type='button'
          className={`flex items-center ${
            i18n.language === 'es'
              ? 'bg-gray-200 cursor-not-allowed'
              : 'bg-transparent'
          } border-none text-base text-gray-800 hover:text-blue-500 transition duration-300`}
          onClick={() => handleChangeLanguage('es')}
          disabled={i18n.language === 'es'}
        >
          <FaLanguage className='mr-1' />
          Español
        </button>
        <button
          type='button'
          className={`flex items-center ${
            i18n.language === 'en'
              ? 'bg-gray-200 cursor-not-allowed'
              : 'bg-transparent'
          } border-none text-base text-gray-800 hover:text-blue-500 transition duration-300`}
          onClick={() => handleChangeLanguage('en')}
          disabled={i18n.language === 'en'}
        >
          <FaLanguage className='mr-1' />
          English
        </button>
      </div>
      <section className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 lg:w-2/3'>
          <PerfilInfo />
        </div>
        <div className='md:w-1/2 lg:w-1/3'>
          <AcademicInfo />
          <div className='lg:hidden'>
            <InterestInfo />
          </div>
        </div>
      </section>
      <div className='hidden lg:block'>
        <InterestInfo />
      </div>

      <article>
        <WorkExpInfo />
      </article>

      <article>
        <ProjectsInfo />
      </article>

      <article>
        <CertificationInfo />
      </article>
    </section>
  );
}
