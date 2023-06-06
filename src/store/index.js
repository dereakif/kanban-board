import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/Task/slice/taskSlice';

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
