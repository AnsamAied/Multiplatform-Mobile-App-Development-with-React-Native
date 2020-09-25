import React, { Component } from "react";
import {
  View,
  Platform,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import Dishdetail from "./DishdetailComponent";
import { Icon } from "react-native-elements";
import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import Reservation from './ReservationComponent';
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
})
const MainNavigatorStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MenuIcon = (props) => {
  return (
    <Icon
      name="menu"
      size={24}
      color="white"
      onPress={() => props.navigation.toggleDrawer()}
    />
  );
};
const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <View style={styles.drawerHeader}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("./images/logo.png")}
          style={styles.drawerImage}
        />
      </View>
      <View style={{ flex: 2 }}>
        <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
      </View>
    </View>
    <DrawerItemList {...props} />
  </ScrollView>
);

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
      <MainNavigatorStack.Screen
        name="Menu"
        component={Menu}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Icon
              name="menu"
              size={24}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
      <MainNavigatorStack.Screen
        name="Dishdetail"
        component={Dishdetail}
        options={{ headerTitle: "Dish Detail" }}
      />
    </MainNavigatorStack.Navigator>
  );
}
function HomeNavigatorScreen(props) {
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
      <MainNavigatorStack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerLeft: () => <MenuIcon navigation={navigation} />,
        })}
      />
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
        name="Contact us"
        component={Contact}
        options={({ navigation }) => ({
          headerLeft: () => <MenuIcon navigation={navigation} />,
        })}
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
        name="About us"
        component={About}
        options={({ navigation }) => ({
          headerLeft: () => <MenuIcon navigation={navigation} />,
        })}
      />
    </MainNavigatorStack.Navigator>
  );
}
function ReservationNavigatorScreen() {
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
        name="Reservation"
        component={Reservation}
        options={({ navigation }) => ({
          headerLeft: () => <MenuIcon navigation={navigation} />,
        })}
      />
    </MainNavigatorStack.Navigator>
  );
}
function MainNavigator() {
  return (
    <Drawer.Navigator
      drawerStyle={{ backgroundColor: "#D1C4E9" }}
      overlayColor="transparent"
      drawerContent={props => <CustomDrawerContentComponent {...props}/>}
    >
    
      <Drawer.Screen
        name="Home"
        component={HomeNavigatorScreen}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon name="home" type="font-awesome" size={24} color={tintColor} />
          ),
        }}
      />
      <Drawer.Screen
        name="Reservation"
        component={ReservationNavigatorScreen}
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon   name='cutlery'
            type='font-awesome'            
            size={24}
            iconStyle={{ color: tintColor }} />
          ),
        }}
      />
      <Drawer.Screen
        name="About us"
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon
              name="info-circle"
              type="font-awesome"
              size={24}
              color={tintColor}
            />
          ),
        }}
        component={AboutNavigatorScreen}
      />
      <Drawer.Screen
        name="Menu"
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon name="list" type="font-awesome" size={24} color={tintColor} />
          ),
        }}
        component={MenuNavigatorScreen}
      />
      <Drawer.Screen
        name="Conatct us"
        options={{
          drawerIcon: ({ tintColor }) => (
            <Icon
              name="address-card"
              type="font-awesome"
              size={22}
              color={tintColor}
            />
          ),
        }}
        component={ContactNavigatorScreen}
      />
    </Drawer.Navigator>
  );
}
class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }
  
  render() {
    return (
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
