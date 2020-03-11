import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    StatusBar,
    // Image,
    FlatList,
    Button,
    TouchableHighlight,
    ActivityIndicator 
  } from 'react-native';

import { Card, ListItem, Icon, Badge, Rating, Image, AirbnbRating } from 'react-native-elements'
import ImageSlider from 'react-native-image-slider';
import { SliderBox } from "react-native-image-slider-box";
import ProductCard from './partials/ProductCard';

import styles from '../CustomStyles';

const ProductCategoryDetail  = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.sectionContainer}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={stylesC.categoryTitle}> Best Seller </Text>
                            <Text style={stylesC.categoryTotal}> 88 popular itmes</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.sectionContainer}>
                    <View style={{ padding: 10}}>
                        <FlatList
                            data={[
                                {key: 'Devin'},
                                {key: 'Dan'},
                                {key: 'Dominic'},
                                {key: 'Jackson'},
                                {key: 'James'},
                                {key: 'Joel'},
                                {key: 'John'},
                                {key: 'Jillian'},
                                {key: 'Jimmy'},
                                {key: 'Julie'},
                            ]}
                            renderItem={({item, index}) => <ProductCard navigation={navigation} price={123} />}
                            numColumns={2}
                            />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const stylesC = StyleSheet.create({
    card:{
        padding: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 10,
        marginBottom: 15,
    },
    categoryTitle:  {
        fontSize: 20,
        fontWeight: "bold",
        color:"#d57646",
    },
    categoryTotal: {
        fontSize: 12,
        color: '#8d8d8d'
    },
    showAll: {
        fontSize: 12,
        fontStyle: 'italic',
        marginRight: 5,
        color: '#8d8d8d'
    }
});

export default ProductCategoryDetail;