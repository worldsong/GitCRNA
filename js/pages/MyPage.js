/**
 * Created by Song on 2018/6/5.
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavigationBar from '../components/NavigationBar'

export default class MyPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title="我的"
                />
                <Text>RN开发组件模板</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});