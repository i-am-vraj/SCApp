import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,ThemeProvider, Button } from 'react-native-elements';




export default class SigninOTPSocial extends React.Component {
    render() {

        const theme = {
            Button: {
              raised: false,
            },
          }

        return(

            <View style={styles.container}>

                <Text style={{fontSize: 40, fontWeight: 'bold', marginLeft: 30}}>Welcome!</Text>
                
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 30, borderBottomColor: 'black', borderBottomWidth: 2}}>Login with OTP</Text>

                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Signin')}>
                        <Text style={{fontWeight: 'bold', fontSize: 15, marginRight: 30, marginVertical: 10}}>Account login</Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginHorizontal: 30, marginTop: 50}}>
                    
                    <Input
                        placeholderTextColor='#555'
                        placeholder='Email Address/Phone Number'
                        leftIcon={
                            <Icon
                            name='envelope'
                            size={20}
                            color='black'
                            />
                        }
                    />

                </View>
                
                <ThemeProvider theme={theme} >
                    <Button
                        title='Generate OTP    '
                        buttonStyle={{paddingHorizontal:70, marginTop:70, backgroundColor: '#000000', marginHorizontal:30}}
                        style={{width:100}}
                        icon={
                        <Icon
                            name="check-circle"
                            size={30}
                            color="#ffffff"
                        />
                        }
                        iconRight
                        onPress={()=>{console.log('button clicked')}}
                    />
                </ThemeProvider>
                
                <View style={{flexDirection: 'row', margin: 30}}>
                    <Text style={{flex: 2, borderBottomWidth: 2, marginBottom: 10}}></Text>
                    <View style={{flex: 3, alignItems: 'center', justifyContent: 'flex-end'}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Or Sign Up with</Text>
                    </View>
                    <Text style={{flex: 2, borderBottomWidth: 2, marginBottom: 10}}></Text>
                </View>

                <View style={{flexDirection: 'row', margin: 30}}>

                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Icon
                            name='facebook'
                            size={60}
                            onPress={()=>console.log('facebook')}
                        />
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Icon
                            name='google-plus'
                            size={60}
                            onPress={()=>console.log('google+')}
                        />
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Icon
                            name='twitter'
                            size={60}
                            onPress={()=>console.log('twitter')}
                        />
                    </View>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    //   backgroundColor: '#a3b721'
    backgroundColor: '#fff'
    },
  });
  
  