import PropTypes from 'prop-types';
import './styles.scss';

const types = {
  letter: 'letter',
  icon: 'icon',
};

const Icon = ({ onClick, text, type, color = '', size = 'small', border = '' }) => {
  return (
    <div {...(onClick && { onClick })} className={`icon ${color} ${type} ${size} ${border}`}>
      {type === types.letter ? text[0] : null}
      {type === types.icon ? <img src={require(`../../assets/${text}.svg`)} alt='icon' /> : null}
    </div>
  );
};

Icon.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
  border: PropTypes.string,
};
export default Icon;
