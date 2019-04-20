import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';


export default class ArticleBody extends React.Component {
    constructor(props) {
        super(props)
        this.bodyList = this.parse(props.bodyAsText);
    }

    render() {
        return (
            <Text>{this.bodyList}</Text>
			
        );
    }

    parse(bodyasText) {
		var mystring = this.props.bodyAsText;
		var x;
		for(x = 0; x < mystring.length; x++)
		{
			mystring = mystring.replace("$$$PARAGRAPH$$$", "\n\n");
		}
		return <Text> {mystring}</Text>
        // return [];
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