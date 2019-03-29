import React from 'react';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert,
TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';

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
        let response = await axios.get("http://104.248.235.9:3001/api");
        list = response.data
        return this.setState(
            { loading: false, data: list }
        );
    }

    renderCard = (item) => {
        return (
            <TouchableOpacity style={styles.Card}
                onPress={() => this.props.navigation.navigate('Story')}>    
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

//A page for a default story
class StoryScreen extends React.Component {

    render(){
        return (
            <ScrollView style={{backgroundColor: '#D3D3D3'}}>
                <View style ={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin:5
                }}>
                <Text style={{fontSize:18}}>{'Kansas overwhelms short-handed West Virginia roster in 78-53 victory'}</Text>
                <Text style={{fontSize:10}}>Maddy Tannahill | @maddytannahill   Feb 16, 2019</Text>
                <Image source={{uri: "https://bloximages.chicago2.vip.townnews.com/kansan.com/content/tncms/assets/v3/editorial/5/54/55450714-3241-11e9-8ca1-8bc32dfb7918/5c689a8b9c949.image.jpg?resize=750%2C968", width: 230, height: 296}} />
                <Text style={{fontSize:10}}>Redshirt sophomore guard K.J. Lawson celebrates after hitting a three against West Virginia. The Jayhawks defeated the Mountaineers 78-53 on Saturday, Feb. 16.</Text>
                <Text style={{fontSize:10, color:"gray"}}>Chance Parker/KANSAN</Text>
                <Text style={{fontSize:12}}>{'\nWorking with a four-point margin over West Virginia, freshman guard Quentin Grimes drove into a Mountaineer-crowded lane. Immediately double-teamed, the freshman dropped off a nasty no-look pass to junior forward Mitch Lightfoot who brought the roof down in Allen Fieldhouse with a massive dunk, extending the lead to 13-7 for the Jayhawks.'}</Text>
                <Text style={{fontSize:12}}>{'\nFrom this moment, Kansas went on a 14-2 run and took dominating control over the Mountaineers, resulting in a 78-53 victory for the Jayhawks.'}</Text>
                </View>
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

//Some CSS-like styling for some elements
const styles = StyleSheet.create({
    Card: {
        borderWidth: 1,
        borderColor: '#00ff33',
        backgroundColor: '#cccccc',
    },
});
