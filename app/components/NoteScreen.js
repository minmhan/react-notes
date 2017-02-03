import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class NoteScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        ref="title"
                        autoFocus={true} 
                        autoCapitalize="sentences"
                        placeholder="Untitled" 
                        style={[styles.textInput, styles.title]}
                        underlineColorAndroid="transparent"
                        onEndEditing={(text)=>{this.refs.body.focus()}} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        ref="body"
                        multiline={true} 
                        placeholder="Start Typing" 
                        underlineColorAndroid="transparent"
                        style={[styles.textInput, styles.body]} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 64
    },
    title: {
        height:40
    },
    body: {
        flex:1
    },
    inputContainer:{
        borderBottomColor:'#9E7CE3',
        borderBottomWidth:1,
        flexDirection:'row',
        marginBottom:10
    },
    textInput:{
        flex:1,
        fontSize:16
    }
});