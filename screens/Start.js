import {Text, View, Button} from "react-native";
import React from 'react';

export default function HomeScreen({ navigation }) {
   return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>default screen</Text>
       <Button
          title="Go to Default"
          onPress={() => navigation.navigate('Default')}
      />
      <Button
          title="Go to Start"
          onPress={() => navigation.navigate('Start')}
      />
      <Button
        title="Go to Login777"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
          title="Go to Register"
          onPress={() => navigation.navigate('Register')}
      />
      <Button
          title="Go to Reset1"
          onPress={() => navigation.navigate('Reset1')}
      />
      <Button
          title="Go to Reset2"
          onPress={() => navigation.navigate('Reset2')}
      />
      <Button
          title="Go to Reset3"
          onPress={() => navigation.navigate('Reset3')}
      />
    </View>
  );
}
