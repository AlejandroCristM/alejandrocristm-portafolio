import React from 'react'
import DetailText from "./DetailText";

export default function InterestInfo() {

  const interests = ['React', 'JS', 'Python', 'Html', 'Css', 'Agile methodologies'].map((interest)=>{
    return(
        <DetailText key={interest} detail={interest} color="orange"/>
    );
  });

  return (
    <section className='w-full pt-5 pb-10 px-3 text-center bg-black md:bg-white'>
        <h1 className="text-l mt-5 font-bold text-platinium md:text-black">
            Intereses
        </h1>
        <div className="flex flex-wrap justify-center">
            {interests}
        </div>
    </section>
  )
}
