/**
 * Component for the notes to be entered
 */

import {TextInput, Text, View} from 'react-native';
import React, {Component} from 'react';
import styles from './Styles';

export default class Notes extends Component{
    render(){
        return (
            <View>
                <Text style={styles.text}>Notes</Text>
                <TextInput style={styles.notesTextInput} multiline={true} onChangeText={this.props.onChange}>
                </TextInput>
            </View>
        );
    }
}
