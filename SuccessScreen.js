// SuccessScreen.js
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Thay ảnh success của bạn ở đây */}
      <Image
        source={require("./assets/success.png")}
        style={styles.successImage}
      />
      <Text style={styles.title}>Đặt hàng thành công!</Text>
      <Text style={styles.subTitle}>Cảm ơn bạn đã mua hàng.</Text>

      <TouchableOpacity
        style={styles.backHomeButton}
        onPress={() => navigation.navigate("HomeMain")} // quay lại màn hình Home
      >
        <Text style={styles.backHomeButtonText}>Quay về trang chủ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  successImage: {
    width: 150,
    height: 150,
    marginBottom: 30,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  backHomeButton: {
    backgroundColor: "#4F46E5",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  backHomeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
