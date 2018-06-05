import React, {Component} from 'react';
import {
    Navigator
} from 'react-native-deprecated-custom-components';
import HomePage from './HomePage';

export default class Root extends Component {
    renderScene = (route, navigator) =>{
        // 路由机制，接受路由页面/组件，通过给Navigator的 route.params来进行数据传递
        let Target = route.component;
        return <Target {...route.params} navigator={navigator} />
    }
    render () {
        // Navigator是个导航器，通过它可以实现在不同页面间的跳转
        // Navigator会建立一个路由栈，运行时的页面栈
        // initialRoute 初始化路由，传入组件的名字
        return <Navigator
            initialRoute={{component: HomePage}}
            renderScene={(route, navigator)=>this.renderScene(route, navigator)}/>
    }
}