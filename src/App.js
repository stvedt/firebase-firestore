import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      speed: 10
    }
  }
  componentDidMount(){
    
    const db = firebase.firestore();

    // Disable deprecated features
    db.settings({
      timestampsInSnapshots: true
    });

    // Realtime DB code
    // const database = firebase.database();
    // const rootRef = firebase.database().ref();
    // const speedRef = rootRef.child('speed');
    // console.log(database);
    // console.log(rootRef);

    // function writeUserData(userId, name, email, imageUrl) {
    //   firebase.database().ref('users/' + userId).set({
    //     username: name,
    //     email: email,
    //     profile_picture : imageUrl
    //   });
    // }

    // writeUserData(1, 'stephen', 'stvedt@gamil.com', 'google.png');
   
    // speedRef.on('value', snap => {
    //   this.setState({
    //     speed: snap.val()
    //   });
    // });

    // Add a second document with a generated ID.
    db.collection("users").add({
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });

    db.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });

  }
  render() {
    return (
      <h1>{this.state.speed}</h1>
    );
  }
}

export default App;
