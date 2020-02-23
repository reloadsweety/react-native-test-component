import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    FlatList,
    Button,
    TouchableHighlight
  } from 'react-native';

import { Card, ListItem, Icon, Badge } from 'react-native-elements'

import styles from '../CustomStyles';

const ProductList = ({ navigation }) => {
    var viewCards = [];
	for(let i = 0; i < 2; i++){
		viewCards.push(
			<View style={{flex: 5}}>
                <Badge
                    status="success"
                    value="99+"
                    containerStyle={{ position: 'absolute', top: 20, right: 25, zIndex:99999 }}
                />
                <View style={styles.viewCard}>
                <Image source={require('../../static/images/3421.jpg')} style={styles.imageCard}/>
                    <View style={styles.viewCardBody}>
                        <Text style={styles.viewCardName}>Light Berry Teak</Text>
                        <Text style={styles.viewCardCode}>AS14015CS98</Text>
                        <View style={{
                            flex:1,
                            flexDirection: 'row',
                            marginTop: 5
                        }}>
                            <Text style={styles.viewCardPrice1}>XXXX฿</Text>
                            <Text style={styles.viewCardPrice2}>123฿</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    };
    return (
        <SafeAreaView>
            <ScrollView>
                {/* <View style={styles.sectionContainer}>
                    <Text style={styles.title}>Use Card</Text>
                    <View style={{
                        flex:10,
                        flexDirection: 'row',
                        // justifyContent: 'flex-start',
                    }}>
                        <View style={{flex: 5}}>
                            <Card style={{zIndex: 9}}
                                image={require('../../static/images/3421.jpg')}>
                                <Text style={{marginBottom: 10}}>
                                    Card Detail: The idea with React Native Elements is more about component structure than actual design.
                                </Text>
                            </Card>
                        </View>
                        <View style={{flex: 5}}>
                            <Card
                                image={require('../../static/images/3421.jpg')}>
                                <Text style={{marginBottom: 10}}>
                                    Card Detail: The idea with React Native Elements is more about component structure than actual design.
                                </Text>
                            </Card>
                        </View>
                    </View>
                </View> */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.title}>Use View and Css</Text>
                    <View style={{
                        flex:1,
                        flexDirection: 'column',
                    }}>
                        <View style={{
                            flex:1,
                            flexDirection: 'row',
                        }}>
                            {viewCards}
                        </View>
                        <View style={{
                            flex:1,
                            flexDirection: 'row',
                            // justifyContent: 'flex-start',
                        }}>
                            {viewCards}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
      );
}


export default ProductList