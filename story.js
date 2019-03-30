import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

//A page for a default story
export default class StoryScreen extends React.Component {
    constructor(props) {
        super(props)
        const {state} = props.navigation;
        this.data = state.params
        this.data.date = this.data.date.substring(0, this.data.date.indexOf('T'));
    }

    render(){
        return (
            <ScrollView style={{backgroundColor: '#cccccc'}}>
                <View style={styles.BodyWrapper}>
                    <Text style={styles.Headline}>{this.data.headline}</Text>
                    <Text style={styles.Byline}>{this.data.author} | {this.data.date}</Text>
                    <Image source={{uri: "https://bloximages.chicago2.vip.townnews.com/kansan.com/content/tncms/assets/v3/editorial/5/54/55450714-3241-11e9-8ca1-8bc32dfb7918/5c689a8b9c949.image.jpg?resize=750%2C968", width: 230, height: 296}} />
                    <Text style={styles.ImageCaption}>Redshirt sophomore guard K.J. Lawson celebrates after hitting a three against West Virginia. The Jayhawks defeated the Mountaineers 78-53 on Saturday, Feb. 16.</Text>
                    <Text style={styles.ImageCaption}>Chance Parker/KANSAN</Text>
                    <Text style={styles.Body}>{this.data.body}</Text>
                </View>
            </ScrollView>
        );
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
        resizeMode: 'stretch',
    },
    ImageCaption: {
        fontSize: 10,
        color: '#777777',
    },
    Body: {
        fontSize: 12,
    },
});