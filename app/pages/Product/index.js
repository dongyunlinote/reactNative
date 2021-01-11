import React, { Component } from 'react';
import { View,Text,ScrollView } from "react-native"
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import 'whatwg-fetch';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    // renderTabBar = (itemData) => {
    //     return (
    //         <View style={{
    //             width: 400,
    //             height: 200,
    //             borderWidth:1,
    //         }}>
    //             <ScrollView style={{ width: width,  height: 200, }} 
    //             horizontal={true} showsHorizontalScrollIndicator={false} >
    //                 {/* {this.scrollableTabViewItem(itemData)} */}
    //             </ScrollView>
    //         </View>
    //     )
    // };

    render() { 
        return (
            <Text>ssss</Text>
        //     <ScrollableTabView
        //     style={{ marginTop: 20, borderBottom:0, }}
        //     locked={true}
        //     initialPage={0}
        //     tabBarUnderlineStyle={{backgroundColor:'red'}}
        //     tabBarBackgroundColor='#FFFFFF'
        //     tabBarActiveTextColor='red'
        //     tabBarInactiveTextColor='#555'
        //     tabBarTextStyle={{fontSize: 18}}
        //     renderTabBar={() => <ScrollableTabBar />}

        //     // renderTabBar={() => {
        //     //     return this.renderTabBar(itemData)
        //     // }}


        //     onChangeTab={(obj) => { console.log( obj.id) }
        //     }
        //   >
        //     <Text tabLabel='全部'>My</Text>
        //     <Text tabLabel='重疾险'>favorite</Text>
        //     <Text tabLabel='医疗险'>project</Text>
        //     <Text tabLabel='护理险'>project</Text>
        //     <Text tabLabel='意外险'>project</Text>
        //     <Text tabLabel='税优'>project</Text>
        //     <Text tabLabel='健康管理服务'>project</Text>
        //   </ScrollableTabView>
        )
    }
}
 
export default HomePage;