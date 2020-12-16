import React, { Component } from 'react';
import { View,Text,StyleSheet,Image } from "react-native";
import PropTypes from 'prop-types';

export default class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            checkBox:false
        }
    }

    static propTypes = {
        title: PropTypes.string,
        checkBox: PropTypes.bool,
    };

    check = ()=>{
        this.props.check();
    }
      
    render() { 
        const { title,checkBox } = this.props
        const check = checkBox ? require('../../static/images/checked_icon.png'):require('../../static/images/uncheck_icon.png')
        return ( 
            <>
                <Text style={styles.checkBox} onPress={this.check}>
                    <Image
                        style={styles.img}
                        source={check}
                    />
                {title} </Text>
            </>
         );
    }
}

const styles = StyleSheet.create({
    img:{
        width:20,
        height:20,
    },
    checkBox:{
        width:150,
        borderWidth:1,
        lineHeight:20,
        fontSize:18,
    }

})

