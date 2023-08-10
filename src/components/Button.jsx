import PropTypes from 'prop-types';

const Button = ({ type, name, handleClick }) => (
  <button
    type="button"
    className={`${name === '0' && ' col-span-2'} ${type === 'operator' ? ' bg-orange-500' : 'bg-slate-300'} py-4 border-l border-b`}
    onClick={handleClick}
  >
    {name}
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default Button;
