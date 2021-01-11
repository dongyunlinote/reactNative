import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { View,Text,Button,ImageBackground,StyleSheet,Image,TouchableHighlight} from "react-native"
import { Actions } from "react-native-router-flux"
@inject("homeStore","userStore")
@observer

class MyPage extends Component {
    state = { 
        my:[
            { title:"个人管理",url:"personManage",icon:"http://localhost:8081/app/static/images/my@2x.png"},
            { title:"团队管理",url:"teamManage",icon:"http://localhost:8081/app/static/images/team@2x.png"},
            { title:"客户管理",url:"customeManage",icon:"http://localhost:8081/app/static/images/person@2x.png"},
            { title:"互动获客",url:"interactiveCustomers",icon:"http://localhost:8081/app/static/images/person@2x.png"},
        ],
        other:[
            {title:"投保单",url:"insureForm",icon:"http://localhost:8081/app/static/images/list@2x.png"},
            {title:"佣金查询",url:"commissionInquiry",icon:"http://localhost:8081/app/static/images/commission@2x.png"},
            {title:"我的学习",url:"myStusy",icon:"http://localhost:8081/app/static/images/commission@2x.png"},
        ]
    }

    componentDidMount(){
        
    }

    _press = ()=>{
        this.props.homeStore.plus("100")
    }

    toUrl =()=>{

    }

    render() { 
        const { num } = this.props.homeStore;
        const { userName } =  this.props.userStore
        const { my,other } =  this.state

        const Item =({title,icon})=>{
            return(
                <TouchableHighlight  onPress={()=>this.toUrl()} activeOpacity={0.6}  underlayColor="#fff">
                    <View style={styles.item} >
                        <View style={{ display:"flex", flexDirection:"row", justifyContent:"flex-start",alignItems:"center",paddingLeft:10, }}>
                            <Image style={{ width:30,height:30,}} source={{uri:icon}}/>
                            <Text style={styles.itemText}>{title}</Text>
                        </View>
                        <Image style={styles.rightRow}  source={require('../../static/images/rightRow.png')} ></Image>
                    </View>
                </TouchableHighlight>
            )
        }

        return ( 
            <View style={styles.body}>
                <View style={{ backgroundColor:"#fff"}}>
                    <ImageBackground
                        style={styles.stretch}
                        source={require('../../static/images/mineBackImage1.png')}
                    >
                        <Image style={styles.stretch2}  source={require('../../static/images/head1.png')} ></Image>
                        <View>
                            <Text style={{fontSize:18,marginBottom:5, color:"#fff" }}>{userName}</Text>
                            <Text style={{fontSize:18,color:"#fff"}}>工号：{num}</Text>
                        </View>
                    </ImageBackground>
                </View>
                
                {/* <Text onPress={()=>{ this._press() }} >change</Text> */}
                <View style={{ backgroundColor:"#fff",marginBottom:10, }}>
                    {
                        my.map((item,i )=>{
                            return(
                                <Item key={i}  title={item.title} icon={item.icon}></Item>
                            )
                        })
                    }
                </View>
                <View style={{ backgroundColor:"#fff" }}>
                {
                    other.map((item,i )=>{
                        return(
                            <Item key={i}  title={item.title} icon={item.icon}></Item>
                        )
                    })
                }
                </View>

                
                <Button style={styles.button} onPress={()=>{Actions.login()} } title="退出" color="#841584" />
                
            </View>
         );
    }
}
 

const styles= StyleSheet.create({
    body:{
        backgroundColor:"#eee",
        height:"100%"
    },
    stretch:{
        height:160,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        margin:10,
        paddingLeft:20,
    },
    stretch1:{
        height:80,
        width:80,
        borderRadius:100,
        borderWidth:1,
        overflow:'hidden'
    },
    stretch2:{
        height:70,
        width:70,
        borderRadius:100,
        overflow:'hidden',
        marginRight:10,
    },
    item:{
        height:50,
        lineHeight:50,
        borderBottomWidth:1,
        display:'flex',
        flexDirection: 'row',
        justifyContent:"space-between",
        alignItems: 'center',
        alignContent:"center",
        borderBottomColor:"#eee",
        flexWrap:"wrap",
    },

    itemText:{
        lineHeight:40,
        fontSize:18,
        marginLeft:5,
    },
    rightRow:{
        width:10,
        height:15,
        overflow:'hidden',
        marginRight:10,
    },
    button:{
        marginTop:10,
        height:50,
        lineHeight:50,
        color:"#fff",
        backgroundColor:"red"
    }
})
export default MyPage;