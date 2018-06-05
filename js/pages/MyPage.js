/**
 * Created by Song on 2018/6/5.
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavigationBar from '../components/NavigationBar'
import CustomKeyPage from './CustomKeyPage'

export default class MyPage extends React.Component {
    // 跳转
    gotoCustomKey = () => {
        this.props.navigator.push({
            component: CustomKeyPage
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title="我的"
                />
                <View style={{flexDirection: 'column', alignItems: 'center', marginTop: 30}}>
                    <Text onPress={this.gotoCustomKey}>页面跳转</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});