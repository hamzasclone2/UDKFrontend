import React from 'react';
import { Image } from 'react-native';

import HomeScreen from './home';
import StoryScreen from './story';

import {createStackNavigator, createAppContainer} from 'react-navigation';

class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('./assets/udk.jpg')}
                style={{width: 125, height: 40}}
            />
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Story: StoryScreen
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#092662'
            },
            headerTitle: <LogoTitle />,
            headerTintColor: '#fff',
        }
    }
);

export default createAppContainer(AppNavigator);


