import React, {useState, useEffect} from 'react';
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
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);

    useEffect(() => {
        setPage(0)
        setData([
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            // {key: 'John'},
            // {key: 'Jillian'},
            // {key: 'Jimmy'},
            // {key: 'Julie'},
        ])
    }, []);

    var renderFooter = () => {
        //it will show indicator at the bottom of the list when data is loading otherwise it returns null
        if (!loading) return null;
        return (
        <ActivityIndicator size="large"
            style={{ color: '#a0a0a0' , marginBottom: 10}}
        />
        );
    };

    var handleLoadMore = () => {
        console.log('handle loadmore '+ page)
        setLoading(true)

        setTimeout(
            () => {
                setLoading(false)
                let newData = []
                for (let i = 0; i< 6; i++){
                    newData.push({key: page+'_'+i})
                }
                setPage(page+1)
                setData(data.concat(newData))
            },
            3000
          )
    };

    var isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 0;
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
      };
      

    return (
        <SafeAreaView>
            {/* <ScrollView
                onScroll={({nativeEvent}) => {
                    if (isCloseToBottom(nativeEvent)) {
                        handleLoadMore();
                    }
                  }}
                //   scrollEventThrottle={2000}
            > */}
                <View style={styles.sectionContainer}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginVertical:10 }}>
                        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={stylesC.categoryTitle}> Best Seller </Text>
                            <Text style={stylesC.categoryTotal}> 87 popular itmes</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.sectionContainer}>
                    <View style={{ padding: 10}}>
                        <FlatList 
                            data={data}
                            renderItem={({item, index}) => <ProductCard index={index} navigation={navigation} price={20} />}
                            numColumns={2}
                            onEndReached={handleLoadMore}
                            onEndReachedThreshold={0.5}
                            ListFooterComponent={renderFooter}
                            // onEndReached={({ distanceFromEnd }) => {
                            //     console.log('render new')
                            // }}
                        />
                    </View>
                </View>
            {/* </ScrollView> */}
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