/**
This is the container for the notes app
*/

import React, {Component} from 'react';
import {View} from 'react-native';
import Title from './Title';
import Notes from './Notes';
import Footer from './Footer';
import styles from './Styles';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {charCount: 0, title: ''};
        //make 'this' available in methods
        this.calCharCount = this.calCharCount.bind(this);
        this.calTitleLength = this.calTitleLength.bind(this);
    }    
    render(){
        return (
        <View style={styles.home}>
            <Title onChange={this.calTitleLength} input={this.state.title}/>
            <Notes onChange={this.calCharCount}/>
            <Footer charCount={this.state.charCount}/>
        </View>
        );
    }

    calCharCount = function (text){
        this.setState({charCount: text.length});
    }

    calTitleLength = function(text: String){
        if(text.length > 20){
            this.setState({title: text.substring(0, 20)});
        }
        else{
            this.setState({title: text});
        }
    }
}