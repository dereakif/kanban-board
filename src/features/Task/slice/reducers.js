import { v4 as uuidv4 } from 'uuid';

const groupMap = {
  DONE: 'done',
  TODO: 'todo',
};

const groupMapReverse = {
  DONE: 'todo',
  TODO: 'done',
};

export const reducers = {
  createTask: (state, action) => {
    const { cardNumber, type, description, storyPoint, priority, assignee, destinationGroupCode } =
      action.payload;
    const task = {
      id: uuidv4(),
      cardNumber,
      type,
      description,
      storyPoint,
      priority,
      assignee,
    };

    const destinationGroup = groupMap[destinationGroupCode];
    state[destinationGroup].push(task);
  },
  moveCard: (state, action) => {
    const { targetGroupCode, cardId } = action.payload;

    const currentGroup = groupMapReverse[targetGroupCode];
    const targetGroup = groupMap[targetGroupCode];

    const card = state[currentGroup].find((task) => task.id === cardId);

    state[currentGroup] = state[currentGroup].filter((task) => task.id !== cardId);
    state[targetGroup].push(card);
  },
  changeCardOrder: (state, action) => {
    const { currentCardId, targetCardId, currentGroupCode } = action.payload;
    const currentGroup = groupMap[currentGroupCode];

    const currentCardIndex = state[currentGroup].findIndex((task) => task.id === currentCardId);
    const targetCardIndex = state[currentGroup].findIndex((task) => task.id === targetCardId);

    state[currentGroup].splice(
      targetCardIndex,
      0,
      state[currentGroup].splice(currentCardIndex, 1)[0],
    );
  },
};
