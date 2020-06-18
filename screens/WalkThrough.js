import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import ViewPager from '@react-native-community/viewpager';


const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

export default class WalkThrough extends React.Component {
    render() {
        return (
            <MyPager/>
        )
    }
}

const MyPager = () => {
  return (
    <ViewPager style={styles.viewPager} initialPage={0}>

      <View key="1">
        <Image style={{flex: 1, width: windowWidth, height: windowHeight }} source={require('../walkthrough1.png')}/>
      </View>

      <View key="2">
        <Image style={{flex: 1, width: windowWidth, height: windowHeight}} source={require('../walkthrough2.png')}/>
      </View>
      
      <View key="3">
        <Image style={{flex: 1, width: windowWidth, height: windowHeight}} source={require('../walkthrough3.png')}/>
      </View>

    </ViewPager>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});