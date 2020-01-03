import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import actions from '../action';
// import {Table, Row, Rows} from 'react-native-table-component';
import DataStore from '../expand/dao/DataStore';

class PopularPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      needAttend: 0,
      attend: 0,
      avgHours: 0,
      userName: '',
      avatar: '',
    };
    this.dataStore = new DataStore();
  }

  componentDidMount() {
    this.dataStore
      .fetchData(
        `https://rest.wondershare.cn/users/authentication?wsId=${
          this.props.userinfo.wsId
        }&password=${this.props.userinfo.password}`,
        'POST',
      )
      .then(response => {
        if (response) {
          this.setState({
            needAttend: response.data.data.needAttend,
            attend: response.data.data.attend,
            avgHours: response.data.data.avgHours,
            userName: response.data.data.name,
            avatar: response.data.data.avatar,
          });
        }
      });
  }

  render() {
    const {navigation} = this.props;
    const DATA = [
      {
        id: 'needAttend',
        title: '应出勤：' + this.state.needAttend,
      },
      {
        id: 'attend',
        title: '已出勤：' + this.state.attend,
      },
      {
        id: 'avgHours',
        title: '日出勤：' + this.state.avgHours,
      },
    ];
    function Item({title}) {
      return (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            style={{width: 60, height: 60, marginBottom: 20}}
            source={{
              uri: `http://weibo.wondershare.cn//storage/avatars/${
                this.state.avatar
              }`,
            }}
          />
          <Text style={styles.welcome}>{this.state.userName}</Text>
        </View>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToPropos = state => ({
  theme: state.theme.theme,
  userinfo: state.userinfo.userinfo,
  attendancelist: state.attendancelist.attendancelist,
});

const mapDispatchToProps = dispatch => ({
  onThemeChange: theme => dispatch(actions.onThemeChange(theme)),
});

export default connect(
  mapStateToPropos,
  mapDispatchToProps,
)(PopularPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
