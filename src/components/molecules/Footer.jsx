import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import IconText from 'components/atoms/IconText';

export default function Footer() {
  return (
    <div className='flex w-full flex-row py-10 bg-black'>
      <IconText
        icon={<GoMarkGithub className='h-5 w-5 text-platinium' />}
        bg='bg-black'
        textColor='text-platinium'
        text='GitHub'
        link='https://github.com/AlejandroCristM'
        sw='true'
      />
      <IconText
        icon={<SiGmail className='h-5 w-5 text-platinium' />}
        bg='bg-black'
        textColor='text-platinium'
        text='alejandrocristm@gmail.com'
        sw='true'
      />
      <IconText
        icon={<BsLinkedin className='h-5 w-5 text-platinium' />}
        text='LinkedIn'
        link='https://www.linkedin.com/in/alejandrocristm/'
        bg='bg-black'
        textColor='text-platinium'
        sw='true'
      />
    </div>
  );
}
