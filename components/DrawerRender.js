import React from 'react';
import { Image, View } from 'react-native';
import Signin from '../screens/Signin';
import VegCardView from '../components/VegCardView'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

function DrawerImage() {
  return(
    <View>
      <Image style={{width: 280, height: 280}} source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8TFRT+/v4AAACXl5eSkpKcnJzU1NTFxcUSFBOgoKDQ0NAJCQlJSUkUFBRNTU1XV1e0trXIyMjAwMCrq6s6OjpsbGwPDw93eHeytLP4+PgZGxqKjIva2tpSUlKkpKRgHB6DAAACfUlEQVR4nO3dAU/iMByG8dpuk03gbqCH4u34/t/SkruImrSTlO7tds8TTQgL0B//qRkqM4aIiIiIZpa1xqrXcIuCCLuUYnb12m5UZIZpe0cpHYNbrOnrqp53fv19TF9VXdP4D01dl/jQ3fkuqibss144+y9FU1cjwn64FzYk5W//aEZneB/bi8tvZ+qw0M5e6H8WrBAiLDuECMsPIcLyQ/hVqD5K+GZpwqN6+eOlzdAMT5vC+5W4lz64ddEd3I8Uob/Bg7srue12vXDhHUKECPUhvFbYtipJqAXNsL308eoFCbeXPl19W6ErpGxCd+pOnb7Ts8skbF3whtPWuzafUH0seM4Ls81QC3u/8JJRWMbfovgZtggDIUQ4UQgRItSHECFCfQgRItSHECFCfQgRItQXF1733wgINSFEiFAfQoQI9SFEiFAfQoQI9WUU/r0LeVlniHCSECJEqA8hQoT6ECJEqA8hQoT6ECJEqA8hQoT6ECJEqA8hQoT6ECJEqA8hQoT6ECJEqA8hQoT6ECJEqA8hQoT6ECJEqO8l+r76CxFuEQaaiTB+9geECBFOEUKECPUhRIhQH0KECPUhRBh/n6gSyjnDjydaDJyHcYJ6d8j3eulx5MHznsby35PYu9fF76WH10zC/X6/2kdbTdDud65X9T2xkC5LurGwxBAiRKgPIUKE+hCOCO1ZuC465zZJQmOGzc+y+/OcNsNpDmnTsp8vXznD0WP6AvqivfI7TfkzTBTOLoQIyw8hwvJDiLD8viccJlxRhqJC/xRUjXmc4pcP2dqdzlMKAm1s62yqu/A2a+q6qmdeFZ2h3XVd0825k//cFX/MR0RERET/X2+0UNfUUmM5FgAAAABJRU5ErkJggg=='}}/>
      <Button
        buttonStyle={{backgroundColor: '#fff', marginTop: 20, marginHorizontal: 30, borderWidth: 2, borderColor: 'black', borderRadius: 30}}
        icon={
          <Icon
            name="arrow-right"
            size={30}
            color="#000"
          />
        }
        title='    To screen 1'
        titleStyle={{color: '#000'}}
      />
      <Button
        buttonStyle={{backgroundColor: '#fff', marginTop: 20, marginHorizontal: 30, borderWidth: 2, borderColor: 'black', borderRadius: 30}}
        icon={
          <Icon
            name="arrow-right"
            size={30}
            color="#000"
          />
        }
        title='    To screen 2'
        titleStyle={{color: '#000'}}
      />
      <Button
        buttonStyle={{backgroundColor: '#fff', marginTop: 20, marginHorizontal: 30, borderWidth: 2, borderColor: 'black', borderRadius: 30}}
        icon={
          <Icon
            name="arrow-right"
            size={30}
            color="#000"
          />
        }
        title='    To screen 3'
        titleStyle={{color: '#000'}}
      />
    </View>
  )
}
function DrawerRender() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator drawerContent={()=><DrawerImage/>} initialRouteName="VegCardView">
        
        <Drawer.Screen name="VegCardView" component={VegCardView} />
        <Drawer.Screen name="Signin" component={Signin} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default DrawerRender;