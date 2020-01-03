import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {connect} from 'react-redux';
import actions from '../action';

class MyPage extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>MyPage</Text>
        <Button
          title={'修改主题'}
          onPress={() => this.props.onThemeChange('#8a3')}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onThemeChange: theme => dispatch(actions.onThemeChange(theme)),
});

export default connect(
  null,
  mapDispatchToProps,
)(MyPage);

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
});
