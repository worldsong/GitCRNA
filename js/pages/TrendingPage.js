/**
 * Created by Song on 2018/6/8.
 */
import React from 'react';
import {StyleSheet, Text, View, FlatList, RefreshControl, TouchableOpacity, Image, AsyncStorage} from 'react-native';
import NavigationBar from '../components/NavigationBar'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import GitHubTrending from 'GitHubTrending';
import TrendingProjectRow from "../components/TrendingProjectRow";
import ProjectDetails from './ProjectDetails';


var popular_def_lans = require('../../res/data/popular_def_lans.json');

//包含两块内容，状态栏（静），滚动视图（动）
export default class PopularPage extends React.Component {
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
                // alert(value)
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
    componentDidMount = ()=>{
        //读取数据
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
    //加载数据
    loadData = ()=> {
        this.setState({isLoading:true});
        //请求网络
        new GitHubTrending().fetchTrending(`https://github.com/trending/${this.props.tabLabel}?since=daily`)
            .then(json => {
                // console.log(json)
                //更新dataSource
                this.setState({
                    dataSource: json,
                    isLoading: false //隐藏进度条
                })
            }).catch((error) => {
            console.log(error);
        }).done();

    }
    componentDidMount = ()=> {
        this.loadData();
    }
    handleRefresh=()=>{
        this.loadData();
    }

    //项目被选中，跳转到详情页
    handleProjectSelect = (obj)=>{
        //console.log(obj);
        this.props.navigator.push({
            component:ProjectDetails,
            params:{title:obj.fullName,url:`https://github.com${obj.url}`}
        });
    }
    renderRow = ({item}) => <TrendingProjectRow item={item} onSelect={()=>this.handleProjectSelect(item)} />

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
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});