import Types from '../../action/types';

const defaultState = {
  attendancelist: [],
};

export default function onAction(state = defaultState, action) {
  switch (action.type) {
    case Types.ATTENDANCELIST_CHANGE:
      return {
        ...state,
        attendancelist: action.attendancelist,
      };
    default:
      return state;
  }
}
