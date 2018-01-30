import { combineReducers } from 'redux';

const lists = (state = [], action) => {
  if (action.type === 'ADD_LIST') {
    return state.concat({ name: action.payload, reminders: [] });
  } else if (action.type === 'ADD_REMINDER') {
    var newState = state.slice();
    newState[action.meta].reminders = newState[action.meta].reminders.concat(action.payload);
  return newState;
  }
  return state;
};

const rootReducer = combineReducers({
  lists
});

export default rootReducer;
