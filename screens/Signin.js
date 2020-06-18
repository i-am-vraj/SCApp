import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,ThemeProvider, Button } from 'react-native-elements';




export default class Signin extends React.Component {

    state = {
        iconName1: 'eye',
        pass1: true, 
    };

    render() {
        const theme = {
            Button: {
              raised: false,
            },
          }
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 40, fontWeight: 'bold', marginLeft: 30, marginBottom: 20}}>Welcome back!</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 30, borderBottomColor: 'black', borderBottomWidth: 2}}>Login</Text>

                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Signup')}>
                        <Text style={{fontWeight: 'bold', fontSize: 15, marginLeft: 50, marginVertical: 10}}>Create Account</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SigninOTPSocial')}>
                        <Text style={{fontWeight: 'bold', fontSize: 15, marginRight: 30, marginVertical: 10}}>Login using OTP</Text>
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

                    <Input
                        placeholderTextColor='#555'
                        secureTextEntry={this.state.pass1}
                        placeholder='Password'
                        leftIcon={
                            <Icon
                            name='lock'
                            size={30}
                            color='black'
                            />
                        }
                        rightIcon={
                            <Icon
                            onPress={()=>this.setState(this.state.iconName1 === 'eye' ? {iconName1:'eye-slash', pass1:false} : {iconName1: 'eye', pass1:true})}
                            name={this.state.iconName1}
                            size={20}
                            color='black'
                            />
                        }
                    />

                </View>
                
                <ThemeProvider theme={theme} >
                    <Button
                        title='Login    '
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
  
  