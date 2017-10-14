import React, {Component} from 'react';
import RouterCom from "./Routes";
import * as firebase from 'firebase';

export default class App extends Component{
  componentWillMount(){
        var config = {
            apiKey: "AIzaSyAangyRcpcryoBA2OfIOKZfvVcGFCBA-Eo",
            authDomain: "patienttrackapp.firebaseapp.com",
            databaseURL: "https://patienttrackapp.firebaseio.com",
            projectId: "patienttrackapp",
            storageBucket: "patienttrackapp.appspot.com",
            messagingSenderId: "675553114684"
          };
          firebase.initializeApp(config);
    }

  render(){
    return(
      <RouterCom/>
    )
  }
}