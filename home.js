import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, Image, View, TouchableOpacity, FlatList } from 'react-native';

import TabNav from './tabnav';

import { ListItem } from "react-native-elements";

export default class HomeScreen extends React.Component {
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
    }

    tabTouchHandler(tab) {
        if(tab != this.state.currentTab) {
            this.asyncData(tab);
        }
    }

    renderCard = (item) => {
        console.log(item.main_image);
        if(item.main_image == null) {
            return (
                <TouchableOpacity style={styles.Card}
                    onPress={() => this.props.navigation.navigate('Story', item)}>  
                    
                    <ListItem title={item.headline}/>
                </TouchableOpacity>
            );           
        } else {
            return (
                <TouchableOpacity style={styles.Card}
                    onPress={() => this.props.navigation.navigate('Story', item)}>  
                    
                    <ListItem leftAvatar={{ rounded: false, size: "large", source: { uri: item.main_image } }} title={item.headline}/>
                </TouchableOpacity>
            );
        }

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