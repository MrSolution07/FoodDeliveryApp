import React from 'react';
import { View, Image, SafeAreaView, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Get screen width

export default function Header() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    width: '100%',
    backgroundColor: '#f9f9f9',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: '100%',
  },
  logo: {
    width: width * 0.15, 
    height: undefined,
    aspectRatio: 1, 
    resizeMode: 'contain',
  },
});