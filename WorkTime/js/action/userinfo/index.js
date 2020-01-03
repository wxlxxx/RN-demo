import Types from '../types';

export function onUserInfoChange(userinfo) {
  return {type: Types.USERINFO_CHANGE, userinfo: userinfo};
}
