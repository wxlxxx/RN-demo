import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TextInput, Alert, Button } from 'react-native'


class Greeting extends Component {
	render() {
		return (
			<View style={{alignItems: 'center', marginTop: 50}}>
                <Text>Hello {this.props.name}</Text>
            </View>
        )
	}
}

class Blink extends Component {
    state = { isShowingText: true }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                isShowingText: !this.state.isShowingText
            })
        }, 1000)
    }
    render () {
        return !this.state.isShowingText ? null : (
            <Text>{this.props.text}</Text>
        )
    }
}

export default class HelloWorldApp extends Component {
    state = {
        text: ''
    }

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={styles.bigBlue}>Hello, world!</Text>
                <Image source={pic} style={{width: 193, height: 110}} />
                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />
                <Blink text="I love to blink"/>
                <TextInput
                 style={{padding: 20}}
                 placeholder="Type here to translate!"
                 onChangeText={(text) => this.setState({text})}
                 value={this.state.text} />
                 <Text style={{padding: 10, fontSize: 42}}>
                  {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
                <Button
                 onPress={this._onPressButton}
                 title="press me" />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    }
})