import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
function DateConverter(date)
{
	let oldDate = date;
	let updatedOldDate;
	return updatedOldDate;
}
	
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
        
        this.state = {
            story: state.params,
            parsedBody: [],
        }
    }

    componentWillMount() {
        this.setState({
            paragraphs: this.parse(this.data.body),
        });
    }
    parse(text) {
        let s = text.split("$$$PARAGRAPH$$$");
        return s;

    }

    render(){
// <<<<<<< HEAD
		// myStr=this.data.date;
		// myStr= DateConverter(myStr);
// =======
        // const paragraphsJSX = this.state.paragraphs.map((paragraph, i) =>
            // <Text key={i} style={styles.Body}>{'\t\t'}{paragraph}{'\n'}</Text>
        // );

// >>>>>>> 7b67111e8e926cc66e31667bdde11faef46bd1ab
        if(this.data.main_image == null) {
            return (
                <ScrollView style={{backgroundColor: '#ffffff'}}>
                    <View style={styles.ArticleWrapper}>
                        <Text style={styles.Headline}>{this.data.headline}</Text>
                        <Text style={styles.Byline}>{this.data.author} | {this.data.date}</Text>
                        {paragraphsJSX}
                    </View>
                </ScrollView>
            );

        } else {
            return (
                <ScrollView style={{backgroundColor: '#ffffff'}}>
                    <View style={styles.ArticleWrapper}>
                        <Text style={styles.Headline}>{this.data.headline}</Text>
                        <Image style={styles.MainImage} resizeMode={'cover'} source={{uri: this.data.main_image}} />
                        <Text style={styles.ImageCaption}>{this.data.main_image_byline}</Text>
// <<<<<<< HEAD
                        <Text style={styles.Headline}>{this.data.headline}</Text>
                        <Text style={styles.Byline}><Text style ={{color: 'red'}}>{this.data.author}</Text> {myStr}{this.data.date}</Text>
						
                        <ArticleBody bodyAsText={this.data.body}></ArticleBody>
// =======
                        // {paragraphsJSX}
// >>>>>>> 7b67111e8e926cc66e31667bdde11faef46bd1ab
                    </View>
                </ScrollView>
            );
        }

    }


}

const styles = StyleSheet.create({
    ArticleWrapper: {
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
        color: '#000000',
        fontSize: 16,
    },
});
