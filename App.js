import React, { Component } from "react";
import { Text, View } from "react-native";
import { Header } from "./src/components/common";
import firebase from "firebase";
import LoginForm from "./src/components/LoginForm";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBjogCyAHhwgoKD7JqummRp4ZKhGkD2CCM",
      authDomain: "authentication-240d7.firebaseapp.com",
      databaseURL: "https://authentication-240d7.firebaseio.com",
      projectId: "authentication-240d7",
      storageBucket: "authentication-240d7.appspot.com",
      messagingSenderId: "209107509854"
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
