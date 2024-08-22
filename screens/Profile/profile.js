import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import UserInformation from '../Context/context';
import Header from '../../components/Header';
export default function Profile() {
  const { 
    usrName, usrEmail, usrPhone, 
    usrAddress, usrCity, usrState, usrZip,
    usrCardNumber, usrCardName, usrCardExp, usrCardCvv,
    setTextColor, setBackgroundColor, textColor, backgroundColor, resetTheme 
  } = useContext(UserInformation);

  return (
    <>
      <Header/>
    <ScrollView style={[styles.container, { backgroundColor }]}>
      {/* User Information Card */}
      <View style={styles.card}>
        <Text style={[styles.label, { color: textColor }]}>User Information</Text>
        <Text style={[styles.value, { color: textColor }]}>Name: {usrName}</Text>
        <Text style={[styles.value, { color: textColor }]}>Email: {usrEmail}</Text>
        <Text style={[styles.value, { color: textColor }]}>Phone: {usrPhone}</Text>
      </View>

      {/* Address Card */}
      <View style={styles.card}>
        <Text style={[styles.label, { color: textColor }]}>Address</Text>
        <Text style={[styles.value, { color: textColor }]}>Address: {usrAddress}</Text>
        <Text style={[styles.value, { color: textColor }]}>City: {usrCity}</Text>
        <Text style={[styles.value, { color: textColor }]}>State: {usrState} {usrZip}</Text>
      </View>

      {/* Payment Method Card */}
      <View style={styles.card}>
        <Text style={[styles.label, { color: textColor }]}>Payment Method</Text>
        <Text style={[styles.value, { color: textColor }]}>Card Number: {usrCardNumber}</Text>
        <Text style={[styles.value, { color: textColor }]}>Card Name: {usrCardName}</Text>
        <Text style={[styles.value, { color: textColor }]}>Expiration Date: {usrCardExp}</Text>
        <Text style={[styles.value, { color: textColor }]}>CVV: {usrCardCvv}</Text>
      </View>

      {/* Theme Customization Section */}
      <View style={styles.customizationContainer}>
        <Text style={[styles.customizationLabel, { color: textColor }]}>Customize Theme</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#FF6F61' }]} onPress={() => setTextColor('#FF6F61')}>
          <Text style={styles.buttonText}>Coral Text Color</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#4A90E2' }]} onPress={() => setTextColor('#4A90E2')}>
          <Text style={styles.buttonText}>Sky Blue Text Color</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#F5A623' }]} onPress={() => setBackgroundColor('#F5A623')}>
          <Text style={styles.buttonText}>Warm Yellow Background</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#7ED321' }]} onPress={() => setBackgroundColor('#7ED321')}>
          <Text style={styles.buttonText}>Lush Green Background</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#D32F2F' }]} onPress={resetTheme}>
          <Text style={styles.resetButtonText}>Reset to Default Theme</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 8,
  },
  customizationContainer: {
    marginTop: 20,
  },
  customizationLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  resetButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});