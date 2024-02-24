import React from 'react';

export default function IconText({ icon, bg, textColor, text, link, sw }) {
  // sw => bool which specify if the title component is responsive

  const className = `flex w-full justify-center ${bg} ${textColor}`;

  if (sw) {
    return (
      <div className={className}>
        <a href={link} target='_blank' rel='noreferrer'>
          {icon}
        </a>
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          className='ml-6 hidden md:inline font-semibold text-base'
        >
          {text}
        </a>
      </div>
    );
  }

  return (
    <div className={className}>
      <a href={link} target='_blank' rel='noreferrer'>
        {icon}
      </a>
      <a
        href={link}
        target='_blank'
        rel='noreferrer'
        className='ml-6 font-semibold text-base'
      >
        {text}
      </a>
    </div>
  );
}
