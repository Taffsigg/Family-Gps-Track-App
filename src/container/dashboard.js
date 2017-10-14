import React ,  {Component} from "react";
import {} from 'native-base';
import {Actions} from "react-native-router-flux";
import DrawerComp from '../component/drawer';
import MapView from 'react-native-maps';


export default class Dashboard extends Component {

    constructor(props){
    super(props)
    }

render(){
    retrun(
<DrawerComp path='Home'>

<MapView
initialRegion={{
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}}
/>

</DrawerComp>
    )    
}

}