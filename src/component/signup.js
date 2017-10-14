import React, { Component } from 'react';
import {
    Container, Content, Item, Input, Button,
    Text, View, Form, CardItem, Spinner,
    Label, Title, Icon, Body, ListItem, CheckBox
} from 'native-base';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';


export default class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            loading: false,
            error: ''
        }

    }


    onButtonPress() {
        const { email, password, error, loading } = this.state;
        console.log(this.state);
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                this.setState({ loading: true })
                console.log(user)
                Actions.login();
            })

            .catch((e) => this.setState({ error: e.message }))


    }
    renderButton() {
        if (this.state.loading) {
            return <Spinner size="large" style={styles.spinnerStyle} />;
        }
        return (
            <Button block info style={styles.buttonStyle} onPress={this.onButtonPress.bind(this)} >
                <Text> SignUp </Text>
            </Button>

        );
    }
    render() {
        return (
            <Image source={require('../image/blurry_abstract_background_mobile_hd_wallpaper14_by_vactual-d9xaizf.jpg')} style={{ width: 600, height: 720 }}>
                <Container >
                    <Icon name='ios-navigate' style={{ fontSize: 80, color: 'white', position: "absolute", top: 20, right: 120, left: 140, bottom: 80 }} />
                    <Content style={styles.containerStyle}>
                        <Form >
                            <CardItem>
                                <Item Icon floatingLabel>
                                    <Label>User Name</Label>
                                    <Icon name="person"/>
                                    <Input
                                        onChangeText={(value) => this.setState({ username: value })}
                                        value={this.state.username}
                                        required />
                                </Item>
                            </CardItem>

                            <CardItem>
                                <Item Icon floatingLabel>
                                    <Label>Email</Label>
                                    <Icon name="mail"/>
                                    <Input

                                        onChangeText={(value) => this.setState({ email: value })}
                                        value={this.state.email}
                                        required
                                    />
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
                                        required
                                    />
                                </Item>
                            </CardItem>

                            <CardItem>
                                {this.renderButton()}

                                <Text style={styles.errorTextStyle} >
                                    {this.state.error}
                                </Text>
                            </CardItem>

                        </Form>
                        <Button transparent light bordered full style={{ marginTop: 10 }} onPress={() => Actions.login()}><Text>Back</Text></Button>
                    </Content>

                </Container>
            </Image>
        );
    };
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

        marginTop: 120,
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
        alignItems: 'center'
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
};