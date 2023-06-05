import PropTypes from 'prop-types';
import Icon from '../../../../components/Icon';
import './styles.scss';

const priorityMap = {
  1: <img src={require('../../../../assets/low-priority.svg')} alt='chart-low' />,
  2: <img src={require('../../../../assets/medium-priority.svg')} alt='chart-medium' />,
  3: <img src={require('../../../../assets/high-priority.svg')} alt='chart-hight' />,
};

const Card = ({ type, description, cardNumber, storyPoint, priority, assignee }) => {
  return (
    <div className='card'>
      <div className='card__header'>
        <div className='card__header__description line-clamp-2'>{description}</div>
      </div>
      <div className='card__details'>
        <div className='card__details__left'>
          <Icon
            text={type === 'Task' ? 'list-white' : 'box'}
            type='icon'
            color={type === 'Task' ? 'yellow' : 'orange'}
            size='small'
          />
          <span className='card__details__left__card-name'>
            {type === 'Task' ? 'TSK-' : 'EPC-'}
            {cardNumber > 10 ? cardNumber : '0' + cardNumber}
          </span>
        </div>
        <div className='card__details__right'>
          <span>{priorityMap[priority]}</span>
          <span className='card__details__right__story-points'>{storyPoint}</span>
          <span>
            <img
              width={24}
              height={24}
              src={require(`../../../../assets/${assignee}.png`)}
              alt='avatar'
            />
          </span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  storyPoint: PropTypes.number.isRequired,
  priority: PropTypes.number.isRequired,
  cardNumber: PropTypes.number.isRequired,
  assignee: PropTypes.string.isRequired,
};

export default Card;
