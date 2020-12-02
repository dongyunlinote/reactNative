import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native'
import { Actions   } from 'react-native-router-flux'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data:{},
    }
  }

  componentDidMount(){
    // 接收页面传递数据
    const data = this.props.data || "null";
    // console.log("接收页面传递数据",data)
    this.setState({
      data:data,
    }) 
  }

  _shuaxin=()=>{
    alert("ssss")
  }

  render() { 
    const { name, age } = this.state.data

    return ( 
      <View style={styles.horizontal}>
        <Text onPress={()=> this._shuaxin()} >{name}-{age}</Text>
        <Text onPress={()=> Actions.pop() }>返回</Text>
      </View>
     );
  }
}

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: "row",
    justifyContent:'space-evenly',
    padding: 10,
  }
});


export default App;