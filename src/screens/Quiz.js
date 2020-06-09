import React from 'react';
import { Text, View,StyleSheet,Image ,TouchableOpacity} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default function Quiz({route,navigation}){
    const {item}=route.params;
    const {title, imageUrl, type, duration, description} = item.quiz;
    const hour=Math.floor(duration/60);
    const minutes=(duration%60);
    
    return(
    
      <Card
      title={JSON.stringify(title)}
      image={imageUrl && {uri:imageUrl}}>
      <Text style={{marginBottom: 10}}>
          {JSON.stringify(description)}
      </Text>
      <View style={{flexDirection:"row"}}>
      <Text style={{width: 97,height: 38,textAlign:"left",justifyContent:"flex-start"}}>
          {type}
      </Text>
      <Text style={{textAlign:"right",justifyContent:"flex-end",paddingLeft:34}}>
        {(hour)?hour+' hour ':''}{(minutes)?minutes+' minutes':''}
      </Text>
      </View>
      </Card>
    )
  }