/* eslint-disable react/prop-types */
import React from 'react';

const Screen = ({ value }) => (
  <div className=" w-full bg-slate-600 h-16 flex justify-end items-center text-white p-4 text-2xl">
    {value}
  </div>
);

export default Screen;
