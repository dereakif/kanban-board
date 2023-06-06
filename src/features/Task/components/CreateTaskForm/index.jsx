import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../../components/Button';
import { createTask } from '../../slice/taskSlice';
import './styles.scss';

const priorities = [
  {
    value: 1,
    name: 'Low',
    icon: 'low-priority',
  },
  {
    value: 2,
    name: 'Medium',
    icon: 'medium-priority',
  },
  {
    value: 3,
    name: 'High',
    icon: 'high-priority',
  },
];
const storyPoints = [1, 2, 3, 5, 8, 13, 21, 34];
const CreateTaskForm = ({ handleCloseModal }) => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    description: '',
    assignee: 'user1',
    priority: 1,
    storyPoint: 1,
  });

  const isValid = formState.description.trim() !== '' && formState.description[0] !== ' ';

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createTask({
        ...formState,
        cardNumber: Math.floor(Math.random() * 100),
        type: 'Task',
      }),
    );
    handleCloseModal();
  };

  const handleChange = (e) => {
    setFormState({ ...formState, description: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='form__header'>
        <div className='form__header__title'>Create new task</div>
      </div>
      <div className='form__body'>
        <div className='form__body__title'>Description*:</div>
        <textarea
          value={formState.description}
          onChange={handleChange}
          className='form__body__textarea'
          placeholder='Enter description'
        />
        <div className='form__body__title'>Assignee:</div>
        <div className='form__body__assignee'>
          <img src={require('../../../../assets/user1.png')} alt='avatar' />
          <div className='form__body__assignee__name'>Neil Larkins</div>
        </div>
        <div className='form__body__title'>Priority:</div>
        <div className='form__body__priority'>
          {priorities.map((priority) => (
            <div
              onClick={() => setFormState({ ...formState, priority: priority.value })}
              className={`form__body__priority__item ${
                formState.priority === priority.value ? 'active' : ''
              }`}
              key={priority.name}
            >
              <img src={require(`../../../../assets/${priority.icon}.svg`)} alt={priority.name} />
              <div className='form__body__priority__item__name'>{priority.name}</div>
            </div>
          ))}
        </div>
        <div className='form__body__title'>Story point:</div>
        <div className='form__body__story-point'>
          {storyPoints.map((storyPoint) => (
            <div
              onClick={() => setFormState({ ...formState, storyPoint })}
              className={`form__body__story-point__item ${
                formState.storyPoint === storyPoint ? 'active' : ''
              }`}
              key={storyPoint}
            >
              {storyPoint}
            </div>
          ))}
        </div>
      </div>
      <div className='form__footer'>
        <Button color='secondary' onClick={handleCloseModal}>
          Cancel
        </Button>
        <Button type='submit' disabled={!isValid} color='primary'>
          Create
        </Button>
      </div>
    </form>
  );
};

export default CreateTaskForm;

CreateTaskForm.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};
