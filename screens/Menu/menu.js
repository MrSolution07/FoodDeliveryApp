import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import UserInformation from '../Context/context';
import Header from '../../components/Header';

export default function Menu() {
  const { textColor, backgroundColor, addToCart } = useContext(UserInformation);

const menuItems=[
    {
        "id": 1,
        "name": "Spicy Garlic Shrimp",
        "description": "Juicy shrimp sautéed in a zesty garlic sauce with a kick of chili, served with a side of buttery garlic bread.",
        "price": 270.00,
        "image": "https://i0.wp.com/seonkyounglongest.com/wp-content/uploads/2019/10/Spicy-Garlic-Shrimp-1.jpg?fit=2000%2C1125&ssl=1"
    },
    {
        "id": 2,
        "name": "Margherita Pizza",
        "description": "Classic pizza with a crispy crust, topped with fresh mozzarella, basil, and a rich tomato sauce.",
        "price": 120.00,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0undFfMNyl3kMlsYZGZSNXU99EkP8WLHkAQ&s"
    },
    {
        "id": 3,
        "name": "Grilled Chicken Caesar Salad",
        "description": "Grilled chicken breast on a bed of crisp romaine, tossed with Caesar dressing, croutons, and parmesan.",
        "price": 95.00,
        "image": "https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2023/08/Grilled-Chicken-Caesar-Salad-11.jpg"
    },
    {
        "id": 4,
        "name": "Beef Burger with Fries",
        "description": "Juicy beef patty served on a toasted bun with lettuce, tomato, cheese, and a side of crispy fries.",
        "price": 150.00,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkDafz2McwAzfW7gIV0vjgLJyRx2AuBc79rA&s"
    },
    {
        "id": 5,
        "name": "Vegetable Stir-Fry",
        "description": "A medley of fresh vegetables stir-fried in a tangy soy-ginger sauce, served over steamed rice.",
        "price": 110.00,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglVAdjSKlGW_lqoWhbHtHY7h6jAxjg-kgIw&s"
    },
    {
        "id": 6,
        "name": "BBQ Ribs",
        "description": "Tender pork ribs glazed with a smoky BBQ sauce, served with coleslaw and cornbread.",
        "price": 220.00,
        "image": "https://www.grillseeker.com/wp-content/uploads/2022/06/sauced-pork-ribs-on-a-baoking-sheet.jpg"
    },
    {
        "id": 7,
        "name": "Seafood Paella",
        "description": "A traditional Spanish dish of saffron-infused rice, mixed seafood, and chorizo.",
        "price": 300.00,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHGym4JnKdxeNYB3bIIHOqo_L16Juo1Pa1g&s"
    },
    {
        "id": 8,
        "name": "Mushroom Risotto",
        "description": "Creamy risotto cooked with wild mushrooms, parmesan, and a hint of truffle oil.",
        "price": 180.00,
        "image": "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/mushroom-risotto.jpg"
    },
    {
        "id": 9,
        "name": "Chicken Alfredo Pasta",
        "description": "Fettuccine pasta tossed in a creamy Alfredo sauce with grilled chicken and parsley.",
        "price": 160.00,
        "image": "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-V3.jpg"
    },
    {
        "id": 10,
        "name": "Chocolate Lava Cake",
        "description": "Rich chocolate cake with a gooey molten center, served with vanilla ice cream.",
        "price": 85.00,
        "image":"https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg"
    }
]
 
  return (
    <>
    <Header title="Menu" />
    <View style={[styles.container, { backgroundColor }]}>
      <FlatList
        data={menuItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({item})=>(
          <View style={styles.item}>
            <Image source={{uri:item.image}} style={styles.image} />
            <Text style={[styles.itemName, { color: textColor }]}>{item.name}</Text>
            <Text style={[styles.itemText, { color: textColor }]}>{item.description}</Text>
            <Text style={[styles.itemText, { color: textColor }]}>R{item.price.toFixed(2)}</Text>
            <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )
        }
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemName:{
    fontSize: '20%',
    fontWeight: 'bold',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    marginVertical: 4,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#ff6f61', 
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});