import React, { Component } from 'react';
import {
  Container, Header, Title, Content, View,
  Drawer, DeckSwiper, Card, CardItem, Thumbnail, Footer,
  FooterTab, Button, Form, Item, Input, Left, H3, List, ListItem, Label,
  Right, Body, Icon, Text, Spinner, Switch, Tabs, Tab, TabHeading
} from 'native-base';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';



export default class DrawerComp extends Component {
  constructor(props) {
    super(props)
    this.state={
      user:''
    }
  }

componentWillMount(){
  const {currentUser} = firebase.auth()
  firebase.database.ref().user(`/users/${currentUser.uid}/AuthUser`).on("value", (data) => {
this.setState({user:data.userName})
  })
}

  LogoutPress(){
    firebase.auth().signOut().then(()=> {
      Actions.login()
    }).catch((error)=>{
      console.log(error.message)
    });
  }

  render() {

    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };


    
    return (

      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={




          <View style={{ backgroundColor: '#f1f8e9', flex: 1 }} >
            <Image source={require("")}
              style={{ width: 300, height: 200 }} />

            <View style={{ marginTop: 10 }}>
              <List>
                <ListItem>
                  <Thumbnail small source={require('')} style={{ marginTop: 6, marginRight: 5 }} />
                  <Text style={{ color: '#00acc1', justifyContent: "center", alignItems: 'center' }}>Dr.{this.user}</Text>
                </ListItem>
                <ListItem icon onPress={() => Actions.dashboard()}>
                  <Left>
                    <Icon name="home" style={{ color: '#80cbc4' }} />
                  </Left>
                  <Body>
                    <Text>Home</Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>

                <ListItem icon onPress={() => Actions.searchlist()} >
                  <Left>
                    <Icon name="pie" style={{ color: '#dce775' }} />
                  </Left>
                  <Body>
                    <Text>Circle</Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem icon onPress={() => Actions.patientform()}>
                  <Left>
                    <Icon name="navigate" style={{ color: 'lightblue' }} />
                  </Left>
                  <Body>
                    <Text>Notifications</Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
                <ListItem icon onPress={this.LogoutPress.bind(this)} >
                  <Left>
                    <Icon name="logout" style={{ color: '#e57373' }} />
                  </Left>
                  <Body>
                    <Text>Logout</Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              </List>
            </View>
          </View>
        }
        onClose={() => this.closeDrawer} >



        <Container>


          <Header style={style.Header}>
            <Left>
              <Button transparent onPress={() => openDrawer()}>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>

              <Title style={{ fontSize: 24, fontFamily: 'cursive' }}>
               GPS
            <Icon name='map-marker' style={{ color: '#4caf50' }} />
                <Text style={{ flex: 1, fontSize: 14, color: '#ffffff', fontFamily: 'cursive' }}>map</Text>
              </Title>

            </Body>
            <Right>

              <Text style={{ fontSize: 16, color: '#ffffff', fontFamily: 'cursive' }}>{this.props.path}</Text>

            </Right>
          </Header>

          <Content>
            {this.props.children}
          </Content>
          <View>
            <Button full style={{ backgroundColor: '#00bfa5' }} onPress={this.props.action} >
              <Text>{this.props.actionname}</Text>
            </Button>
          </View>
        </Container>
      </Drawer>
    );
  }
}

var style = StyleSheet.create({
  Header: {
    backgroundColor: '#00bfa5'
  }
})
