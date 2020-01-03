import React from 'react';
import DynamicTabNavigator from '../navigator/DynamicTabNavigator';
import NavigationUtil from '../navigator/NavigationUtil';
import DataStore from '../expand/dao/DataStore';
import {NetworkInfo} from 'react-native-network-info';
import actions from '../action';
import {connect} from 'react-redux';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.dataStore = new DataStore();
  }

  // componentDidMount() {
  //   const month = new Date().getMonth();
  //   NetworkInfo.getIPAddress().then(ip => {
  //     this.dataStore
  //       .fetchData(
  //         `https://rest.wondershare.cn/attend/list?wsId=17032633&date=${month}&ip=${ip}`,
  //       )
  //       .then(response => {
  //         if (response.data.status == 200) {
  //           this.props.onAttendanceListChange(response.data.data.sign_data);
  //         } else {
  //           console.log('api error');
  //         }
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   });
  // }

  render() {
    // 修复动态导航器里的页面无法跳转到外部页面的问题
    NavigationUtil.navigation = this.props.navigation;
    return <DynamicTabNavigator />;
  }
}

const mapDispatchToProps = dispatch => ({
  onThemeChange: theme => dispatch(actions.onThemeChange(theme)),
  onUserInfoChange: userinfo => dispatch(actions.onUserInfoChange(userinfo)),
  onAttendanceListChange: attendancelist =>
    dispatch(actions.onAttendanceListChange(attendancelist)),
});

export default connect(
  null,
  mapDispatchToProps,
)(HomePage);
