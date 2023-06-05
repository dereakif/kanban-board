import PropTypes from 'prop-types';
import './styles.scss';

const SprintInfoCard = ({ children, sprintNumber, teamNumber }) => {
  return (
    <div className='sprint-info-card'>
      {children ?? null}
      {sprintNumber ? <span>SPR-{sprintNumber}</span> : null}
      {teamNumber ? <span>TEAM-{teamNumber}</span> : null}
    </div>
  );
};

SprintInfoCard.propTypes = {
  children: PropTypes.node.isRequired,
  sprintNumber: PropTypes.number,
  teamNumber: PropTypes.number,
};

export default SprintInfoCard;
