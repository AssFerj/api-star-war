import { combineReducers } from '@reduxjs/toolkit';

import peoplesSlice from './PeoplesSlice';

export default combineReducers({ people: peoplesSlice });
