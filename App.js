import React, { Component } from "react";
import { Text, View } from "react-native";
import { Header, Button, Spinner } from "./src/components/common";
import firebase from "firebase";
import LoginForm from "./src/components/LoginForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBjogCyAHhwgoKD7JqummRp4ZKhGkD2CCM",
      authDomain: "authentication-240d7.firebaseapp.com",
      databaseURL: "https://authentication-240d7.firebaseio.com",
      projectId: "authentication-240d7",
      storageBucket: "authentication-240d7.appspot.com",
      messagingSenderId: "209107509854"
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;

      default:
        return (
          <View>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
