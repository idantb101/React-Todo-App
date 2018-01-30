import { combineReducers } from 'redux';

const lists = (state = [], action) => {
  if (action.type === 'ADD_LIST') {
    return state.concat({ name: action.payload, reminders: [] });
  } else if (action.type === 'ADD_REMINDER') {
<<<<<<< HEAD
    // console.log(state[action.meta].reminders);
    // return state[action.meta].reminders.concat(action.payload);
    console.log('buddha', action);
    const x = [
      {
        ...state[action.meta],
        reminders: state[action.meta].reminders.concat(action.payload)
      },
      ...state
    ];
    console.log('x', x);
    return [
      {
        ...state[action.meta],
        reminders: state[action.meta].reminders.concat(action.payload)
      },
      ...state
    ].filter((item, i) => i !== action.meta - 1);
=======
    var newState = state.slice();
    newState[action.meta].reminders = newState[action.meta].reminders.concat(action.payload);
  return newState;
>>>>>>> f2384c7a01a5a99c9299b3c9754635b3dd616b79
  }
  return state;
};

const rootReducer = combineReducers({
  lists
});

export default rootReducer;
