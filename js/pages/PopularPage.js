/**
 * Created by Song on 2018/5/29.
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavigationBar from '../components/NavigationBar'

//包含两块内容，状态栏（静），滚动视图（动）
export default class PopularPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar />
                <View style={{backgroundColor:'red',flex:1}}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});