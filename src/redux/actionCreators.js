export function addList(list) {
  return { type: 'ADD_LIST', payload: list };
}

export function addReminder(reminder, item) {
  return { type: 'ADD_REMINDER', payload: reminder, meta: item };
}
