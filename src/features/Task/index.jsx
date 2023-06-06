import { useSelector } from 'react-redux';
import Card from './components/Card';
import Group from './components/Group';
import TaskLayout from './layout';

const Task = () => {
  const tasks = useSelector((state) => state.tasks);

  const totalTodoStoryPoints = tasks.todo.reduce((acc, item) => acc + item.storyPoint, 0);
  const totalDoneStoryPoints = tasks.done.reduce((acc, item) => acc + item.storyPoint, 0);

  return (
    <TaskLayout>
      <Group title='To Do' groupCode='TODO' icon='to-do' storyPoints={totalTodoStoryPoints}>
        {tasks.todo.map((item) => (
          <Card key={item.id} groupCode='TODO' {...item} />
        ))}
      </Group>
      <Group title='Done' groupCode='DONE' icon='done' storyPoints={totalDoneStoryPoints}>
        {tasks.done.map((item) => (
          <Card key={item.id} groupCode='DONE' {...item} />
        ))}
      </Group>
    </TaskLayout>
  );
};

export default Task;
