import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import ArticleBody from './articleBody';
//A page for a default story
export default class StoryScreen extends React.Component {
    constructor(props) {
        super(props)
        const {state} = props.navigation;
        this.data = state.params
        if(this.data.date.includes("T")){
            this.data.date = this.data.date.substring(0, this.data.date.indexOf('T'));
        }
    }

    render(){
        if(this.data.main_image == null) {
            return (
                <ScrollView style={{backgroundColor: '#ffffff'}}>
                    <View style={styles.BodyWrapper}>
                        <Text style={styles.Headline}>{this.data.headline}</Text>
                        <Text style={styles.Byline}>{this.data.author} {this.data.date}</Text>
                        <Text style={styles.Body}>{this.data.body}</Text>
                    </View>
                </ScrollView>
            );
        } else {
            return (
                <ScrollView style={{backgroundColor: '#ffffff'}}>
                    <View style={styles.BodyWrapper}>
                        <Image style={styles.MainImage} resizeMode={'cover'} source={{uri: this.data.main_image}} />
                        <Text style={styles.ImageCaption}>{this.data.main_image_byline}</Text>
                        <Text style={styles.Headline}>{this.data.headline}</Text>
                        <Text style={styles.Byline}><Text style ={{color: 'red'}}>{this.data.author}</Text> {this.data.date}</Text>

                        <ArticleBody bodyAsText={this.data.body}></ArticleBody>
                    </View>
                </ScrollView>
            );
        }

    }


}

const styles = StyleSheet.create({
    BodyWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        margin:5,
        top:-5,
    },
    Headline: {
        fontSize: 30,
		fontWeight: "bold"
    },
    Byline: {
		// // textAlign: 'right'
        fontSize: 10,
		fontWeight: "bold"
    },
    MainImage: {
        width: 400,
        height: 300,
    },
    ImageCaption: {
        fontSize: 10,
        color: '#777777',
    },
    Body: {
        fontSize: 12,
    },
});
