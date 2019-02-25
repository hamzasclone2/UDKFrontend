import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert,
TouchableHighlight, TouchableOpacity, TouchableNativeFeedback,
TouchableWithoutFeedback, ScrollView } from 'react-native';

import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';

//The opening screen for the app
class HomeScreen extends React.Component {

  render() {
    return (
      <ScrollView style={{backgroundColor: '#D3D3D3'}}>
      <Text style={{textAlign: 'center'}}>Top Stories</Text>
        <View style ={{
            borderWidth: 5,
            borderRadius: 20,
            margin: 5,
            borderColor: '#092662'
        }}>
            <Button onPress={() => this.props.navigation.navigate('Story')}
            title="Headline1 - Headline1 - Headline1"
            color="#092662" />
            <View style = {{
                flex:1,
                flexDirection: 'row',
                margin: 10,
                alignItems: 'center'
            }}>
                <Image source={{uri: "https://bloximages.chicago2.vip.townnews.com/kansan.com/content/tncms/assets/v3/editorial/5/54/55450714-3241-11e9-8ca1-8bc32dfb7918/5c689a8b9c949.image.jpg?resize=750%2C968", width: 86, height: 111}} />
                <Text style = {{fontSize: 12, margin: 4}}>{"Blah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\n"}</Text>
            </View>
        </View>
        <View style ={{
            borderWidth: 5,
            borderRadius: 20,
            margin: 5,
            borderColor: '#092662'
        }}>
            <Button onPress={() => this.props.navigation.navigate('Story')}
            title="Headline2 - Headline2 - Headline2"
            color="#092662" />
            <View style = {{
                flex:1,
                flexDirection: 'row',
                margin: 10,
                alignItems: 'center'
            }}>
                <Image source={{uri: "https://bloximages.chicago2.vip.townnews.com/kansan.com/content/tncms/assets/v3/editorial/5/54/55450714-3241-11e9-8ca1-8bc32dfb7918/5c689a8b9c949.image.jpg?resize=750%2C968", width: 86, height: 111}} />
                <Text style = {{fontSize: 12, margin: 4}}>{"Blah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\n"}</Text>
            </View>
        </View>
        <View style ={{
            borderWidth: 5,
            borderRadius: 20,
            margin: 5,
            borderColor: '#092662'
        }}>
            <Button onPress={() => this.props.navigation.navigate('Story')}
            title="Headline3 - Headline3 - Headline3"
            color="#092662" />
            <View style = {{
                flex:1,
                flexDirection: 'row',
                margin: 10,
                alignItems: 'center'
            }}>
                <Image source={{uri: "https://bloximages.chicago2.vip.townnews.com/kansan.com/content/tncms/assets/v3/editorial/5/54/55450714-3241-11e9-8ca1-8bc32dfb7918/5c689a8b9c949.image.jpg?resize=750%2C968", width: 86, height: 111}} />
                <Text style = {{fontSize: 12, margin: 4}}>{"Blah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\n"}</Text>
            </View>
        </View>
        <View style ={{
            borderWidth: 5,
            borderRadius: 20,
            margin: 5,
            borderColor: '#092662'
        }}>
            <Button onPress={() => this.props.navigation.navigate('Story')}
            title="Headline4 - Headline4 - Headline4"
            color="#092662" />
            <View style = {{
                flex:1,
                flexDirection: 'row',
                margin: 10,
                alignItems: 'center'
            }}>
                <Image source={{uri: "https://bloximages.chicago2.vip.townnews.com/kansan.com/content/tncms/assets/v3/editorial/5/54/55450714-3241-11e9-8ca1-8bc32dfb7918/5c689a8b9c949.image.jpg?resize=750%2C968", width: 86, height: 111}} />
                <Text style = {{fontSize: 12, margin: 4}}>{"Blah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\n"}</Text>
            </View>
        </View>
        <View style ={{
            borderWidth: 5,
            borderRadius: 20,
            margin: 5,
            borderColor: '#092662'
        }}>
            <Button onPress={() => this.props.navigation.navigate('Story')}
            title="Headline5 - Headline5 - Headline5"
            color="#092662" />
            <View style = {{
                flex:1,
                flexDirection: 'row',
                margin: 10,
                alignItems: 'center'
            }}>
                <Image source={{uri: "https://bloximages.chicago2.vip.townnews.com/kansan.com/content/tncms/assets/v3/editorial/5/54/55450714-3241-11e9-8ca1-8bc32dfb7918/5c689a8b9c949.image.jpg?resize=750%2C968", width: 86, height: 111}} />
                <Text style = {{fontSize: 12, margin: 4}}>{"Blah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\nBlah blah blah blah blah blah blah\n"}</Text>
            </View>
        </View>
      </ScrollView>
    );
  }
}

//A page for a default story
class StoryScreen extends React.Component {

