// languageSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {  UserState } from '../type';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const initialState: UserState = {
  user: null,
  isPopup:false,
};


const UserSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
 
    changePopup: (state, action) => {
      state.isPopup = action.payload;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("student", JSON.stringify(action.payload));
    },
  },
});

export const {
  changePopup,updateUser
} = UserSlice.actions;



export default UserSlice.reducer;

export const useUserSelector = useSelector.withTypes<RootState>()

