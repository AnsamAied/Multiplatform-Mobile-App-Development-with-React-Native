import React, { Component } from "react";
import { View, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import Dishdetail from "./DishdetailComponent";

const MainNavigatorStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MenuNavigatorScreen() {
  return (
    <MainNavigatorStack.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#512DA8",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
      }}
    >
      <MainNavigatorStack.Screen name="Menu" component={Menu} />
      <MainNavigatorStack.Screen
        name="Dishdetail"
        component={Dishdetail}
        options={{ headerTitle: "Dish Detail" }}
      />
    </MainNavigatorStack.Navigator>
  );
}
function HomeNavigatorScreen() {
  return (
    <MainNavigatorStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#512DA8",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
      }}
    >
      <MainNavigatorStack.Screen name="Home" component={Home} />
    </MainNavigatorStack.Navigator>
  );
}
function ContactNavigatorScreen() {
  return (
    <MainNavigatorStack.Navigator
      initialRouteName="Contact"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#512DA8",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
      }}
    >
      <MainNavigatorStack.Screen
        name="Contact"
        component={Contact}
        options={{ headerTitle: "Contact us" }}
      />
    </MainNavigatorStack.Navigator>
  );
}
function AboutNavigatorScreen() {
  return (
    <MainNavigatorStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#512DA8",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
        },
      }}
    >
      <MainNavigatorStack.Screen
        name="About"
        component={About}
        options={{ headerTitle: "About us" }}
      />
    </MainNavigatorStack.Navigator>
  );
}
function MainNavigator() {
  return (
    <Drawer.Navigator
      drawerStyle={{ backgroundColor: "#D1C4E9" }}
      overlayColor="transparent"
    >
      <Drawer.Screen name="Home" component={HomeNavigatorScreen} />
      <Drawer.Screen name="About us" component={AboutNavigatorScreen} />
      <Drawer.Screen name="Menu" component={MenuNavigatorScreen} />
      <Drawer.Screen name="Conatct us" component={ContactNavigatorScreen} />
    </Drawer.Navigator>
  );
}
class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    );
  }
}

export default Main;
