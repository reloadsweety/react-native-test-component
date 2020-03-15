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
    TouchableOpacity,
    ActivityIndicator 
  } from 'react-native';

import { Card, ListItem, Icon, Badge, Rating, Image, AirbnbRating } from 'react-native-elements'
import ImageSlider from 'react-native-image-slider';
import { SliderBox } from "react-native-image-slider-box";
import ProductCard from './partials/ProductCard';
import Similar from './partials/Similar';

import styles from '../CustomStyles';


const ProductCategory = ({ navigation }) => {
    var viewCards = [];
	for(let i = 0; i < 5; i++){
        viewCards.push(
            <ProductCard navigation={navigation} price={123} />
        )
    };

    var categories = ['Best Seller', 'Color Trend 2020']
    var renderCategories = []
    categories.forEach( category => 
        renderCategories.push(
            <View style={stylesC.card}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 7}}>
                        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                            <Text style={stylesC.categoryTitle}> {category}</Text>
                            <Text style={stylesC.categoryTotal}  onPress={() => navigation.push('ProductDetail')}> 88 popular itmes</Text>
                        </View>
                    </View>
                    <View style={{flex: 4}}>
                        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: "flex-end"}}>
                            <Text style={stylesC.showAll} onPress={() => navigation.push('ProductCategoryDetail')}>Show all</Text>
                        </View>
                    </View>
                </View>
                <ScrollView scrollEventThrottle={16}>
                    <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {viewCards}
                    </ScrollView>
                    </View>
                </ScrollView>
            </View>
        )
    )

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.sectionContainer}>
                    <View style={stylesC.topImage}>
                        <Image style={{width: '100%', height: 200}} source={require('../../static/images/top_image.jpg')} />
                    </View>
                </View>
                <View style={styles.sectionContainer}>
                    <ScrollView scrollEventThrottle={16}>
                        <View style={{ flex: 1, backgroundColor: 'white' }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Similar imageUri={require('../../static/images/surface/P03.jpg')}
                                        name="Suface"
                                    />
                                    <Similar imageUri={require('../../static/images/surface/P04.jpg')}
                                        name="Suface"
                                    />
                                    <Similar imageUri={require('../../static/images/surface/P03.jpg')}
                                        name="Suface"
                                    />
                                    <Similar imageUri={require('../../static/images/surface/P04.jpg')}
                                        name="Suface"
                                    />
                                    <Similar imageUri={require('../../static/images/surface/P03.jpg')}
                                        name="Suface"
                                    />
                                    <Similar imageUri={require('../../static/images/surface/P04.jpg')}
                                        name="Suface"
                                    />
                                    <Similar imageUri={require('../../static/images/surface/P03.jpg')}
                                        name="Suface"
                                    />
                                    <Similar imageUri={require('../../static/images/surface/P04.jpg')}
                                        name="Suface"
                                    />
                                </ScrollView>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.sectionContainer}>
                    {renderCategories}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const stylesC = StyleSheet.create({
    topImage:{
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 10,
        marginBottom: 15,
        overflow: "hidden"
    },
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

export default ProductCategory;