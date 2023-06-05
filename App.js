import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Header } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends React.Component {
 constructor(){
  super();
  this.state = {
    text: "",
    displayText: "",
  }
 }
 render(){
  return(
    <SafeAreaProvider>
      <View style={styles.container}>
        <Header
          backgroundColor={'#778899'}
          centerComponent={{
            text: 'Up Dylexia',
            style:{color: '#FFFAF0', fontSize: 40},
          }}>

        </Header>
        <TextInput
          style={styles.inputBox}
          onChangeText={text =>{
            this.setState({text: text});
          }}
          value={this.state.text}
        />
        <TouchableOpacity 
          style={styles.goButton}
          onPress={() => {
            this.setState({ displayText: this.state.text });
          }}
        ><Text style={styles.buttonText}>Enviar</Text></TouchableOpacity>
        <Text style={styles.displayText}>{this.state.displayText}</Text>
      </View>
    </SafeAreaProvider>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  inputBox:{
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    marginTop: 15,
    width: '30%',
    height: 55,
    alignSelf: 'center',
    padding: 8,
    margin: 10,
    backgroundColor: '#40E0D0',
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 30,
  },
});
