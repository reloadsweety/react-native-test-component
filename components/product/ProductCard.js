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

const ProductCard = ({ navigation }) => {
  var cards = [];
	for(let i = 0; i < 5; i++){
		cards.push(
			<Card style={{alignItems: 'center', flex: 1}}
        title='CARD TITLE'
        image={require('../../static/images/3421.jpg')}>
        <Text style={{marginBottom: 10}}>
            Card Detail: The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <TouchableHighlight
          style={styles.cardViewBtn}
          underlayColor='#fff'>
              <Text style={styles.submitText}>View Detail</Text>
        </TouchableHighlight>
      </Card>
    )
  };
  return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.sectionContainer}>
              {cards}
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default ProductCard