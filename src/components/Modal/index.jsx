import PropTypes from 'prop-types';
import './styles.scss';

const Modal = ({ children, onClose, size = 'medium' }) => {
  return (
    <div className='modal' role='dialog'>
      <div onClick={onClose} className='modal__overlay' />
      <div className={`modal-main ${size}`}>
        <div onClick={onClose} className='modal__close'>
          <img src={require('../../assets/close.svg')} alt='close' />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
};
