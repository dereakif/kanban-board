import PropTypes from 'prop-types';
import Button from '../../../components/Button';
import Icon from '../../../components/Icon';
import SprintInfoCard from '../../../components/SprintInfoCard';
import './styles.scss';

const sprintNumber = 6;
const teamNumber = 10;

const TaskLayout = ({ children }) => {
  return (
    <div className='task-layout'>
      <div className='task-layout__sprint-info'>
        <img
          className='task-layout__sprint-info__arrow'
          src={require('../../../assets/arrow-left.svg')}
          alt='arrow-left'
        />
        <SprintInfoCard sprintNumber={sprintNumber}>
          <Icon text='hourglass' type='icon' color='grey-dark' size='small' />
        </SprintInfoCard>
        <SprintInfoCard teamNumber={teamNumber}>
          <Icon text='team' type='icon' color='blue' size='small' />
        </SprintInfoCard>
        <hr />
        <span className='task-layout__sprint-info__sprint-name'>New Sprint Name</span>
        <img
          width={16}
          height={16}
          className='calendar'
          src={require('../../../assets/calendar.svg')}
          alt='arrow-left'
        />
        <img
          width={16}
          height={16}
          className='team'
          src={require('../../../assets/team-dark.svg')}
          alt='arrow-left'
        />
        <Button>Complete Sprint</Button>
        <div className='task-layout__sprint-info__view-mode'>
          <hr />
          <Icon text='list' type='icon' color='grey' size='medium' />
          <Icon text='blocks' type='icon' color='blue' size='medium' />
        </div>
      </div>
      <hr />
      <div className='task-layout__content'>{children}</div>
    </div>
  );
};

TaskLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default TaskLayout;
