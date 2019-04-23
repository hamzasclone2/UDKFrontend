import React from 'react';
import _ from 'lodash';
import { getData, contains, stringToKeywords } from './api';
import { StyleSheet, View, TouchableOpacity, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import Search from 'react-native-search-box';
import TabNav from './tabnav';

import { ListItem } from "react-native-elements";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
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
        this._isMounted = true;
        this._isMounted && this.loadData();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    loadData(category = "top", searchText = "") {
        getData(category, searchText)
        .then((data) => {
            this._isMounted && this.setState({
                loading: false,
                numDisplayed: 40,
                displayedData: data.slice(0,40),
                serverData: data,
            })
        })
        .catch((error) => {
            this.setState( {error, loading: false} );
            console.log('There has been a problem with fetch operation: ' + error.message);
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
                    displayedData: data.slice(0,40),
                    serverData: data,
                    currentTab: tab,
                })
            });
        }
    }

    searchLocalyHandler = (searchText = "") => {
        const newData = _.filter(this.state.serverData, article => {
            return contains(article, stringToKeywords(searchText))
        });

        this.setState({
            displayedData: newData,
            search: searchText
        });
    }

    searchOnCancelHandler = (searchText = "") => {
        this.loadData("top", searchText);
    }

    searchOnServerHandler = (searchText = "") => {
        if (searchText == "") {
            this.setState({
                displayedData: this.state.serverData,
                search: searchText,
            })
        } else {
            const newData = _.filter(this.state.serverData, article => {
                return contains(article, stringToKeywords(searchText))
            });

            this.setState({
                displayedData: newData,
                search: searchText,
            }, () => this.loadData("search", searchText)); // to get latest query list/state
        }
    }

    renderCard = (item) => {
        if(item.main_image == null) {
            return (
                <TouchableOpacity style={styles.Card}
                    onPress={() => this.props.navigation.navigate('Story', item)}>  

                    <ListItem leftAvatar={{ rounded: false, size: "large", source: require('./assets/udk.jpg') }} title={item.headline} />
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
                <SafeAreaView style={{flex: 1}}>
                    <View style={{flex: 1.5}}>
                        <ActivityIndicator style={{marginTop: 20}}
                            size="large" color="#0000ff"
                        />
                    </View>
                    <View style={styles.Tabs}>
                        <TabNav tabTouchCallback={this.tabTouchHandler}></TabNav>
                    </View>
                </SafeAreaView>
            );
        } else {
            return (
                <SafeAreaView style={{flex: 1}}>
                    <View style={{flex: 1.5}}>
                        <Search
                            ref="search_box"
                            onSearch={text => this.searchOnServerHandler(text)}
                            onCancel={() => this.searchOnCancelHandler("")}
                            onDelete={() => this.searchOnServerHandler("")}
                            onChangeText={text => this.searchLocalyHandler(text)}
                        />
                        <FlatList
                            data={this.state.displayedData}
                            renderItem={({item}) => this.renderCard(item)}
                            keyExtractor={(item, index) => (item.id).toString()}
                        />
                    </View>
                    <View style={styles.Tabs}>
                        <TabNav tabTouchCallback={this.tabTouchHandler}></TabNav>
                    </View>
                </SafeAreaView>
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