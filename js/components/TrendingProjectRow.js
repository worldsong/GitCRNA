/**
 * Created by Song on 2018/6/8.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class TrendingProjectRow extends React.Component {
    static defaultProps = {
        item: {}
    }

    renderContributors(data){
        var views = [];
        for(var i=0; i < data.length; i++){
            views.push(<Image style={{width:22,height:22}} source={{uri:data[i]}}/>);
            if(i > 1){
                break;
            }
        }
        return views;
    }
    render() {
        var item = this.props.item
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={this.props.onSelect}
                >
                    <View style={styles.container}>
                        <Text style={styles.title}>{item.fullName}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        <View style={styles.bottom}>
                            <View style={styles.bottomTextWrapper}>
                                <Text>作者：</Text>
                                {this.renderContributors(item.contributors)}
                            </View>
                            <View style={styles.bottomTextWrapper}>
                                <Text>星：</Text>
                                <Text>{item.meta}</Text>
                            </View>
                            <Image source={require("../../res/images/ic_unstar_transparent.png")} style={{width:22,height:22}}/>

                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFF',
        flexDirection:'column',
        padding:10,
        marginLeft:5,
        marginRight:5,
        marginVertical:5,
        borderColor:'#dddddd',
        borderWidth:0.5,
        borderRadius:2,
        shadowColor:'gray',
        shadowOffset:{width:0.5,height:0.5},
        shadowRadius:1, //阴影半径
        shadowOpacity:0.4,
        elevation:2 //Android 投影
    },
    title:{
        fontSize:16,
        marginBottom:2,
        color:'#212121'
    },
    description:{
        fontSize:14,
        marginBottom:2,
        color:'#757575'
    },
    bottom:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    bottomTextWrapper:{
        flexDirection:'row',
        alignItems:'center'
    }

});