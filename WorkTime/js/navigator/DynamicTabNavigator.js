import React from 'react';
import PopularPage from '../page/PopularPage';
import TrendingPage from '../page/TrendingPage';
import FavoritePage from '../page/FavoritePage';
import MyPage from '../page/MyPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {connect} from 'react-redux';

const TABS = {
  //配置页面路由
  PopularPage: {
    screen: PopularPage,
    navigationOptions: {
      tabBarLabel: '最热',
      tabBarIcon: ({tintColor, focused}) => (
        <MaterialIcons name={'whatshot'} size={26} style={{color: tintColor}} />
      ),
    },
  },
  TrendingPage: {
    screen: TrendingPage,
    navigationOptions: {
      tabBarLabel: '趋势',
      tabBarIcon: ({tintColor, focused}) => (
        <Ionicons
          name={'md-trending-up'}
          size={26}
          style={{color: tintColor}}
        />
      ),
    },
  },
  FavoritePage: {
    screen: FavoritePage,
    navigationOptions: {
      tabBarLabel: '收藏',
      tabBarIcon: ({tintColor, focused}) => (
        <MaterialIcons name={'favorite'} size={26} style={{color: tintColor}} />
      ),
    },
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, focused}) => (
        <Entypo name={'user'} size={26} style={{color: tintColor}} />
      ),
    },
  },
};

class DynamicTabNavigator extends React.Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }
  _tabNavigator() {
    if (this.Tabs) {
      return this.Tabs;
    } else {
      const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
      const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage};
      PopularPage.navigationOptions.tabBarLabel = '最热'; //动态修改
      this.Tabs = createAppContainer(
        createBottomTabNavigator(tabs, {
          tabBarComponent: props => {
            return <TabBarComponent theme={this.props.theme} {...props} />;
          },
        }),
      );
      return this.Tabs;
    }
  }
  render() {
    const TabNavigator = this._tabNavigator();
    return <TabNavigator />;
  }
}

class TabBarComponent extends React.Component {
  render() {
    return <BottomTabBar {...this.props} activeTintColor={this.props.theme} />;
  }
}

const mapStateToPropos = state => ({
  theme: state.theme.theme,
});

export default connect(
  mapStateToPropos,
  null,
)(DynamicTabNavigator);
