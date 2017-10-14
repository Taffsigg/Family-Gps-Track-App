import React, { Component } from 'react';
import DrawerCom from '../component/drawer';
import {
  Container, Header, Title, Content, View,
  Drawer, DeckSwiper, Card, CardItem, Thumbnail, Footer,
  FooterTab, Button, Form, Item, Input, Left, H3, List, ListItem,
  Right, Body, Icon, Text, Spinner, Switch
} from 'native-base';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';


export default class ListItems extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }


  render() {


    return (
      <DrawerCom path={"ListItems"} action={() => Actions.searchlist()} actionname={"Back"} >
        <View>

          <Image source={require("../img/2.jpg")}
            style={{ height: 250, width: 400, opacity: 0.85 }}>
          </Image>
                <List  >
            <ListItem icon >
              <Left>
                <Icon name="person" style={{ color: '#80cbc4' }} />
              </Left>
              <Body>
                <Text>Patient Name:</Text>
              </Body>
              <Right>
                <Text>
                  {"Muhammad karim"}
                </Text>
              </Right>
            </ListItem>

            <ListItem icon >
              <Left>
                <Icon name="keypad" style={{ color: '#dce775' }} />
              </Left>
              <Body>
                <Text>Cell No</Text>
              </Body>
              <Right>
                <Text>
                  {"03128710348"}
                </Text>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="eye" style={{ color: 'lightblue' }} />
              </Left>
              <Body>
                <Text>Gender</Text>
              </Body>
              <Right>
                <Text>
                  {"Male"}
                </Text>
              </Right>
            </ListItem>
            <ListItem icon >
              <Left>
                <Icon name="bicycle" style={{ color: '#e57373' }} />
              </Left>
              <Body>
                <Text>Disease</Text>
              </Body>
              <Right>
                <Text>
                  {"Fever"}
                </Text>
              </Right>
            </ListItem>
            <ListItem icon >
              <Left>
                <Icon name="alarm" style={{ color: '#e57373' }} />
              </Left>
              <Body>
                <Text>Date & Time</Text>
              </Body>
              <Right>
                <Text>
                  {"2017-02-26" + "12:27:57 PM"}
                </Text>
              </Right>
            </ListItem>
          </List>
        </View>
      </DrawerCom>
    )
  }


}
