import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView} from 'react-native';
function DateConverter(date)
{
	let oldDate = date;
	let writtenMonth;
	// let updatedOldDate = oldDate.split("-");
	let [year,month,day] = oldDate.split("-");
	let monthsNyear = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	let months = Number(month);
	for (i=0;i < monthsNyear.length;i++)
	{
		if (i==months)
		{
			writtenMonth = monthsNyear[i-1];
		}
	}
	let updatedDate = writtenMonth+" "+day+", "+year;
	return updatedDate;
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
		Dates=this.data.date;
		Dates= DateConverter(Dates);
        if(this.data.main_image == null) {
            return (
                <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{backgroundColor: '#ffffff'}}>
                    <View style={styles.ArticleWrapper}>

                        <View style={{marginLeft:2, marginRight:2}}>
                            <Text style={styles.ImageCaption}>{this.data.main_image_byline}</Text>
                            <Text style={styles.Headline}>{this.data.headline}</Text>
                            <Text style={styles.Byline}>
                                <Text style ={{color: 'red',fontWeight: 'bold'}}>{this.data.author + "  "}</Text>
                                <Text style = {{fontStyle:'italic'}}>{Dates}</Text>
                            </Text>
                            <ArticleBody bodyAsText={this.data.body}></ArticleBody>
                        </View>
                    </View>
                </ScrollView>
                </SafeAreaView >
            );

        } else {
            return (
                <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{backgroundColor: '#ffffff'}}>
                    <View style={styles.ArticleWrapper}>

                        <Image style={styles.MainImage} resizeMode={'cover'} source={{uri: this.data.main_image}} />
                        <View style={{marginLeft:2, marginRight:2}}>
                            <Text style={styles.ImageCaption}>{this.data.main_image_byline}</Text>
                            <Text style={styles.Headline}>{this.data.headline}</Text>
                            <Text style={styles.Byline}>
                                <Text style ={{color: 'red',fontWeight: 'bold'}}>{this.data.author + "  "}</Text>
                                <Text style = {{fontStyle:'italic'}}>{Dates}</Text>
                            </Text>
                            <ArticleBody bodyAsText={this.data.body}></ArticleBody>
                        </View>
                    </View>
                </ScrollView>
                </SafeAreaView>
            );
        }

    }


}

const styles = StyleSheet.create({
    ArticleWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Headline: {
        fontSize: 30,
		fontWeight: "bold"
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
});
