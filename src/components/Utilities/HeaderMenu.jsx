import React from 'react'

const HeaderMenu = ({title}) => {
    return (
      <div className="flex justify-center items-center m-auto p-6 bg-slate-300">
        <h1 className="md:text-2xl text-xl text-slate-800 font-bold text-center">{title}</h1>
      </div>
    );
  };

export default HeaderMenu