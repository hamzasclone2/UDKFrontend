import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class TabNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.Row}>
                <TouchableOpacity style={styles.Tab} onPress={() => this.props.tabTouchCallback('sports')}>
                    <Text style={{color: '#ffffff'}}>Sports</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Tab} onPress={() => this.props.tabTouchCallback('top')}>
                    <Text style={{color: '#ffffff'}}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Tab} onPress={() => this.props.tabTouchCallback('arts')}>
                    <Text style={{color: '#ffffff'}}>Arts</Text>
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
        borderColor: '#cccccc',
        backgroundColor: '#092662',
    },
});