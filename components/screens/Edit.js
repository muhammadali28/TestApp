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
import {EditBlogs} from '../Actions/actions';
import {connect} from 'react-redux';

class Edit extends React.Component{
    state={
        title : this.props.navigation.state.params.title,
        author :this.props.navigation.state.params.author,
        blog : this.props.navigation.state.params.blog,
        key: this.props.navigation.state.params.key
    }
    edit =()=>{
        this.props.EditBlogs(this.state.title, this.state.author, this.state.blog, this.state.key )
        this.props.navigation.navigate('Blogs')
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
                <Button style={styles.button} onPress={this.edit} >
                    <Text>Edit</Text>
                </Button>
            </View>
        )
    }
}
export default connect(null, {EditBlogs})(Edit);