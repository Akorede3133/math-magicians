/* eslint-disable react/prop-types */
import React from 'react';

const Quotes = ({ value }) => {
  const { quote, author } = value;
  return (
    <div className="flex flex-col mt-3">
      <p className="text-white text-sm italic">{quote}</p>
      <p className=" self-end pt-2 italic text-slate-200 text-sm">
        Author:
        <span>{` ${author}`}</span>
      </p>
    </div>
  );
};

export default Quotes;
