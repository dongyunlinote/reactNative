import React, { Component } from 'react';
import {Scene,Router,Modal,StyleSheet,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux'

import Home from "./pages/Home"
import Product from "./pages/Product"
import Service from "./pages/Service"
import My from "./pages/My"
import Login from "./pages/My/login"
import ForgetPassword from "./pages/My/ForgetPassword"


// 服务
import ActivityManage from "./pages/Service/ActivityManage"
import AttendanceManage from "./pages/Service/AttendanceManage"
import ElectronicReceipt from "./pages/Service/ElectronicReceipt"
import InsureForm from "./pages/Service/InsureForm"
import OnlineInsurance from "./pages/Service/OnlineInsurance"
import ProposalManage from "./pages/Service/ProposalManage"
import SimpleInsurance from "./pages/Service/SimpleInsurance"

import { Provider } from "mobx-react"
import store from "./store/index"



export default class App1 extends Component {
    render(){
        return (
<Provider { ...store }>
          
            <Router>
                
                <Modal hideNavBar>
                    <Stack hideNavBar headerMode='screen' key="root"  tabBarPosition="bottom"  initial >
                        <Tabs
                            key="tabbar"
                            swipeEnabled
                            routeName="tabbar"  //跳转用
                            // wrap={true}// 自动使用自己的导航栏包装每个场景
                            showLabel={true} // 是否显示标签栏文字
                            headerMode='screen' // 页面切换方式
                            tabBarStyle={{backgroundColor: "#fff"}}
                            activeBackgroundColor='white'   // 选中tabbar的背景色
                            inactiveBackgroundColor='white' // 未选中tabbar的背景色
                            activeTintColor='#4ECBFC'       // 选中tabbar图标的颜色
                            inactiveTintColor='#aaa'        // 未选中tabbar图标的颜色
                            tabBarPosition={'bottom'}       // tabbar在顶部还是底部，iOS默认顶部，安卓默认顶部
                            activeTintColor="red"           // 指定标签栏图标的选中色调颜色
                        >
                                <Stack key="home" hideNavBar={true} component={Home} title="首页" /> 
                                <Stack key="Product" component={Product} title="产品"  /> 
                                <Stack key="Service" component={Service} title="服务"  /> 
                                <Stack key="My" component={My} title="我的" /> 
                        </Tabs>
                        <Scene key="login" initial  path="/login" hideNavBar={true} component={Login} title="登录" />
                        <Scene key="forgetPassword"  path="/forgetPassword" hideNavBar={false} component={ForgetPassword} title="忘记密码" />
                        
                        <Scene key="activityManage"  path="/activityManage" hideNavBar={false} component={ActivityManage} title="活动量管理" />
                        <Scene key="attendanceManage"  path="/attendanceManage" hideNavBar={false} component={AttendanceManage} title="出席管理" />
                        <Scene key="electronicReceipt"  path="/electronicReceipt" hideNavBar={false} component={ElectronicReceipt} title="电子回执单" />
                        <Scene key="insureForm"  path="/insureForm" hideNavBar={false} component={InsureForm} title="投保单" />
                        <Scene key="onlineInsurance"  path="/onlineInsurance" hideNavBar={false} component={OnlineInsurance} title="在线投保" />
                        <Scene key="proposalManage"  path="/proposalManage" hideNavBar={false} component={ProposalManage} title="建议书" />
                        <Scene key="simpleInsurance"  path="/simpleInsurance" hideNavBar={false} component={SimpleInsurance} title="简易投保" />
                        
                    </Stack>
                    
                </Modal>
            </Router>

            </Provider>
          );
    }
  }