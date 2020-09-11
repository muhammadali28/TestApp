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
    FlatList
} from 'react-native';
import _ from "lodash";
import {connect} from 'react-redux';
import {getBlogs} from '../Actions/actions';
import styles from "../../style";
import {Button} from "native-base";
import {DeleteBlogs} from '../Actions/actions';

class Blogs extends React.Component{

    componentDidMount() {
        this.props.getBlogs()
    }

    render() {
        return (
            <View style={styles.container}>

                <FlatList
                    style={{width:"100%"}}
                    data={this.props.listOfBlogs}
                    keyExtractor={(item)=>item.key}
                    renderItem={({item})=> {
                        return(
                            <View style={styles.main}>
                                <Text styles={{fontsize:20,fontWeight:'bold', marginTop:10}}>{item.title}</Text>
                                <Text styles={{fontsize:20, lineHeight:30, color:"white"}}>{item.author}</Text>
                                <Text styles={{fontsize:20, lineHeight:30, color:"white"}}>{item.blog}</Text>
                                <Button style={styles.button} onPress={()=>this.props.navigation.navigate("Edit",{...item})}>
                                    <Text>Edit</Text>
                                </Button>
                                <Button style={styles.button} onPress={()=>this.props.DeleteBlogs(item.key)}>
                                    <Text>Delete</Text>
                                </Button>
                            </View>

                        )
                    }}
                />
            </View>
        )
    }
}
function mapStateToProps(state) {
    const listOfBlogs = _.map(state.blogsList.blogsList, (val, key)=>{
        return{
            ...val,
            key:key
        }
    })

        return{
            listOfBlogs
        }
}

export  default connect(mapStateToProps,{getBlogs, DeleteBlogs})(Blogs);

