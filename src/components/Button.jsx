/* eslint-disable react/prop-types */
const Button = ({ type, name }) => (
  <button type="button" className={`${name === '0' && ' col-span-2'} ${type === 'operator' ? ' bg-orange-500' : 'bg-slate-300'} py-4 border-l border-b`}>
    {name}
  </button>
);

export default Button;
