import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';


export default class ArticleBody extends React.Component {
    constructor(props) {
        super(props)
        this.bodyList = this.parse(props.bodyAsText);
    }

    render() {
        return (
            <Text>{this.props.bodyAsText}</Text>
        );
    }

    parse(bodyText) {
        return [];
    }

}

const styles = StyleSheet.create({
    BodyWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        margin:5,
    },
    Body: {
        fontSize: 12,
    },
});