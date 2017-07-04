export default function (state = { num: 0 }, action) {
  const { payload, type } = action;

  switch (type) {
    case 'increment':
      const newState = {};
      newState.num = payload;
      return newState;
    default:
      return state;
  }
}
