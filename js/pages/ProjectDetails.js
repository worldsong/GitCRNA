/**
 * Created by Song on 2018/6/8.
 */
import React from 'react';
import {StyleSheet, Text, View, WebView} from 'react-native';

export default class ProjectDetails extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <WebView
                    startInLoadingState={true}
                    source={{uri:'http://songfens.club'}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});