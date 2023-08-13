import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRandomGreeting = createAsyncThunk('greeting/fetchRandomGreeting', async () => {
  const response = await axios.get('http://localhost:3000/api/greetings/random');
  return response.data.greeting;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: { randomGreeting: '' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchRandomGreeting.fulfilled,
      (state, action) => ({
        ...state,
        randomGreeting: action.payload,
      }),
    );
  },
});

export default greetingSlice.reducer;
