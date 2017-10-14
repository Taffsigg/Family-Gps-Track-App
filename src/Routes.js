import React from 'react';
import { View, ScrollView } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SignUp from './component/signup';
import Login from './component/login';
import Dashboard from './container/dashboard';




const RouterCom = () => {


    return (
        <Router >
            <Scene key='main'>

            
                <Scene key='login' component={Login} hideNavBar={true}  initial />
                <Scene key='signup' component={SignUp} hideNavBar={true}   />
                <Scene key='dashboard' component={Dashboard} hideNavBar={true}   />

            </Scene>
        </Router>
    );
};

export default RouterCom;