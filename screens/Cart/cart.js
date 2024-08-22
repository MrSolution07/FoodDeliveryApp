import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import UserInformation from '../Context/context';
import Header from '../../components/Header';

export default function Cart() {
  const { cartItems, clearCart, textColor, backgroundColor, updateCart } = useContext(UserInformation);

  const incrementQuantity = (item) => {
    updateCart(item, item.quantity + 1);
  };

  const decrementQuantity = (item) => {
    if (item.quantity > 1) {
      updateCart(item, item.quantity - 1);
    } else {
      removeItem(item);
    }
  };

  const removeItem = (item) => {
    updateCart(item, 0);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={[styles.itemText, { color: textColor }]}>{item.name}</Text>
        <Text style={[styles.itemText, { color: textColor }]}>R{item.price}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => decrementQuantity(item)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => incrementQuantity(item)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };


  return (
    <>
      <Header />
      <View style={[styles.container, { backgroundColor }]}>
        {cartItems.length === 0 ? (
          <Text style={[styles.emptyText, { color: textColor }]}>Your cart is empty</Text>
        ) : (
          <>
            <FlatList
              data={cartItems}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
            <Text style={[styles.totalText, { color: textColor }]}>
              Total: R{getTotalPrice()}
            </Text>
            <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
              <Text style={styles.clearButtonText}>Clear Cart</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginTop: 10,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  totalText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  clearButton: {
    backgroundColor: '#FF4C4C',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  clearButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});