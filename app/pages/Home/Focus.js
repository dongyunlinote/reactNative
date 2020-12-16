import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View  } from "react-native"

export default class Focus extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={ styles.container} >
                <Text>轮播图</Text>
            </View>
            
         );
    }
}

const styles = StyleSheet.create({
    container:{
        height:200,
        borderWidth:1,
        marginBottom:10,
    } 
})
 

