import React from 'react';
import _ from 'lodash';
import { getData, contains } from './api';
import { StyleSheet, Text, Image, View, TouchableOpacity, FlatList } from 'react-native';

import TabNav from './tabnav';

import { ListItem, SearchBar } from "react-native-elements";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.tabTouchHandler = this.tabTouchHandler.bind(this)
        this.state = {
            loading: true,
            displayedData: [],
            serverData: [],
            error: null,
            refreshing: false,
            currentTab: 'top',
            search: "",
        };

        this.searchInput = []
    }

    componentDidMount() {
        this.loadData("top", "");
    }

    async loadData(category = "top", searchText = "") { // default values
        let list = await getData(category, this.state.search);
        this.setState(
            { 
                loading: false,
                displayedData: list,
                serverData: list,
            }
        );
    }

    tabTouchHandler(tab) {
        if(tab != this.state.currentTab) {
            getData(tab);
        }
    }

    searchHandler = (searchText) => {
        console.log('search', searchText)
        const newData = _.filter(this.state.serverData, article => {
            return contains(article, searchText, newData)
        } );

        this.setState({
            displayedData: newData,
            search: searchText, newData}, () => this.loadData('search', searchText)); // to get latest query list/state
    }

    renderCard = (item) => {
        // console.log(item.main_image);
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
                    <SearchBar
                        placeholder="Type Here..."
                        lightTheme
                        onChangeText={text => this.searchHandler(text)}
                        onClear={text => this.searchHandler('')}
                        value={this.state.search}
                    />
                    <FlatList
                        data={this.state.displayedData}
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