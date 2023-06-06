import { v4 as uuidv4 } from 'uuid';

export const initialState = {
  todo: [
    {
      id: uuidv4(),
      cardNumber: 1,
      type: 'Task',
      description: 'Being able to rename and edit users lorem rename and edit users',
      storyPoint: 8,
      priority: 3,
      assignee: 'user1',
    },
    {
      id: uuidv4(),
      cardNumber: 3,
      type: 'Epic',
      description: 'Being able to rename and edit users lorem rename and edit users',
      storyPoint: 13,
      priority: 1,
      assignee: 'user2',
    },
  ],
  done: [
    {
      id: uuidv4(),
      cardNumber: 21,
      type: 'Epic',
      description: 'Being able to rename and edit users lorem rename and edit users',
      storyPoint: 13,
      priority: 1,
      assignee: 'user1',
    },
    {
      id: uuidv4(),
      cardNumber: 4,
      type: 'Task',
      description: 'Being able to rename and edit users lorem rename and edit users',
      storyPoint: 2,
      priority: 3,
      assignee: 'user3',
    },
  ],
};
