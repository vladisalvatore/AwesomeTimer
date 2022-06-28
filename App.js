/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import { TimePicker } from 'react-native-simple-time-picker';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import {
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';



const App: () => Node = () => {

  const isDarkMode = useColorScheme() === 'dark';
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const handleChange = (value: { hours: number, minutes: number }) => {
    setHours(value.hours);
    setMinutes(value.minutes);
  };
  const handleReset = () => {
    setHours(0);
    setMinutes(0);
  };

  const backgroundStyle = {
    backgroundColor: 'black',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar hidden/>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: '#E75B2F',
            alignItems:'center',
            justifyContent: "center",
            paddingVertical: Dimensions.get('window').height/6,
          }}>
            
            <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={hours* 3600 + minutes * 60}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        onComplete={() => ({ shouldRepeat: false, delay: 2 })}
    >
      {({ remainingTime, color }) => (
        <Text style={{ color, fontSize: 40 }}>
          {remainingTime}
        </Text>
      )}
    </CountdownCircleTimer> 
      <View style={[{width: "60%",
    paddingVertical: Dimensions.get('window').height/10}]}>
        <Button
         title='Start/Stop Timer'
         onPress={() => setIsPlaying(prev => !prev)} 
        />
        <View style={[{paddingVertical: Dimensions.get('window').height/14}]}>
        <TimePicker value={{ hours, minutes }} onChange={handleChange} />
        </View>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  View: {
    marginTop: 32
  }
});

export default App;
