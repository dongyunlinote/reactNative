import React, { Component } from 'react';
import { FlatList, Text,SafeAreaView, StyleSheet,View, TouchableHighlight,Image,Alert } from 'react-native';
import { Actions } from "react-native-router-flux"

export default class Home  extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data:[
        { key: '1',name:"列表-详情",page:"List",remarks:"列表到详情页demo"},
        { key: '2',name:"动画",page:"Animated",remarks:"动画"},
        
      ]
     }
  }

  _press = (item)=>{
    switch(item){
      case "List":  
        Actions.list(); break;
      case "Animated":  
        Actions.animatedDemo(); break;

    }


   
  }

  render() { 
    const renderItem = ({item}) => (
      <View style={styles.item} >
        <Text style={styles.text} onPress={() => this._press(item.page)} >{item.key} {item.name}</Text>
      </View>
    )

    const data = this.state.data
    return ( 
        <FlatList
          data={data }
          renderItem = { renderItem }
          ></FlatList>
     );
  }
}
 
const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'yellow'
    },
    item: {
      padding: 10,
      fontSize: 18,
      flex: 1,
      flexDirection: 'row',
      justifyContent:"space-between",
      display:'flex',
      alignItems: 'stretch',
      borderBottomColor:"#eee",
      borderWidth:1,
      },
   
    text:{
        fontSize:20,
        width:"100%"
    }
})


