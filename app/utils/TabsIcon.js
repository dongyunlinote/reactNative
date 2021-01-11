import React, { Component } from 'react';

import { StyleSheet, Image,Text } from 'react-native';


class TabIconHome extends Component {
  render() { 
    const { focused = false, title} = this.props;
    let img;
    switch(title){
      case "首页":
        img = focused ? require('../static/images/home_focusedIcon.png') : require('../static/images/home_unfocusedIcon.png')
      break
      case "产品":
        img = focused ? require('../static/images/product_focusedIcon.png') : require('../static/images/product_unfocusedIcon.png')
      break
      case "服务":
        img = focused ? require('../static/images/sercises_focusedIcon.png') : require('../static/images/sercises_unfocusedIcon.png')
      break
      case "我的":
        img = focused ? require('../static/images/mine_focusedIcon.png') : require('../static/images/mine_unfocusedIcon.png')
      break
    }
    return (
      <Image style={styles.iconImage} source={ img } /> 
    );
  }
}
 
// const TabIconHome = ({focused,title})=>(
//   // <Image style={styles.iconImage} source={require('../static/images/login_background.png')} />
//   <Text>{focused}-{title}</Text>
// )

export default TabIconHome
 

 
const styles = StyleSheet.create({
  iconImage: {
    width: 26,
    height: 26
  }
})
 
