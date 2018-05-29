import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import HomePage from "./js/pages/HomePage";

export default class GitCRNA extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HomePage/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

AppRegistry.registerComponent('GitCRNA', () => GitCRNA);
