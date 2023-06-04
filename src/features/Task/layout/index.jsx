import PropTypes from 'prop-types';
import './styles.scss';

const TaskLayout = ({ children }) => {
  return <div className='task-layout'>{children}</div>;
};

TaskLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default TaskLayout;
