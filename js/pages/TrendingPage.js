/**
 * Created by Song on 2018/6/8.
 */
import React from 'react';
import {StyleSheet, Text, View, FlatList, RefreshControl, TouchableOpacity, Image, AsyncStorage} from 'react-native';
import NavigationBar from '../components/NavigationBar'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import GitHubTrending from 'GitHubTrending';

var popular_def_lans = require('../../res/data/popular_def_lans.json');

export default class TrendingPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            languages: []
        }
        popular_def_lans.forEach(item => {
            if(item.checked) this.state.languages.push(item);
        })
    }

    //加载用户设置的语言分类数据
    loadLanguages = ()=>{
        AsyncStorage.getItem('custom_key')
            .then((value)=>{
                if(value != null){
                    this.setState({languages:JSON.parse(value)});
                }
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title="趋势"
                />
                <ScrollableTabView
                    tabBarBackgroundColor="#63B8FF"
                    tabBarActiveTextColor="#FFF"
                    tabBarInactiveTextColor="#F5FFFA"
                    tabBarUnderlineStyle={{backgroundColor:"#E7E7E7",height:2}}>
                    {
                        this.state.languages.map((item, i) => {
                            return (item.checked) ? (<TrendingTab {...this.props} key={`tab${i}`} tabLabel={item.name} />) : null
                        })
                    }
                </ScrollableTabView>
            </View>
        );
    }
    componentDidMount = ()=> {
        // 读取数据
        this.loadLanguages();
    }
}

class TrendingTab extends React.Component {
    static defaultProps = {
        tabLabel: 'JavaScript'
    }
    constructor(props){
        super(props);
        this.state= {
            dataSource: [],
            isLoading: true
        }
    }
    _keyExtractor = (item, index) => ('' + item.id + index );
    // 加载数据
    loadData = () => {
        this.setState({isLoading: true});
        // 请求网络
        new GitHubTrending().fetchTrending(`https://github.com/trending/${this.props.tabLabel}?since=daily`)
            .then(json => {
                this.setState({
                    dataSource:json,
                    isLoading: false // 隐藏进度条
                })
            }).catch((error) => {
            console.log(error)
        }).done();
    }
    handleRefresh = () => {
        this.loadData();
    }
    renderRow =({item}) => <Text>{item.fullName}</Text>
    render(){
        return (
            <FlatList
                data={this.state.dataSource}
                keyExtractor={this._keyExtractor}
                renderItem={this.renderRow}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isLoading}
                        onRefresh={this.handleRefresh}
                        tintColor="#63B8FF"
                        title="正在加载..."
                        titleColor="#63B8FF"
                        colors={['red', 'blue','yellow']}
                        progressBackgroundColor="green"
                    />
                }
            />
        )
    }
    componentDidMount = () => {
        this.loadData();
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});