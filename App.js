import React from 'react';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import StoryScreen from './story';
import TabNav from './tabnav';

import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import { List, ListItem, SearchBar } from "react-native-elements";

//The opening screen for the app
class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.tabTouchHandler = this.tabTouchHandler.bind(this)
        this.state = {
            loading: true,
            data: '',
            error: null,
            refreshing: false,
            currentTab: 'top',
        };
    }

    componentDidMount() {
        this.initData();
    }

    async initData() {
        list = await this.asyncData('top');
        this.setState(
            { 
                loading: false,
                data: list,
                currentTab: 'top',
            }
        );
    }

    async asyncData(call) {
        let response;
        if(call == 'top') {
            response = await axios.get("http://104.248.235.9:3001/api/top");
        } else if(call == 'sports') {
            response = await axios.get("http://104.248.235.9:3001/api/sports");
        } else if(call == 'arts') {
            response = await axios.get("http://104.248.235.9:3001/api/opinion");
        }
        list = response.data
        return list;
        /*
        this.setState(
            { 
                loading: false,
                data: list,
                currentTab: call,
            }
        );
        */
    }

    tabTouchHandler(tab) {
        if(tab != this.state.currentTab) {
            this.asyncData(tab);
        }
    }

    renderCard = (item) => {
        return (
            <TouchableOpacity style={styles.Card}
                onPress={() => this.props.navigation.navigate('Story', item)}>    
                <ListItem title={item.headline}/>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1.5}}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => this.renderCard(item)}
                        keyExtractor={(item, index) => (item.id).toString()}
                    />    
                </View>  
                <View style={styles.Tabs}>
                    <TabNav tabTouchCallback={this.tabTouchHandler}></TabNav>
                </View>  
            </View>
        );
    }
}



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

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
    Card: {
        borderWidth: 1,
        borderColor: '#cccccc',
        backgroundColor: '#cccccc',
    },
    Tabs: {
        flex: 0.1,
        borderWidth: 1,
        borderColor: '#cccccc',
    }
});
