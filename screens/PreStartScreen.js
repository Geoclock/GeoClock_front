import * as React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import DefaultImage from "./assets/start.png";
const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

export default function PrestartScreen() {
  return (
      <View style={styles.container}>
        <ImageBackground source={{uri: DEFAULT_IMAGE}} style={styles.image}>
          <Text style={styles.text}>G E O C L O C K</Text>
        </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "#E9ECF6",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center"
  }
});
