/**
 * Created by Song on 2018/6/5.
 */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import NavigationBar from '../components/NavigationBar'

export default class CustomKeyPage extends React.Component {
    doBack = () => {
        this.props.navigator.pop();
    }
    doSave = () =>{
        alert('保存');
    }
    getNavRightBtn = ()=>{
        return <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={this.doSave}>
                <View style={{marginRight:10}}>
                    <Text style={{fontSize:16,color:'#FFF'}}>保存</Text>
                </View>
            </TouchableOpacity>
        </View>;
    }
    getNavLeftBtn = ()=>{
        return <View style={{flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={this.doBack}>
                <Image source={require('../../res/images/ic_arrow_back_white_36pt.png')} style={{width:24,height:24}}/>
            </TouchableOpacity>
        </View>;
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title="自定义分类"
                    rightButton={this.getNavRightBtn()}
                    leftButton={this.getNavLeftBtn()}
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