    render(){
        return (
            <ScrollView style={{backgroundColor: '#D3D3D3'}}>
                <View style ={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin:5
                }}>
                <Text style={{fontSize:18}}>{'Kansas overwhelms short-handed West Virginia roster in 78-53 victory'}</Text>
                <Text style={{fontSize:10}}>Maddy Tannahill | @maddytannahill   Feb 16, 2019</Text>
                <Image source={{uri: "https://bloximages.chicago2.vip.townnews.com/kansan.com/content/tncms/assets/v3/editorial/5/54/55450714-3241-11e9-8ca1-8bc32dfb7918/5c689a8b9c949.image.jpg?resize=750%2C968", width: 230, height: 296}} />
                <Text style={{fontSize:10}}>Redshirt sophomore guard K.J. Lawson celebrates after hitting a three against West Virginia. The Jayhawks defeated the Mountaineers 78-53 on Saturday, Feb. 16.</Text>
                <Text style={{fontSize:10, color:"gray"}}>Chance Parker/KANSAN</Text>
                <Text style={{fontSize:12}}>{'\nWorking with a four-point margin over West Virginia, freshman guard Quentin Grimes drove into a Mountaineer-crowded lane. Immediately double-teamed, the freshman dropped off a nasty no-look pass to junior forward Mitch Lightfoot who brought the roof down in Allen Fieldhouse with a massive dunk, extending the lead to 13-7 for the Jayhawks.'}</Text>
                <Text style={{fontSize:12}}>{'\nFrom this moment, Kansas went on a 14-2 run and took dominating control over the Mountaineers, resulting in a 78-53 victory for the Jayhawks.'}</Text>
                <Text style={{fontSize:12}}>{'\nFreshman guard Devon Dotson led the way for Kansas through the first half, contributing 13 points off of a 4-of-5 effort from the field, hitting one from three-point range. The freshman’s near-perfect first half spearheaded the way to Kansas shooting a lights-out 56-percent through the first 20 minutes of action.'}</Text>
                <Text style={{fontSize:12}}>{'\nWest Virginia, in the midst of an abundance of personnel issues that have left coach Bob Huggins with limited depth on the bench, rounded out the half knocking down an abysmal 25 percent from the field, and not a single player scoring above five points for the Mountaineers.'}</Text>
                <Text style={{fontSize:12}}>{'\nA clear mismatch on the court, Kansas jogged off to the locker room at halftime with an insurmountable 43-16 lead over West Virginia, a team who upset then No. 7-ranked Kansas 65-64 in mid-January.'}</Text>
                <Text style={{fontSize:12}}>{'\nTo make matters worse for the Mountaineers, foul trouble plagued the already short-handed West Virginia team entering second half, as forward Lamont West picked up two quick fouls within the first four minutes of the latter half, marking three players already with three or more fouls as forwards Derek Culver and Andrew Gordon tallied three and four respectively.'}</Text>
                <Text style={{fontSize:12}}>{'\nNo consistent source of offense stepping forward for the Mountaineers, guard Chase Harler ended the day at the top of the pack with 11 points off the bench.'}</Text>
                <Text style={{fontSize:12}}>{'\nThe young Kansas squad taking full advantage of the battered West Virginia roster and riding the momentum of its 82-77 overtime victory at TCU earlier in the week, nine different Jayhawks recorded points in Saturday’s win.'}</Text>
                <Text style={{fontSize:12}}>{'\nIn a cohesive offensive showing for Kansas, the Lawson brothers were both key contributors through the second half, redshirt junior forward Dedric Lawson dropping 14 points and redshirt sophomore guard KJ Lawson adding a career-high 15. The duo finished a combined 5-of-7 from beyond-the-arch.'}</Text>
                <Text style={{fontSize:12}}>{'\nEverything seeming to go right for the previously-struggling Kansas team, the Jayhawks concluded the 78-53 performance shooting 28-of-53 from the field.'}</Text>
                <Text style={{fontSize:12}}>{'\nImproving to 9-4 in conference play, the Jayhawks will take a week off before travelling to Lubbock, Texas, to take on Texas Tech in arguably their biggest matchup left in the regular-season schedule.'}</Text>
                </View>
            </ScrollView>
        );
    }
}

//Allows us to use the UDK logo
class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={require('./assets/udk.jpg')}
                style={{width: 40, height: 40}}
            />
        );
    }
}

//Allows us to switch pages and have a back button
const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Story: StoryScreen
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#092662'
            },
            headerTitle: <LogoTitle />,
            headerTintColor: '#fff',
        }
    }
);

//Allows us to have a tabs on the bottom
export default createAppContainer(createBottomTabNavigator(
    {
        //Home: HomeScreen,
        //Story: StoryScreen
        Home: {screen: AppNavigator},
        News: {screen: StoryScreen},
        Sports: {screen: StoryScreen},
        Arts: {screen: StoryScreen},
        Opinion: {screen: StoryScreen}
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'News') {
          iconName = `ios-paper`;
        } else if (routeName === 'Sports') {
          iconName = `ios-trophy`;
        } else if (routeName === 'Arts') {
          iconName = `ios-color-palette`;
        } else if (routeName === 'Opinion') {
          iconName = `ios-chatbubbles`;
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
    }
));

//Some CSS-like styling for some elements
const styles = StyleSheet.create({
    headlineBox: {
        borderWidth: 5,
        borderRadius: 20,
        margin: 5,
        borderColor: '#092662'
    }
});
