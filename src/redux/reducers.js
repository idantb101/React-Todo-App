import { combineReducers } from 'redux';

const lists = (state = [], action) => {
  if (action.type === 'ADD_LIST') {
    return state.concat({ name: action.payload, reminders: [] });
  } else if (action.type === 'ADD_REMINDER') {
    // console.log(state[action.meta].reminders);
    // return state[action.meta].reminders.concat(action.payload);
    return [
      {
        ...state[action.meta],
        reminders: state[action.meta].reminders.concat(action.payload)
      },
      ...state
    ].filter((item, i) => i !== 1);
  }
  return state;
};

const rootReducer = combineReducers({
  lists
});

export default rootReducer;
