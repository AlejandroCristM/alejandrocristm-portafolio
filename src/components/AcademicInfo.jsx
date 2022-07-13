import React from 'react'
import IconTitleText from './IconTitleText'

export default function AcademicInfo() {
  return (
    <section className='mt-10 text-center bg-gradient-to-b from-white to-black md:bg-none md:mt-12'>
        <h1 className="text-l mt-5 font-bold">Información académica</h1>

        <div className='flex flex-col items-center'>
          <IconTitleText 
            icon="academic"
            title="Bachiller académico"
            color="blue"
            desc="Gimnasio camprestre - 2018"
            colorText="platinium"
          />
          <IconTitleText 
            icon="academic"
            title="Ingeniería de sistemas"
            color="blue"
            desc="Pregrado en la Universidad de Antioquia - 2023"
            colorText="platinium"
          />
        </div>
    </section>
  )
}
