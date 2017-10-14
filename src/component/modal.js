import React ,{Component} from 'react';
import { Text, Modal } from 'react-native';
import {CardItem,Button, View } from 'native-base'
import {Actions} from 'react-native-router-flux';

export default class SignUpTermModal extends Component{
    render(){
        const visible = true
    return (

        <Modal
            visible = {visible}
            transparent
            animationType="slide"
            onRequestClose={() => {true}}
        >
            <View style={styles.containerStyle}>
                <CardItem>
                    <Text style={styles.textStyle}>All Terms</Text>
                </CardItem>
            </View>
        </Modal>
    );
}
}

const styles = {
    CardSectionStyle: {
        justifyContent: 'center ',
        alignItems:'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba( 0, 0, 0, 0.75)',
        postion: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
};

