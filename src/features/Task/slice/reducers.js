import { v4 as uuidv4 } from 'uuid';

export const reducers = {
  createTask: (state, action) => {
    const { cardNumber, type, description, storyPoint, priority, assignee } = action.payload;
    const task = {
      id: uuidv4(),
      cardNumber,
      type,
      description,
      storyPoint,
      priority,
      assignee,
    };

    state.todo.push(task);
  },
  moveTask: (state, action) => {
    const { targetColumn, cardId } = action.payload;

    if (targetColumn === 'TODO') {
      const task = state.done.find((task) => task.id === cardId);
      state.done = state.done.filter((task) => task.id !== cardId);
      state.todo.push(task);
    } else {
      const task = state.todo.find((task) => task.id === cardId);
      state.todo = state.todo.filter((task) => task.id !== cardId);
      state.done.push(task);
    }
  },
};
