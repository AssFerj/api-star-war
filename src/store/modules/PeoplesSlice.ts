import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';
import PeopleType from '../../types/PeopleType';
import { getPeoples } from '../../services/api';

const adapter = createEntityAdapter<PeopleType>({
  selectId: item => item.name
});

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.people);

export const reqPeople = createAsyncThunk('people/getAllPeople', async () => {
  const response = await getPeoples();
  return response.results;
});

const peoplesSlice = createSlice({
  name: 'peoples',
  initialState: adapter.getInitialState(),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(reqPeople.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  }
});

export default peoplesSlice.reducer;
