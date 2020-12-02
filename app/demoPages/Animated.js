import React, { Component } from 'react';
import { 
    Animated, Text, View, StyleSheet, Button
} from 'react-native';
import { Actions } from "react-native-router-flux"
 

export default class AnimatedDemo  extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fadeAnim: new Animated.Value(0)
      };
  }

  fadeIn = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 500
    }).start();
  };

  fadeOut = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 500
    }).start();
  };

  render() { 
    return ( 
        <View style={styles.container}>
            <Animated.View style={[ styles.fadingContainer,  { opacity: this.state.fadeAnim  } ]} >
                <Text style={styles.fadingText}>Fading View!</Text>
            </Animated.View>

            <View style={styles.buttonRow}>
                <Button title="Fade In" onPress={this.fadeIn} />
                <Button title="Fade Out" onPress={this.fadeOut} />
            </View>

      </View>
        
     );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    fadingContainer: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: "powderblue"
    },
    fadingText: {
      fontSize: 28,
      textAlign: "center",
      margin: 10
    },
    buttonRow: {
      flexDirection: "row",
      marginVertical: 16
    }
  });
  
 



