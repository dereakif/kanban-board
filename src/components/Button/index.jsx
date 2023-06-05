import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({ children, onClick, color = 'primary' }) => {
  return (
    <button className={`button ${color}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
};
