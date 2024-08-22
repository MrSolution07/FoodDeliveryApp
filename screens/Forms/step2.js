import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import UserInformation from '../Context/context';
import Header from '../../components/Header';

export default function Step2({ navigation }) {
  const { usrAddress, usrCity, usrState, usrZip, setUsrAddress, setUsrCity, setUsrState, setUsrZip } = useContext(UserInformation);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let valid = true;
    let notValid = {};

    if (!usrAddress) {
      notValid.usrAddress = 'an Address is required';
      valid = false;
    }
    if (!usrCity) {
      notValid.usrCity = ' a City is required';
      valid = false;
    }
    if (!usrState) {
      notValid.usrState = 'a christState is required';
      valid = false;
    }
    if (!usrZip || usrZip.length !== 4) {
      notValid.usrZip = 'Valid Zip is required with exactly 4 digits';
      valid = false;
    }

    setErrors(notValid);
    return valid;
  };

  const handleNext = () => {
    if (validate()) {
      navigation.navigate('Payment Details');
    }
  };

  return (
    <>
    <Header/> 
    <ScrollView style={styles.MainCountainer}>

    <View style={styles.container}>
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        value={usrAddress}
        onChangeText={setUsrAddress}
        placeholder="Enter your address"
      />
      {errors.usrAddress && <Text style={styles.error}>{errors.usrAddress}</Text>}

      <Text style={styles.label}>City</Text>
      <TextInput
        style={styles.input}
        value={usrCity}
        onChangeText={setUsrCity}
        placeholder="Enter your city"
      />
      {errors.usrCity && <Text style={styles.error}>{errors.usrCity}</Text>}

      <Text style={styles.label}>State</Text>
      <TextInput
        style={styles.input}
        value={usrState}
        onChangeText={setUsrState}
        placeholder="Enter your state"
      />
      {errors.usrState && <Text style={styles.error}>{errors.usrState}</Text>}

      <Text style={styles.label}>Zip Code</Text>
      <TextInput
        style={styles.input}
        value={usrZip}
        onChangeText={setUsrZip}
        placeholder="Enter your zip code"


      />
      {errors.usrZip && <Text style={styles.error}>{errors.usrZip}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
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
    marginTop:'15%',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9', // Consistent background color
  },
  MainCountainer:{
    backgroundColor: '#f9f9f9',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  errorInput: {
    borderColor: 'red',
  },
  error: {
    color: 'red',
    marginBottom: 10,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#FF4C4C', // Matches the theme
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});