import React, { Component } from 'react';
import {
    View,Text,StyleSheet,Button,Image,ImageBackground,TextInput
} from "react-native"

import CheckBox from "../components/CheckBox"
import { Actions } from "react-native-router-flux"

import { inject, observer } from 'mobx-react';
@inject("homeStore")
@observer

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:"", 
            passWord:"",
            loginAuto:false, //自动登录
            remberPass:false, //记住密码
            checkBox:false,
            checkBoxPass:false,
          }
    }

    login=()=>{
        const { userName,passWord} = this.state
        console.log(userName,passWord)
        Actions.tabbar()
    }

    changeName(text){
        this.setState({
            userName:text
        })
    }

    changePass(text){
        this.setState({
            passWord:text
        })
    }

    // 自动登录
    checkLogin=()=>{
        this.setState({
            checkBox: !this.state.checkBox
        })
    }

    // 记住密码
    checkPass=()=>{
        this.setState({
            checkBoxPass: !this.state.checkBoxPass
        })
    }

    _press =()=>{
        this.props.homeStore.plus()
    }

    render() { 
        const { userName,passWord,placeholder,checkBox,checkBoxPass } = this.state
        const { num } = this.props.homeStore;
        return ( 
            <View>
                <ImageBackground
                    style={styles.stretch}
                    source={require('../../static/images/login_background.png')}
                >
                    <Text style={styles.title}>(XX环境)</Text>
                </ImageBackground>


                <Text >我的 { num }</Text>
                <Text onPress={()=>{ this._press() }} >change</Text>


                <Text>账号</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder = {"请输入账号"}
                    onChangeText={(text) => {this.changeName(text)}}
                    value={userName}>
                </TextInput>


                <Text>密码</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    secureTextEntry={true}
                    placeholder="密码" 
                    keyboardType="default"
                    onChangeText={(text) => {this.changePass(text)}}
                    
                    value={passWord}>
                </TextInput>
                
                <CheckBox title="自动登录" checkBox={checkBox} check={this.checkLogin}></CheckBox>
                <CheckBox title="记住密码" checkBox={checkBoxPass} check={this.checkPass}></CheckBox>

                <Button 
                    onPress={this.login}
                    title="登录"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                >登录</Button>

                <Text onPress={()=>{ Actions.forgetPassword()}} >  忘记密码</Text>

            </View>
         );
    }
}
const styles = StyleSheet.create({
    stretch:{
        width:'100%',
        height:300,
        display:"flex",
        alignItems: 'center',
        justifyContent:'flex-end'
    },
    title:{
        fontSize:28,
        color:"#fff",
        marginBottom:80,
    },
    tinyLogo:{
        width:20,
        height:20,
    }
})
 
export default Login;