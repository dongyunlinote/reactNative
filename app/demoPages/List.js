import React, { Component } from 'react';
import { FlatList, Text,SafeAreaView, StyleSheet,View, TouchableHighlight,Image,Alert } from 'react-native';
import { Actions } from "react-native-router-flux"

export default class Home  extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data:[
        {key: 'Devin'},
        {key: 'Dan'},
        {key: 'Dominic'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
        {key: 'Devin1'},
        {key: 'Dan1'},
        {key: 'Dominic1'},
        {key: 'Jackson1'},
        {key: 'James1'},
        {key: 'Jillian1'},
        {key: 'Jimmy1'},
        {key: 'Julie1'},
        {key: 'Devin2'},
        {key: 'Dan2'},
        {key: 'Dominic2'},
        {key: 'Jackson2'},
        {key: 'James2'},
        {key: 'Joel2'},
        {key: 'John2'},
        {key: 'Jillian2'},
        {key: 'Jimmy2'},
        {key: 'Julie2'},
      ]
     }
  }
 
  _press = (item)=>{
    // 跳转 传值
    Actions.detail({data: {"name":item,"age":"18"}})
  }

  _img = (item)=>{
    Alert.alert('你点击了按钮！',item);
  }

  render() { 

    const renderItem = ({item}) => (
      <View>
        <TouchableHighlight  onPress={()=>this._press(item.key)} underlayColor="#eee">
          <View style={ styles.item}>
            <Image style={styles.pic} source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
            <Text style={styles.text} >{item.key}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )

    return ( 
        <FlatList
          data={ this.state.data }
          renderItem = { renderItem }
          ></FlatList>
     );
  }
}
 
const styles =  StyleSheet.create({
  container: {
    flex: 1,
    },
    item: {
      padding: 10,
      
      display:'flex',
      flex: 1,
      flexDirection: 'row',
      justifyContent:"space-between",
      alignItems: 'center',
      borderBottomColor:"#eee",
      borderWidth:1,
      },
    pic: {
      width: 50,
      height: 50,

    },
    text:{
      width:200,
      textAlign:"right",
      fontSize: 20,
    }
})


