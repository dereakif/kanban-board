import { useState } from 'react';
import CreateTaskForm from '../../features/Task/components/CreateTaskForm';
import Icon from '../Icon';
import Modal from '../Modal';
import Search from '../Search';
import './styles.scss';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
      <div className='header'>
        <div className='header__search'>
          <Search />
          <Icon text='controls' type='icon' color='grey-light' size='large' />
          <Icon text='filter' type='icon' color='grey-light' size='large' />
        </div>
        <Icon
          onClick={handleShowModal}
          text='plus'
          type='icon'
          color='white'
          size='large'
          border='border-blue'
        />
      </div>
      {showModal && (
        <Modal size='large' onClose={handleCloseModal}>
          <CreateTaskForm handleCloseModal={handleCloseModal} />
        </Modal>
      )}
    </>
  );
};
export default Header;
