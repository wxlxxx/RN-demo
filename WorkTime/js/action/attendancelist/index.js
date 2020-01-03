import Types from '../types';

export function onAttendanceListChange(attendancelist) {
  return {type: Types.ATTENDANCELIST_CHANGE, attendancelist: attendancelist};
}
