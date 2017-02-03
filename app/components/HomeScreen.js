import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SimpleButton from './SimpleButton';
import NoteList from './NoteList';

export default class HomeScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <NoteList />
                <Text style={styles.noNotesText}>You haven't created any note!</Text>
                <SimpleButton
                    onPress={()=>this.props.navigator.push({
                        name:'createNote'
                    })}
                    customText="Create Note"
                    style={styles.simpleButton}
                    textStyle={styles.simpleButtonText} />
            </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:60
    },
    noNotesText:{
        color:'#48209A',
        marginBottom: 10
    },
    simpleButtonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:16
    },
    simpleButton:{
        backgroundColor:'#5B29C1',
        borderColor:'#48209A',
        borderWidth:1,
        borderRadius:4,
        paddingHorizontal:20,
        paddingVertical:15,
        shadowColor:'darkgrey',
        shadowOffset:{ width:1, height:1}
    }
});