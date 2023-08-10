import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ message }) => (
  <div className=" p-2 text-white text-5xl">
    Error:
    {message?.message}
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Error;
