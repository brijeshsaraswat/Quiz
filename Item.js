import React from 'react';
import { Text, View,StyleSheet,Image ,TouchableOpacity} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import RNStyledDialogs from 'react-native-styled-dialogs';
import Popup from './Popup.js';
import {Quiz} from './Quiz.js';
import {App} from './App.js';

export function Item({ title, imgUrl, type, duration, description,navigation,route}) {
    
  return (
        <Card
        title={title}
        image={imgUrl && {uri:imgUrl}}>
        <Text style={{marginBottom: 10}}>
            {description}
        </Text>
        <TouchableOpacity>
        <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            onPress={()=>navigation.navigate('Quiz')}
            title='VIEW NOW' />
        </TouchableOpacity>
        </Card>
  );
}
