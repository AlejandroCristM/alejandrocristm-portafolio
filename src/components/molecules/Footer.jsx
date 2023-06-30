import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import IconText from 'components/atoms/IconText';

export default function Footer() {
  return (
    <div className='h-10 flex w-full flex-row mt-10'>
      <IconText
        icon={<GoMarkGithub className='h-5 w-5 text-black' />}
        text='GitHub'
        link='https://github.com/AlejandroCristM'
        sw='true'
      />
      <IconText
        icon={<SiGmail className='h-5 w-5 text-black' />}
        text='alejandrocristm@gmail.com'
        sw='true'
      />
      <IconText
        icon={<BsLinkedin className='h-5 w-5 text-black' />}
        text='LinkedIn'
        link='https://www.linkedin.com/in/alejandrocristm/'
        sw='true'
      />
    </div>
  );
}
