/**
 * Created by Song on 2018/5/29.
 */
import React from 'react';
import {StyleSheet, Text, View, StatusBar, Platform, TouchableOpacity,Image } from 'react-native';

//会包含状态栏，还有顶部导航栏
export default class NavigationBar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.statusBar}>
                    <StatusBar
                        hidden = {true}
                        backgroundColor="blue"
                        barStyle="light-content"
                    />
                </View>
                {/*顶部导航栏*/}
                <View style={styles.navBar}>
                    <View style={styles.navBtn}></View>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>热门</Text>
                    </View>
                    <View style={styles.rightBtn}>
                        <TouchableOpacity
                            activeOpacity={0.7}>
                            <Image source={require('../../res/images/ic_search_white_48pt.png')} style={styles.navBtn}/>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.7}>
                            <Image source={require('../../res/images/ic_more_vert_white_48pt.png')} style={styles.navBtn}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#63B8FF',
        padding:5
    },
    statusBar:{
        height:Platform.OS === 'ios' ? 20 : 0
    },
    navBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    titleWrapper:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        left:40,
        right:40,
        bottom:0
    },
    title:{
        fontSize:16,
        color:'#FFF'
    },
    navBtn:{
        width:24,
        height:24
    },
    rightBtn:{
        flexDirection:'row',
        alignItems:'center',
        paddingRight:8
    }
});