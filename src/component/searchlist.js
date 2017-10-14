import React, { Component } from 'react';
import { Container, Header, Item, Right, List, Input, Icon, Button, ListItem, Thumbnail, Text, Content, View, Footer, FooterTab } from 'native-base';
import { } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import ListItems from './listitems';

export default class SearchList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      val: '',
      index: "",
      arr: [],
      srchvalue: ''

    }
  }


  ComponentWillMount() {
    const arr = [];
    const { currentUser } = firebase.auth();
    const { srchvalue } = this.state;
    firebase.database().ref(`/users/${currentUser.uid}/Patient Data`)
      .orderByChild("name").startAt({ srchvalue }).on("value", (data) => {
        for (var x in data.val) {
          arr.push(data.val[x])
          this.setState({ arr: arr })
          console.log("arr", arr)
        }
      })
  }

  ListSubmit(i, v) {
    // <ListItems index={i} val={v} />
    Actions.listitems()
  }

  render() {


    return (
      <Container >
        <Header searchBar rounded style={{ backgroundColor: '#00bfa5' }}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChangeText={(value) => { this.setState({ srchvalue: value }) }} />
            <Icon name="arrow-forward" onPress={() => alert("lists")} />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          {/* {this.state.arr && this.state.arr.map((val, index) => { return (*/}
          
              < List  >
            <ListItem onPress={() => this.ListSubmit()}>
              <Thumbnail small source={require('../img/People-Patient-Male-icon.png')} style={{ marginTop: 6, marginRight: 5 }} />
              <Text style={{ color: '#00acc1', justifyContent: "center", alignItems: 'center' }}>{"Muhammad karim"}</Text>
              <Text style={{ marginLeft: 40, fontSize: 12 }}>{"2017-09-02 "}</Text>
            </ListItem>

            <ListItem onPress={() => this.ListSubmit()}>
              <Thumbnail small source={require('../img/People-Patient-Male-icon.png')} style={{ marginTop: 6, marginRight: 5 }} />
              <Text style={{ color: '#00acc1', justifyContent: "center", alignItems: 'center' }}>{"usama khan"}</Text>
              <Text style={{ marginLeft: 40, fontSize: 12 }}>{"2017-08-15 "}</Text>
            </ListItem>

            <ListItem onPress={() => this.ListSubmit()}>
              <Thumbnail small source={require('../img/People-Patient-Male-icon.png')} style={{ marginTop: 6, marginRight: 5 }} />
              <Text style={{ color: '#00acc1', justifyContent: "center", alignItems: 'center' }}>{"zainab bibi"}</Text>
              <Text style={{ marginLeft: 40, fontSize: 12 }}>{"2017-06-02 "}</Text>
            </ListItem>

            <ListItem onPress={() => this.ListSubmit()}>
              <Thumbnail small source={require('../img/People-Patient-Male-icon.png')} style={{ marginTop: 6, marginRight: 5 }} />
              <Text style={{ color: '#00acc1', justifyContent: "center", alignItems: 'center' }}>{"Abdul salam"}</Text>
              <Text style={{ marginLeft: 40, fontSize: 12 }}>{"2017-05-12 "}</Text>
            </ListItem>

            <ListItem onPress={() => this.ListSubmit()}>
              <Thumbnail small source={require('../img/People-Patient-Male-icon.png')} style={{ marginTop: 6, marginRight: 5 }} />
              <Text style={{ color: '#00acc1', justifyContent: "center", alignItems: 'center' }}>{"Saleem Raza"}</Text>
              <Text style={{ marginLeft: 40, fontSize: 12 }}>{"2017-02-26 "}</Text>
            </ListItem>
          </ List>

          {/* )})} */}
        </Content>


        <View>
          <Button full style={{ backgroundColor: '#00bfa5' }} onPress={() => Actions.dashboard()}>
            <Text style={{ justifyContent: 'center', alignItems: 'center' }}>Back</Text>
          </Button>
        </View>

      </Container>
    )
  }
}