import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';
import md5 from 'react-native-md5';
import {connect} from 'react-redux';
import actions from '../action';
import DataStore from '../expand/dao/DataStore';

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.dataDtore = new DataStore();
  }

  componentDidMount() {
    this.dataDtore
      .fetchLocalData('/userinfo')
      .then(localdata => {
        this.props.onUserInfoChange(localdata.data);
        NavigationUtil.resetToHomePage(this.props);
      })
      .catch(error => {
        error && console.log(error.toString());
      });
  }

  submit() {
    const userInfo = {
      wsId: this.username,
      password: md5.hex_md5(this.password),
    };
    this.props.onUserInfoChange(userInfo);
    this.dataDtore.saveData('/userinfo', userInfo);
    NavigationUtil.resetToHomePage(this.props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <TextInput
          style={styles.input}
          placeholder={'账号'}
          onChangeText={text => {
            this.username = text;
          }}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder={'密码'}
          onChangeText={text => {
            this.password = text;
          }}
        />
        <View style={styles.button}>
          <Button
            title={'提交'}
            color="#fff"
            onPress={() => {
              this.submit();
            }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToPropos = state => ({
  theme: state.theme.theme,
  userinfo: state.userinfo.userinfo,
});

const mapDispatchToProps = dispatch => ({
  onThemeChange: theme => dispatch(actions.onThemeChange(theme)),
  onUserInfoChange: userinfo => dispatch(actions.onUserInfoChange(userinfo)),
});

export default connect(
  mapStateToPropos,
  mapDispatchToProps,
)(WelcomePage);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#62cb31',
    width: '100%',
    paddingTop: 6,
    paddingBottom: 6,
    marginTop: 30,
  },
});
