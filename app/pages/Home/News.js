import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from "react-native"

class Hot extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <View style={ styles.container}>
                <Text>健康资讯</Text>
                <Text>更多</Text>

                <View>
                    <Image></Image>
                    <Text>picc保险</Text>
                </View>

            </View>
            </>
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
 
export default Hot;