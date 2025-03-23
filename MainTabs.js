// MainTabs.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import HomeScreen from "./HomeScreen";
import ScanScreen from "./ScanScreen";
import CartScreen from "./CartScreen";       // Màn hình cart
import PaymentScreen from "./PaymentScreen"; // Màn hình payment
import SuccessScreen from "./SuccessScreen"; // Màn hình success

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Màn hình Placeholder cho các tab khác
const PlaceholderScreen = ({ title }) => (
  <View style={styles.centered}>
    <Text>{title}</Text>
  </View>
);

/*
  Stack Navigator cho Home
  Đổi name="HomeMain" => name="HomeScreen"
  để khi navigate, ta gọi: navigation.navigate("Home", { screen: "HomeScreen" })
*/
function HomeStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          headerRight: () => (
            <TouchableOpacity
              style={styles.scanButton}
              onPress={() => navigation.navigate("Scan")}
            >
              <Ionicons name="scan" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerStyle: { backgroundColor: "#4F46E5" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen name="Scan" component={ScanScreen} />
    </Stack.Navigator>
  );
}

// Stack Navigator cho Cart
function CartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartMain"
        component={CartScreen}
        options={{
          title: "Giỏ hàng",
          headerStyle: { backgroundColor: "#4F46E5" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          title: "Thanh toán",
          headerStyle: { backgroundColor: "#4F46E5" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Success"
        component={SuccessScreen}
        options={{
          headerShown: false, // Ẩn header nếu muốn
        }}
      />
    </Stack.Navigator>
  );
}

export default function MainTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Home") iconName = "home";
            else if (route.name === "Notifications") iconName = "notifications-outline";
            else if (route.name === "Orders") iconName = "receipt-outline";
            else if (route.name === "Cart") iconName = "cart-outline";
            else if (route.name === "Profile") iconName = "person-outline";

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#4F46E5",
          tabBarInactiveTintColor: "#666",
          tabBarStyle: { height: 60, paddingBottom: 10 },
        })}
      >
        {/** Tab Home, chứa HomeStack (bên trong có HomeScreen & ScanScreen) */}
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Notifications"
          component={() => <PlaceholderScreen title="Notifications" />}
        />
        <Tab.Screen
          name="Orders"
          component={() => <PlaceholderScreen title="Orders" />}
        />
        {/** Tab Cart, chứa CartStack (bên trong có CartMain, Payment, Success) */}
        <Tab.Screen
          name="Cart"
          component={CartStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Profile"
          component={() => <PlaceholderScreen title="Profile" />}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scanButton: {
    backgroundColor: "#4F46E5",
    padding: 10,
    borderRadius: 20,
    marginRight: 15,
  },
});
