// PaymentScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const PaymentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thanh toán</Text>

      {/* Giả sử có các lựa chọn Payment Method, Shipping Address... */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Phương thức thanh toán</Text>
        <Text style={styles.sectionContent}>•••• •••• •••• 1234 - VISA</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Địa chỉ giao hàng</Text>
        <Text style={styles.sectionContent}>123, Đường ABC, Quận 1, TP.HCM</Text>
      </View>

      <TouchableOpacity
        style={styles.placeOrderButton}
        onPress={() => navigation.navigate("Success")}
      >
        <Text style={styles.placeOrderButtonText}>Đặt hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#F3F4F6",
    padding: 15,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 14,
    color: "#666",
  },
  placeOrderButton: {
    backgroundColor: "#4F46E5",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: "auto",
  },
  placeOrderButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
