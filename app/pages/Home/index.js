import React, { Component } from 'react';
import { View,Text ,StyleSheet,ScrollView} from "react-native"

import Focus from "./Focus" //轮播图
import HomeNav from "./HomeNav"  //九宫格 导航
import Hot from "./Hot" //热销推荐
import News from "./News" //健康资讯

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ScrollView style={ styles.container} >
                <Focus key="focus"/>
                <HomeNav key="homeNav1" />
                <Hot key="hot"/>
                <News key="news" />
            </ScrollView>
         );
    }
}
 
const styles = StyleSheet.create({
    container:{
    }
})


export default HomePage;