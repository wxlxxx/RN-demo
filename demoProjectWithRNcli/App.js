import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'


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
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Hello, world!</Text>
                <Image source={pic} style={{width: 193, height: 110}} />
                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />
                <Blink text="I love to blink"/>
            </View>
        )
    }
}