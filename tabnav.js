import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'



export default class TabNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.Row}>
                <TouchableOpacity style={styles.Tab} onPress={() => this.props.tabTouchCallback('sports')}>
                    <Icon
                        name='ios-basketball'
                        type='ionicon'
                        color='orange'
                    />
                    <Text style={{color: '#ffffff'}}>   Sports</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Tab} onPress={() => this.props.tabTouchCallback('top')}>
                    <Icon
                        name='ios-home'
                        type='ionicon'
                        color='crimson'
                    />
                    <Text style={{color: '#ffffff'}}>   Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Tab} onPress={() => this.props.tabTouchCallback('arts')}>
                    <Icon
                        name='ios-color-palette'
                        type='ionicon'
                        color='purple'
                    />
                    <Text style={{color: '#ffffff'}}>   Arts</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    Row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: 10,
    },
    Tab: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius:15,
        borderColor: '#cccccc',
        backgroundColor: '#092662',
    },
});
