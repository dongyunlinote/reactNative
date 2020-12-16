import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from "react-native"

export default class Hot extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <View style={styles.container}>
                    <Text>热销推荐</Text>
                    <Text>更多</Text>
                </View>
                <View>

                </View>
            </>
         );
    }
}
 
 const styles =  StyleSheet.create({
    container:{
        height:200,
        borderWidth:1,
        marginBottom:10,
    } 
 })