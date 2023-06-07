import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { reducers } from './reducers';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers,
});

export const { createTask, moveCard, changeCardOrder } = taskSlice.actions;

export default taskSlice.reducer;
