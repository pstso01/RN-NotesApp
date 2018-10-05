/**
 * Component to display the Title of the note
 */
import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './Styles';

export default class Title extends Component{
    render(){
        return (
            <View>
                <Text style={styles.text}>Title</Text>
                
                <TextInput style={styles.titleTextInput} onChangeText={this.props.onChange} value={this.props.input}>

                </TextInput>
            </View>
        );
    }
}