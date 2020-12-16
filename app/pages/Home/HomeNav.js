import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight

} from "react-native"
import { Actions } from "react-native-router-flux"

class HomeNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            menu:[
                { name:"出席管理",url:"attendanceManage" },
                { name:"建议书",url:"proposalManage" },
                { name:"在线投保",url:"onlineInsurance" },
                { name:"简易投保",url:"simpleInsurance" },
                { name:"投保单",url:"insureForm" },
                { name:"电子回执",url:"electronicReceipt" },
                { name:"活动量管理",url:"activityManage" },
                { name:"更多",url:"more"},
            ],
         }
    }

    _menu = (item) =>{
        const jump = item.url

        switch(jump){
            case "attendanceManage":
                Actions.activityManage()
                break
            case "ProposalManage":
                Actions.proposalManage()
                break
            case "onlineInsurance":
                Actions.onlineInsurance()
                break
            case "simpleInsurance":
                Actions.simpleInsurance()
                break
            case "insureForm":
                Actions.insureForm()
                break
            case "electronicReceipt":
                Actions.electronicReceipt()
                break
            case "activityManage":
                Actions.activityManage()
                break
            case "more":
                Actions.Service()
                break
        }

    }

    render() { 
        const { menu } = this.state
        return (
            <View style={ styles.container}>
                {
                    menu.map((item,i )=>{
                        return(
                            <TouchableHighlight  key={i} style={ styles.menu}  onPress={()=>this._menu(item)} underlayColor="#fff">
                                <View style={ styles.item} >
                                    <Image style={ styles.pic} source={require("../../static/images/Online_icon.png")} ></Image>
                                    <Text style={ styles.text} >{item.name}</Text>
                                </View>
                            </TouchableHighlight>
                        )
                    })
                }
            </View>
          );
    }
}

// flex-direction
// flex-wrap
// flex-flow
// justify-content
// align-items
// align-content


const styles =  StyleSheet.create({
    container:{
      display:'flex',
      flexDirection: 'row',
      justifyContent:"space-between",
      alignItems: 'center',
      alignContent:"center",
      borderBottomColor:"#eee",
      height:200,
      flexWrap:"wrap",
      marginBottom:10,
    },
    menu:{
        display:'flex',
        width: "25%",
        height:100,
        // backgroundColor:"#eee",
        alignItems: 'center',
        alignContent:"center",
        justifyContent:"center"
    },
    text:{
        width:100,
        width:"100%"
    },
    pic:{
        width:40,
        height:40,
        marginBottom:5,
    },
    item:{
        alignItems: 'center',
        justifyContent:"center"
    }


})
export default HomeNav;

