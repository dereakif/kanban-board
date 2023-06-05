import Card from './components/Card';
import Group from './components/Group';
import TaskLayout from './layout';

const initialTodoItems = [
  {
    id: 1,
    cardNumber: 1,
    type: 'Task',
    description: 'Being able to rename and edit users lorem rename and edit users',
    storyPoint: 8,
    priority: 3,
    assignee: 'user1',
  },
  {
    id: 2,
    cardNumber: 3,
    type: 'Epic',
    description: 'Being able to rename and edit users lorem rename and edit users',
    storyPoint: 13,
    priority: 1,
    assignee: 'user2',
  },
];

const initialDoneItems = [
  {
    id: 4,
    cardNumber: 21,
    type: 'Epic',
    description: 'Being able to rename and edit users lorem rename and edit users',
    storyPoint: 13,
    priority: 1,
    assignee: 'user1',
  },
  {
    id: 3,
    cardNumber: 4,
    type: 'Task',
    description: 'Being able to rename and edit users lorem rename and edit users',
    storyPoint: 2,
    priority: 3,
    assignee: 'user3',
  },
];

const totalTodoStoryPoints = initialTodoItems.reduce(
  (acc, item) => acc.storyPoint + item.storyPoint,
);
const totalDoneStoryPoints = initialDoneItems.reduce(
  (acc, item) => acc.storyPoint + item.storyPoint,
);

const Task = () => (
  <TaskLayout>
    <Group title='To Do' icon='to-do' storyPoints={totalTodoStoryPoints}>
      {initialTodoItems.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </Group>
    <Group title='Done' icon='done' storyPoints={totalDoneStoryPoints}>
      {initialDoneItems.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </Group>
  </TaskLayout>
);

export default Task;
