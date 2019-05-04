import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';


export default class ArticleBody extends React.Component {
    constructor(props) {
        super(props)
        this.bodyList = this.parse(props.bodyAsText);
    }

    render() {
        return (
            <Text style= {{fontSize:16}}>{this.bodyList}</Text>
        );
    }

    parse(bodyasText) {
		var mystring = this.props.bodyAsText;
		var x;
        var first = true;
		for(x = 0; x < mystring.length; x++)
		{
            if(first){
                mystring = mystring.replace("$$$PARAGRAPH$$$", "\n");
                first = false;
            }else{
                mystring = mystring.replace("$$$PARAGRAPH$$$", "\n\n");
            }

		}
		return <Text> {mystring}</Text>
    }

}
