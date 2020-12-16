import React, { Component } from 'react';
import { View,Text,StyleSheet,Image,TouchableHighlight } from "react-native"
import { Actions } from "react-native-router-flux"

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceList:[
                {
                    title:"保单服务",
                    data:[
                        { name:"移动保全"},
                        { name:"保单查询"},
                        { name:"续期服务"},
                        { name:"移动理赔"},
                    ]
                },
                {
                    title:"展业工具",
                    data:[
                        { name:"建议管理书"},
                        { name:"海外医疗"},
                        { name:"智能保顾"},

                        { name:"扣款银行"},
                        { name:"条款和规则"},
                        { name:"健管产品"},

                        { name:"互动获客"},
                        { name:"税优投保"},
                        { name:"增员活动"},

                        { name:"营销活动"},
                        { name:"操作手册"},
                        { name:"资料库"},

                        { name:"团险建议书"},
                    ]
                },
                {
                    title:"学习服务",
                    data:[
                        { name:"健康资讯"},
                        { name:"在线学习"},
                    ]
                }
                
            ]
            
          }
    }

    componentDidMount(){
        console.log(Actions.currentScene)
    }

    _menu=(item)=>{
        console.log(item)

    }


    render() { 
        const {serviceList} = this.state
        return ( 
            <View>
                {
                    serviceList.map((item,i)=>{
                        return(
                            <View key={i}>
                                <View style={styles.title}>
                                    <Text style={styles.titleText} >{item.title}</Text>
                                </View>
                                <View style={styles.items}> 
                                    {
                                        item.data.map((list,k)=>{
                                            return (
                                                <TouchableHighlight key={k} style={styles.item} onPress={()=>this._menu(list)}  underlayColor="#fff">
                                                    <View style={styles.item1} >
                                                        <Image style={ styles.pic} source={require("../../static/images/Online_icon.png")} ></Image>
                                                        <Text>{list.name}</Text>
                                                    </View>
                                                </TouchableHighlight>
                                            )
                                        })
                                    }
                                    </View>
                            </View>  
                        )
                    })
                }
            </View>
         );
    }
}


const styles = StyleSheet.create({
    title:{
        borderBottomWidth:1,
    },
    titleText:{
        fontSize:20,
        height:40,
        lineHeight:40,
    },
    items:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"flex-start",
        alignItems:"center",

    },
    item:{
        width:"20%",
        borderWidth:1,
        paddingBottom:10,
        paddingTop:10,
        alignItems:"center",
    },
    item1:{
        alignItems:"center",
    },
    pic:{
        width:45,
        height:45,
        marginBottom:8,
    }
})
 
export default HomePage;