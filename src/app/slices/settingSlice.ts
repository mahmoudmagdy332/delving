// languageSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { settingType } from '../utils/types/types';

const initialState:settingType={ 
    setting:null,
    loading:false,
    categories:null,
    instructors:null
}

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    createSetting: (state, action) => {
      console.log('action.payload',action.payload)
      state.setting = action.payload.settings;
      state.categories = action.payload.categories;
      state.instructors = action.payload.instructors;
    },
    changeLoading: (state, action) => {
      console.log('action.payload',action.payload)
      state.loading = action.payload;
    }
  },
});

export const {
  createSetting,changeLoading,
} = settingSlice.actions;



export default settingSlice.reducer;

export const useSettingSliceSelector = useSelector.withTypes<RootState>()

