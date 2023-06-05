import PropTypes from 'prop-types';
import Icon from '../../../../components/Icon';
import './styles.scss';

const Group = ({ children, title, icon, storyPoints }) => {
  return (
    <div className='group'>
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
  storyPoints: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Group;
