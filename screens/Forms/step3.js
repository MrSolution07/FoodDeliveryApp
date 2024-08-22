import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView,Alert } from 'react-native';
import UserInformation from '../Context/context';
import Header from '../../components/Header';
export default function Step3({ navigation }) {
  const { usrCardNumber, setUsrCardNumber, usrCardName, setUsrCardName, usrCardExp, setUsrCardExp, usrCardCvv, setUsrCardCvv } = useContext(UserInformation);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let valid = true;
    let notValid = {};

    if (!usrCardNumber || usrCardNumber.length !== 16) {
      notValid.usrCardNumber = 'Enter a valid card number';
      valid = false;
    }
    if (!usrCardName) {
      notValid.usrCardName = 'Enter the name on the card';
      valid = false;
    }
    if (!usrCardExp) {
      notValid.usrCardExp = 'Enter a valid expiration date';
      valid = false;
    }
    if (!usrCardCvv || usrCardCvv.length !== 3) {
      notValid.usrCardCvv = 'Enter a valid CVV';
      valid = false;
    }
    setErrors(notValid);
    return valid;
  };

  const handleNext = () => {
    if (validate()) {
      Alert.alert("success","registration completed !");
      navigation.navigate('Tabs');
    }
  };

  return (
    <>
    <Header/>
    <ScrollView style={styles.MainCountainer}>
      <View style={styles.container}>
        <Text style={styles.label}>Card Number</Text>
        <TextInput
          style={styles.input}
          value={usrCardNumber}
          onChangeText={setUsrCardNumber}
          placeholder="Card Number"
        />
        {errors.usrCardNumber && <Text style={styles.error}>{errors.usrCardNumber}</Text>}

        <Text style={styles.label}>Card Name</Text>
        <TextInput
          style={[styles.input, errors.usrCardName ? styles.errorInput : null]}
          value={usrCardName}
          onChangeText={setUsrCardName}
          placeholder="Card Name"
        />
        {errors.usrCardName && <Text style={styles.error}>{errors.usrCardName}</Text>}

        <Text style={styles.label}>Expiration Date</Text>
        <TextInput
          style={styles.input}
          value={usrCardExp}
          onChangeText={setUsrCardExp}
          placeholder="MM/YY"
        />
        {errors.usrCardExp && <Text style={styles.error}>{errors.usrCardExp}</Text>}

        <Text style={styles.label}>CVV</Text>
        <TextInput
          style={styles.input}
          value={usrCardCvv}
          onChangeText={setUsrCardCvv}
          placeholder="CVV"
        />
        {errors.usrCardCvv && <Text style={styles.error}>{errors.usrCardCvv}</Text>}

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleNext} >
          <Text style={styles.buttonText}>Submit</Text>
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
    justifyContent: 'center',
    backgroundColor: '#f9f9f9', 
  },
  MainCountainer:{
    backgroundColor: '#f9f9f9',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
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
    marginBottom: 15,
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