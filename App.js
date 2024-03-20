import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  
  
  

  /*
  const handleResultPress = () => {
    try{
      const result = eval(numbers.join(''));
      setNumbers([result]);
      console.log(result);
    }catch(error){
      console.error('Invalid expression');

    }
  }
  */
  
  return (
  
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          Result
        </Text>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity  style={styles.buttonOperContainerSingle} ><Text style={styles.buttonTextOper}>+</Text></TouchableOpacity>
        <TouchableOpacity  style={styles.buttonContainer} ><Text style={styles.buttonText}>1</Text></TouchableOpacity>
        <TouchableOpacity  style={styles.buttonContainer} ><Text style={styles.buttonText}>2</Text></TouchableOpacity>
        <TouchableOpacity  style={styles.buttonContainer} ><Text style={styles.buttonText}>3</Text></TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.buttonOperContainerSingle} ><Text style={styles.buttonTextOper}>-</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} ><Text style={styles.buttonText}>4</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} ><Text style={styles.buttonText}>5</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} ><Text style={styles.buttonText}>6</Text></TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.buttonContainer} ><Text style={styles.buttonText}>7</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} ><Text style={styles.buttonText}>8</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} ><Text style={styles.buttonText}>9</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} ><Text style={styles.buttonText}>0</Text></TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity style={styles.buttonOperContainerSingle} ><Text style={styles.buttonTextOper}>=</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonOperContainerSingle} ><Text style={styles.buttonTextOper}>*</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonOperContainerSingle} ><Text style={styles.buttonTextOper}>/</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonOperContainerSingle} ><Text style={styles.buttonTextOper}>C</Text></TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#627254',
    //alignItems: 'center',
    justifyContent: 'center',
   
  },
  rowContainer:{
    flexDirection:'row',
    justifyContent:'center',
    paddingBottom:10
  },
  buttonContainer:{
    backgroundColor:'#627254',
    padding:20,
    borderWidth: 2,
    borderColor: "#EEEEEE",
    borderRadius: 50,
    margin:10,
  },
  buttonText:{
    fontSize:20,
    color:'#EEEEEE'
  },
  headerText:{
    color:'#fff',
    fontSize:25,
    fontWeight:'bold',
    alignSelf:'center'

  },
  headerContainer:{
    padding:40,
    
  },
  buttonOperContainer:{
    backgroundColor:'#EEEEEE',
    padding:20
  },
  buttonTextOper:{
    fontSize:20,
    color:'#627254'
  },
  buttonOperContainerSingle:{
    backgroundColor:'#EEEEEE',
    padding:20,
    borderWidth: 2,
    borderColor: "#627254",
    borderRadius: 50,
    margin:10,
  },
  buttonTextOperSingle:{
    fontSize:20,
    color:'#EEEEEE'
  }
});
