import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import userImg from '../assets/rodrigo.jpg';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header(){
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Wesley</Text>


            </View>

            <Image source={userImg} style={styles.image}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight()
    },

    image: {
        width: 80,
        height: 80,
        borderRadius: 30,
    },

    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading
    },

    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40

    }

});