import { combineReducers } from '@reduxjs/toolkit';
import circlesServiceReducer from './slices';

const rootReducer = combineReducers({
    circlesService: circlesServiceReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
