import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { ThemeProvider, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {

    state = {
      language: 'English',
    };
  
    render() {
      const theme = {
        Button: {
          raised: false,
        },
      }
      return (
          <View style={styles.container}>
            
            <Image style={{marginTop:100, height:400, width:400}} source={require('../welcome.png')} />
            
            
            <Text style={{fontSize:25}}>Please select a language!</Text>
            
            
            <View style={styles.boxRadius}>
              <Picker
                selectedValue={this.state.language}
                style={{height: 50, width: 300}}
                itemStyle={styles.items}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({language: itemValue})
                }>
                <Picker.Item label="English" value="English" />
                <Picker.Item label="Hindi" value="Hindi" />
                <Picker.Item label="Tamil" value="Tamil" />
                <Picker.Item label="Telugu" value="Telugu" />
                <Picker.Item label="Bengali" value="Bengali" />
                <Picker.Item label="Gujarati" value="Gujarati" />
              </Picker>
            </View>
  
  
            <ThemeProvider style={{marginTop:70}} theme={theme} >
              <Button
                buttonStyle={{paddingHorizontal:70, marginTop:70, backgroundColor: '#ffaa23'}}
                style={{width:100}}
                icon={
                  <Icon
                    name="arrow-right"
                    size={30}
                    color="#2f3a2f"
                  />
                }
                iconRight
                onPress={()=>{this.props.navigation.navigate('UserType', this.state.language)}}
              />
            </ThemeProvider>
  
  
          </View>
        );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  
    boxRadius: {
      backgroundColor: '#ffaa23',
      color: '#2f3a2f', 
      borderWidth: 3, 
      borderColor: 'black', 
      borderStyle: 'solid', 
      borderRadius: 15,
      marginTop: 15,
    },
  
    items: {
      fontSize: 20,
      fontWeight: '400',
      lineHeight: 50,
      textAlign: 'center',
      letterSpacing: 10,
    }
  });
  
  