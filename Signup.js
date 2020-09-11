/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TextInput,
    StatusBar,
} from 'react-native';
import style from './style';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Button} from 'native-base';

export default class Signup extends React.Component {
    render(){
        return(
            <Button onPress={()=>this.props.navigation.navigate("Dashboard")} style={{width:"80%", backgroundColor:"orange",marginLeft:20, justifyContent:"center"}}>
                <Text>Click Me</Text>
            </Button>
    )
    }
}

