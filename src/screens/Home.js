import React , {useState, useEffect} from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView, TouchableOpacity, YellowBox } from 'react-native';
import { Card, Button} from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import _ from 'lodash';

console.disableYellowBox = true;
YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
// import firebase from 'react-native-firebase';

import {decode, encode} from 'base-64';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

import { db } from '../screens/config';

import Quiz  from './Quiz';

export default function Home({navigation}) {
  // const ref = firebase.firestore.collection('quizzes');
  
  const docRef= db.collection('quizzes');
  const [ quizData, setQuizData ] = useState();
  const [search,setSearch]=useState('');
  const [ loading, setLoading ] = useState(true);
  const [ quizzes, setQuizzes ] = useState([]);

  useEffect(async () => {
    const output = {};
    let response = await docRef.limit(35).get()
		.then(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc =>{
        const { id, quiz} = doc.data();
        list.push({
          id,
          quiz
        });
      });
    
      setQuizzes(list);
      if(loading){
        setLoading(false)
      }
      setQuizData(list);
    
      });
      
    
  
  },[]);

  const updateSearch = search => {
    setSearch(search);
    console.log(typeof(search));
    const items = quizData.filter((data)=>{
        if (search===''){
            return data;
        }
        else if(data.quiz.title.toLowerCase().includes(search.toLowerCase()) || data.quiz.description.toLowerCase().includes(search.toLowerCase())){
        console.log("condition",data);  
        return data;
      }
    });
    setQuizzes(items);
  };
  
  const renderItem = ({ item }) => (
        
        <Card
            title={item.quiz.title}
            image={item.quiz.imageUrl && {uri:item.quiz.imageUrl}}>
            <Text style={{marginBottom: 10}}>
                {item.quiz.description}
            </Text>
            <TouchableOpacity>
            <Button
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                onPress={()=>navigation.navigate('Quiz',{item:item})}
                title='VIEW QUIZ' />
            </TouchableOpacity>
            </Card>
  )


  return (
    <View style={styles.container}>
      <SearchBar
        lightTheme
        round
        placeholder="Search Quiz..."
        onChangeText={text => updateSearch(text)}
        autoCorrect={false}
        value={search}
      />
      
      <SafeAreaView style={styles.container1}>
        
        <FlatList 
          style={{flex: 1}}
          data={quizzes}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
        
      </SafeAreaView>
    </View>
    
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  container1: {
    flex: 1
  },
  
  
});