import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import ArticleBody from './articleBody';
//A page for a default story
export default class StoryScreen extends React.Component {
    constructor(props) {
        super(props)
        const {state} = props.navigation;
        this.data = state.params
        this.data.date = this.data.date.substring(0, this.data.date.indexOf('T'));
        this.state = {
            story: state.params,
            parsedBody: [],
        }
    }

    componentDidMount() {
        this.setState({
            parsedBody: this.parse(this.data.body),
        });
    }
    parse(text) {
        let s = text.split("$$$PARAGRAPH$$$");
        console.log(s);
        return s;
    }

    render(){
        const listItems = this.state.parsedBody.map((bodyElem) =>
            <Text>{'\t\t'}{bodyElem}</Text>
        );
        if(this.data.main_image == null) {
            return (
                <ScrollView style={{backgroundColor: '#ffffff'}}>
                    <View style={styles.BodyWrapper}>
                        <Text style={styles.Headline}>{this.data.headline}</Text>
                        <Text style={styles.Byline}>{this.data.author} | {this.data.date}</Text>
                        {listItems}
                    </View>
                </ScrollView>
            );
        } else {
            return (
                <ScrollView style={{backgroundColor: '#ffffff'}}>
                    <View style={styles.BodyWrapper}>
                        <Text style={styles.Headline}>{this.data.headline}</Text>
                        <Text style={styles.Byline}>{this.data.author} | {this.data.date}</Text>
                        <Image style={styles.MainImage} resizeMode={'cover'} source={{uri: this.data.main_image}} />
                        <Text style={styles.ImageCaption}>{this.data.main_image_byline}</Text>
                        {listItems}
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
    },
    Headline: {
        fontSize: 18,
    },
    Byline: {
        fontSize: 10,
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