import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerUser = createAsyncThunk('auth/registr', async user => {
  try {
    const { data } = await axios.post('/user/signup', user);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const loginUser = createAsyncThunk('auth/login', async user => {
  try {
    const { data } = await axios.post('user/login', user);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const logoutUser = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const getCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);

  try {
    const { data } = await axios.get('users/current');
    return data;
  } catch (error) {
    console.log(error);
  }
});

const operations = {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
};

export default operations;
