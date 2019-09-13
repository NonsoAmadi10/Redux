import notesReducer from "./notesReducers";
import visibilityFilter from './visibilityFilter';
import { combineReducers } from 'redux';

const reducers =combineReducers({
 notes: notesReducer,
 visibilityFilter,
})

export default reducers;