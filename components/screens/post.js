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
import styles from '../../style';
import {Button} from "native-base";
import {PostBlog} from '../Actions/actions';
import {connect} from 'react-redux';
class post extends React.Component{
    state={
        title : '',
        author :'',
        blog :''
    }

    submit= ()=>{
        this.props.PostBlog(this.state.title, this.state.author, this.state.blog)
    }
    render() {
        return (
            <View>
                <TextInput
                    placeholder="Title"
                    style={styles.text_input}
                    onChangeText ={title=>this.setState({title})}
                    value={this.state.title}
                />
                <TextInput
                    placeholder="Author"
                    style={styles.text_input}
                    onChangeText ={author=>this.setState({author})}
                    value={this.state.author}

                />
                <TextInput
                    placeholder="Blog"
                    style={styles.textarea_input}
                    NumberOfLines={10}
                    onChangeText ={blog=>this.setState({blog})}
                    value={this.state.blog}

                />
                <Button style={styles.button} onPress={this.submit}>
                    <Text>Submit</Text>
                </Button>
                <Button style={styles.button} onPress={()=>this.props.navigation.navigate("Blogs")}>
                    <Text>Blog</Text>
                </Button>
            </View>
        )
    }
}
export default connect(null, {PostBlog})(post);
