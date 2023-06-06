import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({ children, type = 'button', onClick, color = 'primary', disabled = false }) => {
  return (
    <button type={type} disabled={disabled} className={`button ${color}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  disabled: PropTypes.bool,
};
