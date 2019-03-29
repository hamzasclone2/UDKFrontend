import React from 'react';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert,
TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';

import StoryScreen from './story';

import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import { List, ListItem, SearchBar } from "react-native-elements";

//The opening screen for the app
class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: '',
            error: null,
            refreshing: false
        };
    }

    componentDidMount() {
        // move this into loading screen
        this.asyncData()
    }

    async asyncData() {
        let response = await axios.get("http://104.248.235.9:3001/api/top");
        list = response.data
        return this.setState(
            { loading: false, data: list }
        );
    }

    renderCard = (item) => {
        console.log(item)
        return (
            <TouchableOpacity style={styles.Card}
                onPress={() => this.props.navigation.navigate('Story', item)}>    
                <ListItem title={item.headline}/>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <ScrollView>
                <Text style={{textAlign: 'center'}}>Top Stories</Text>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => this.renderCard(item)}
                    keyExtractor={(item, index) => (item.id).toString()}
                />        
            </ScrollView>
        );
    }
}



//Allows us to use the UDK logo
class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('./assets/udk.jpg')}
                style={{width: 40, height: 40}}
            />
        );
    }
}

//Allows us to switch pages and have a back button
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

// tabs should only be on home screen, and should probably be a component, we are only changing the data on the home screen, not changing which screen we are on
//Allows us to have a tabs on the bottom
export default createAppContainer(createBottomTabNavigator(
    {
        //Home: HomeScreen,
        //Story: StoryScreen
        Home: {screen: AppNavigator},
        News: {screen: StoryScreen},
        Sports: {screen: StoryScreen},
        Arts: {screen: StoryScreen},
        Opinion: {screen: StoryScreen}
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'News') {
          iconName = `ios-paper`;
        } else if (routeName === 'Sports') {
          iconName = `ios-trophy`;
        } else if (routeName === 'Arts') {
          iconName = `ios-color-palette`;
        } else if (routeName === 'Opinion') {
          iconName = `ios-chatbubbles`;
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
    }
));

const styles = StyleSheet.create({
    Card: {
        borderWidth: 1,
        borderColor: '#cccccc',
        backgroundColor: '#cccccc',
    },
});
