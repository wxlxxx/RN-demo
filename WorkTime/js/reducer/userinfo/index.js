import Types from '../../action/types';

const defaultState = {
  userinfo: null,
};

export default function onAction(state = defaultState, action) {
  switch (action.type) {
    case Types.USERINFO_CHANGE:
      return {
        ...state,
        userinfo: action.userinfo,
      };
    default:
      return state;
  }
}
