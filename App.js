/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions
} from 'react-native';
import theme from './theme/theme'
import { ThemeProvider, Button, Input } from 'react-native-elements';

const App: () => React$Node = () => {
    return (
        <ThemeProvider theme={theme}>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.content}>
                        <Input placeholder={"Username"}/>
                        <Input placeholder={"Password"}/>
                        <Button title="Get Started" />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ThemeProvider>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#54ffdb',
    },
    content: {
        height:Dimensions.get('window').height -20 ,
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 10
    }
});

export default App;
