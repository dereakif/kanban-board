import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Icon from '../../../../components/Icon';
import { moveTask } from '../../slice/taskSlice';
import './styles.scss';

const handleDragOver = (event) => {
  event.preventDefault();
};

const handleDragLeave = (event) => {
  event.currentTarget.classList.remove('drop-zone');
};

const handleDragEnter = (event) => {
  event.currentTarget.classList.add('drop-zone');
};

const Group = ({ children, title, icon, storyPoints, groupCode }) => {
  const dispatch = useDispatch();

  const handleDrop = (event) => {
    const data = event.dataTransfer.getData('text/plain');
    const { cardId, currentColumn } = JSON.parse(data);
    const targetColumn = groupCode;

    currentColumn !== targetColumn &&
      dispatch(
        moveTask({
          cardId,
          targetColumn,
        }),
      );
    event.currentTarget.classList.remove('drop-zone');
  };

  return (
    <div
      className='group'
      data-column={title}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className='group__header'>
        <Icon text={icon} type='icon' size='small' />
        <span className='group__header__title'>{title}</span>
        <div className='group__header__story-points'>{storyPoints}</div>
      </div>
      <div className='group__body'>{children}</div>
    </div>
  );
};

Group.propTypes = {
  groupCode: PropTypes.string.isRequired,
  storyPoints: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Group;
