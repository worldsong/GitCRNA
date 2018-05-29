/**
 * Created by Song on 2018/5/29.
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class PopularPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{backgroundColor: 'pink', flex:1}}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});