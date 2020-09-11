import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    text_input:{
        borderWidth:1,
        borderColor:"orange",
        width:"80%",
        margin:10,
        alignSelf: "center",
        borderRadius:10
    },
    textarea_input:{
        borderWidth:1,
        borderColor:"orange",
        width:"80%",
        height:150,
        alignSelf: "center",
        borderRadius:10
    },
    button:{
        justifyContent:"center",
        backgroundColor:"orange",
        width:"80%",
        alignSelf: "center",
        borderRadius:10,
        margin:5
    },
    container:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "white",
        padding:10

    },
    main:{
        elevation:8,
        marginBottom:15,
        borderRadius:15,
        backgroundColor:"cornflowerblue",
        padding: 20
    }

})