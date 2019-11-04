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
    StatusBar,
} from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Form,
    Item,
    Input,
    Label,
    StyleProvider
} from 'native-base';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';

const App: () => React$Node = () => {
    return (
        <StyleProvider style={getTheme(commonColor)}>
            <Container style={{
                backgroundColor: '#c2fff1'
            }}>
                <StatusBar/>
                {/*<Header>*/}
                {/*<Left>*/}
                {/*<Button transparent>*/}
                {/*<Icon name='menu'/>*/}
                {/*</Button>*/}
                {/*</Left>*/}
                {/*<Body>*/}
                {/*<Title>Header</Title>*/}
                {/*</Body>*/}
                {/*<Right/>*/}
                {/*</Header>*/}
                <Header transparent />
                <Content contentContainerStyle={{
                    height:'100%',
                    display:'flex',
                    justifyContent:'flex-end'
                }} padder>
                    <Form>
                        <Item inlineLabel>
                            <Label>Username</Label>
                            <Input/>
                        </Item>
                        <Item inlineLabel last>
                            <Label>Password</Label>
                            <Input/>
                        </Item>
                        <Button rounded primary>
                            <Text>Get Started</Text>
                        </Button>
                    </Form>
                </Content>
                <Footer style={{
                    backgroundColor: 'transparent',
                    borderTopWidth:0
                }} >
                    <FooterTab>
                        <Button>
                            <Text>Create Account</Text>
                        </Button>
                        <Button>
                            <Text>Need Help?</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        </StyleProvider>

    );
};


export default App;
