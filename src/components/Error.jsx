/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prop-types
const Error = ({ message }) => (
  <div className=" p-2 text-white text-5xl">
    Error:
    {message?.message}
  </div>
);

export default Error;
