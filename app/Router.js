import React, { Component } from 'react';
import {Scene,Router,Modal,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux'

// demo
import Home1 from './demoPages/index'
import Detail from './demoPages/Detail'
import List from './demoPages/List'
import AnimatedDemo from './demoPages/Animated'  //动画
import Dimensions from './demoPages/Dimensions'  //获取设备屏幕的宽高
import ModalDemo from './demoPages/Modal'  //获取设备屏幕的宽高
import ListRefreshControl from './demoPages/ListRefreshControl'  //获取设备屏幕的宽高
// 

export default class App1 extends Component {
    render(){
        return (
            <Router>
                <Modal>
                    <Scene key="root">
                        <Scene key="home"  component={Home1} title="Home"  />
                        <Scene key="list"  component={List} title="List"    />
                        <Scene key="detail" component={Detail} title="Detail"  />
                        <Scene key="animatedDemo" component={AnimatedDemo} title="AnimatedDemo" />
                        <Scene key="Dimensions" component={Dimensions} title="Dimensions"  />
                        <Scene key="ModalDemo" component={ModalDemo} title="ModalDemo" />
                        <Scene key="ListRefreshControl" component={ListRefreshControl} title="ListRefreshControl" initial={true} />
                    </Scene>
                </Modal>
            </Router>
          );
    }
  }
