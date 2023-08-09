import React from 'react';
import PropTypes from 'prop-types';

const Quotes = ({ value }) => {
  const { quote, author } = value;
  return (
    <div className="flex flex-col mt-3 w-[90%] mx-auto md:w-[400px]">
      <p className="text-white text-sm italic">{quote}</p>
      <p className=" self-end pt-2 italic text-slate-200 text-sm">
        Author:
        <span>{` ${author}`}</span>
      </p>
    </div>
  );
};

Quotes.propTypes = {
  value: PropTypes.string.isRequired,
};
export default Quotes;
