import React, { Component } from 'react';
import {
    Container, Content, Item, Input, Button,
    Text, View, Form, CardItem, Spinner, Label, Title, Icon, Body
} from 'native-base';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';


export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        }
    }


    onButtonPress() {
        const { email, password, error, loading } = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password).then(
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    console.log(user)
                    this.setState({ loading: true })
                     Actions.dashboard()
                } else {
                    console.log("user Not Fount")
                    this.setState({loading:false})
                }

            }))
            .catch(
            (e) => {
                this.setState({ error: e.message })
            })



    }
    renderButton() {
        if (this.state.loading) {
            return <Spinner size="large" style={styles.spinnerStyle} />;
        }
        return (
            <Button block info style={styles.buttonStyle} onPress={this.onButtonPress.bind(this)} >
                <Text> Sign in </Text>
            </Button>
        );
    }


    render() {
        return (
            <Image source={require('../image/blurry_abstract_background_mobile_hd_wallpaper14_by_vactual-d9xaizf.jpg')} style={{ width: 600, height: 720 }}>
                <Container>


                   <Icon name='ios-navigate'  style={{fontSize: 80, color: 'white',position :"absolute",top:50,right:120,left:140,bottom:80}}/>


                    <Content style={styles.containerStyle}>
                        <Form>
                           
                            <CardItem>
                                <Item Icon floatingLabel>
                                    <Label>Email</Label>
                                     <Icon name="person"/>
                                    <Input
                                        onChangeText={(value) => this.setState({ email: value })}
                                        value={this.state.email} />
                                </Item>
                            </CardItem>

                            <CardItem>
                                <Item Icon floatingLabel>
                                    <Label>Password</Label>
                                    <Icon name="lock"/>
                                    <Input
                                        secureTextEntry
                                        onChangeText={(value) => this.setState({ password: value })}
                                        value={this.state.password}
                                    />
                                </Item>

                            </CardItem>
                        </Form>

                        <CardItem>

                                {this.renderButton()}
                                <Text style={styles.errorTextStyle} >
                                    {this.state.error}
                                </Text>
                            </CardItem>

                            <CardItem>
                                <Button transparent warning onPress={() => Actions.signup()} style={styles.buttonStyle}>
                                    <Text> Create account </Text>
                                </Button>

                            </CardItem>
                    </Content>
                </Container>
            </Image>
        )
    }
}


const styles = {
    errorTextStyle: {
        fontSize: 16,
        alignSelf: 'center',
        color: 'red',
        marginTop: 50,
        marginLeft: -270
    },
    containerStyle: {

        marginTop: 140,
        marginLeft: 5,
        marginRight: 5,
        paddingTop: 10,
        width: 350,
        opacity: 0.5,
        borderRadius: 20
    },
    buttonStyle: {
        marginLeft: 80,
        width: 180,
        alignItems:'center'
    },
    textStyle: {
        marginTop: -10,
        color: 'green',
        marginLeft: 120,
    },
    textStyle2: {
        marginTop: -15,

    },
    spinnerStyle: {
        marginLeft: 150
    }
}