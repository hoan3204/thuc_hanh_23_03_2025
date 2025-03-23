// CartScreen.js
import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";

const sampleCartData = [
  {
    id: "1",
    name: "Orange Juice",
    price: 3.99,
    quantity: 2,
    image: require("./assets/images.jpg"), // Thay bằng ảnh thật của bạn
  },
  {
    id: "2",
    name: "Apple Juice",
    price: 4.99,
    quantity: 1,
    image: require("./assets/images.jpg"),
  },
];

const CartScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      </View>
      <Text style={styles.itemQuantity}>x{item.quantity}</Text>
    </View>
  );

  // Tính tổng
  const total = sampleCartData.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        data={sampleCartData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.flatList}
      />

      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => navigation.navigate("Payment")}
        >
          <Text style={styles.checkoutButtonText}>Tiếp tục thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  flatList: {
    flexGrow: 0,
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
  },
  itemPrice: {
    fontSize: 14,
    color: "#666",
  },
  itemQuantity: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  footer: {
    marginTop: "auto",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "right",
  },
  checkoutButton: {
    backgroundColor: "#4F46E5",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
