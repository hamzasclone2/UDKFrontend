import React from 'react';
import _ from 'lodash';
import { getData, contains } from './api';
import { StyleSheet, Text, Image, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

import TabNav from './tabnav';

import { ListItem, SearchBar } from "react-native-elements";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.tabTouchHandler = this.tabTouchHandler.bind(this)
        this.state = {
            loading: true,
            numDisplayed: 40,
            displayedData: [],
            serverData: [],
            error: null,
            refreshing: false,
            searching: false,
            currentTab: 'top',
            search: "",
        };

        this.searchInput = []
    }

    componentDidMount() {
        this.setState( {loading: true} );
        this.loadData();
    }

    loadData(category = "top", searchText = "") { // default values
        getData(category, searchText)
        .then((data) => { 
            this.setState({
                loading: false,
                numDisplayed: 40,
                displayedData: data.slice(1,40),
                serverData: data,
            })
        })
        .catch((error) => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        });
    }

    tabTouchHandler(tab) {
        if(tab != this.state.currentTab) {
            this.setState({
                loading: true,
            })

            getData(tab)
            .then((data) => {
                this.setState({
                    loading: false,
                    numDisplayed: 40,
                    displayedData: data.slice(1,40),
                    serverData: data,
                    currentTab: tab,
                })
            });
        }
    }

    searchHandler = (searchText) => {
        const newData = _.filter(this.state.serverData, article => {
            return contains(article, searchText, newData)
        } );

        this.setState({
            displayedData: newData,
            search: searchText, newData
        });// () => this.loadData('search', searchText)); // to get latest query list/state
    }

    renderCard = (item) => {
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
        if(this.state.loading) {
            return (
                <View style={{flex: 1}}>
                    <View style={{flex: 1.5}}>
                        <ActivityIndicator style={{marginTop: 20}}
                            size="large" color="#0000ff"
                        />    
                    </View>  
                    <View style={styles.Tabs}>
                        <TabNav tabTouchCallback={this.tabTouchHandler}></TabNav>
                    </View>  
                </View>     
            );
        } else {
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