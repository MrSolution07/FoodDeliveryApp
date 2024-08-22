import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import UserInformation from '../Context/context';
import Header from '../../components/Header';

export default function Step1({ navigation }) {
  const { usrName, setUsrName, usrEmail, setUsrEmail, usrPhone, setUsrPhone } = useContext(UserInformation);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let valid = true;
    let notValid = {};

    if (!usrName) {
      notValid.usrName = 'Name is required';
      valid = false;
    }
    if (!usrEmail || !/\S+@\S+\.\S+/.test(usrEmail)) {
      notValid.usrEmail = 'Valid email is required';
      valid = false;
    }
    if (!usrPhone || usrPhone.length !== 10) {
      notValid.usrPhone = 'Valid phone number is required';
      valid = false;
    }

    setErrors(notValid);
    return valid;
  };

  const handleNext = () => {
    if (validate()) {
      navigation.navigate('Address Details');
    }
  };

  return (
    <>
    <Header/>
    <ScrollView style={styles.MainCountainer}>
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={usrName}
        onChangeText={setUsrName}
        placeholder="Enter your name"
      />
      {errors.usrName && <Text style={styles.error}>{errors.usrName}</Text>}

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={usrEmail}
        onChangeText={setUsrEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      {errors.usrEmail && <Text style={styles.error}>{errors.usrEmail}</Text>}

      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        value={usrPhone}
        onChangeText={setUsrPhone}
        placeholder="Enter your phone number"
        // keyboardType="phone-pad"
      />
      {errors.usrPhone && <Text style={styles.error}>{errors.usrPhone}</Text>}

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
    marginTop:'20%',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9', 
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
    backgroundColor: '#FF4C4C', 
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