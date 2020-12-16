import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { View,Text } from "react-native"
import { Actions } from "react-native-router-flux"

@inject(["homeStore"])
@observer


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        
    }

    _press = ()=>{
        this.props.homeStore.plus("100")
    }

    render() { 
        const { num } = this.props.homeStore;
        return ( 
            <View>
                <Text >我的 { num }</Text>
                <Text onPress={()=>{
                    this._press()
                }} >change</Text>
                <Text onPress={()=>{Actions.login()}}>登录</Text>
            
            
            </View>

         );
    }
}
 
export default HomePage;