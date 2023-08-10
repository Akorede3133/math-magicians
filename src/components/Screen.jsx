import React from 'react';
import PropTypes from 'prop-types';

const Screen = ({ value }) => (
  <div className=" w-full bg-slate-600 h-16 flex justify-end items-center text-white p-4 text-2xl">
    {value}
  </div>
);

Screen.propTypes = {
  value: PropTypes.string.isRequired,
};
export default Screen;
