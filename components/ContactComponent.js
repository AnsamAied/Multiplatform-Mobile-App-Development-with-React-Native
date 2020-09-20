import React, { Component } from "react";
import { Text, ScrollView, View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
class Contact extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Card>
            <Card.Title>Contact Information</Card.Title>
            <Card.Divider />
            <Text style={styles.marginBottom10}>121, Clear Water Bay Road</Text>
            <Text style={styles.marginBottom10}>Clear Water Bay, Kowloon</Text>
            <Text style={styles.marginBottom10}>HONG KONG</Text>
            <Text style={styles.marginBottom10}>Tel: +852 1234 5678</Text>
            <Text style={styles.marginBottom10}>Fax: +852 8765 4321</Text>
            <Text style={styles.marginBottom10}>Email:confusion@food.net</Text>
          </Card>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  marginBottom10: {
    marginBottom: 10,
  },
});
export default Contact;
