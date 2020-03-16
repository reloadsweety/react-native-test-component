import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    StatusBar,
    Image,
    FlatList,
    Button,
    TouchableHighlight
  } from 'react-native';

import { Card, ListItem, Icon, Badge, Rating, AirbnbRating } from 'react-native-elements'
import ImageSlider from 'react-native-image-slider';

import styles from '../CustomStyles';

const ProductDetail = ({ navigation }) => {
    const images = [
        // require('../static/images/indexSlider/xsurface_01.jpg'),
        // require('../static/images/indexSlider/xsurface_02.jpg'),
        // require('../static/images/indexSlider/xsurface_03.jpg'),
        'https://placeimg.com/640/640/nature',
        'https://placeimg.com/640/640/people',
        'https://placeimg.com/640/640/animals',
        'https://placeimg.com/640/640/beer',
      ];

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={detailStyles.sectionContainer}>
                    <ImageSlider
                        loopBothSides
                        autoPlayWithInterval={2000}
                        images={images}
                        customSlide={({ index, item, style, width }) => (
                            <View key={index} style={[style, slideImageTop.customSlide]}>
                                {/* <Image source={item} style={slideImageTop.customImage} /> */}
                                <Image source={{ uri: item}} style={slideImageTop.customImage} />
                            </View>
                        )}
                        customButtons={(position, move) => (
                            <View style={slideImageTop.buttons}>
                                {images.map((image, index) => {
                                    return (
                                        <View>
                                            <TouchableHighlight
                                                key={index}
                                                underlayColor="#ccc"
                                                onPress={() => move(index)}
                                                style={slideImageTop.button}
                                            >
                                                <View style={position === index ? slideImageTop.buttonActive : slideImageTop.buttonInActive}></View>
                                            </TouchableHighlight>
                                            
                                        </View>
                                    );
                                })}
                            </View>
                        )}
                    />    
                </View>
                <View style={detailStyles.sectionContainer}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 7}}>
                            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                                <Text style={detailStyles.price}> XXXXX฿</Text>
                                <Text style={detailStyles.priceRetail}> XXXX฿</Text>
                            </View>
                        </View>
                        <View style={{flex: 4}}>
                            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                                <Rating readonly type='custom' startingValue="4" ratingColor='#d57646' imageSize={12} style={{marginLeft: -70}}/>
                                <Text style={{fontSize: 12}}> 4/5 Ss' ratings</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.hr}/>
                </View>
                <View style={detailStyles.sectionContainer}>
                    <Text style={detailStyles.detailText}><Text style={{fontWeight: "700"}}>Surface type: </Text> Laminate </Text>
                    <Text style={detailStyles.detailText}><Text style={{fontWeight: "700"}}>Item code: </Text> xxxx xxxx xx </Text>
                    <Text style={detailStyles.detailText}><Text style={{fontWeight: "700"}}>Size: </Text> 2400 mm. x 1200 mm. x 80 mm. </Text>
                    <Text style={detailStyles.detailText}><Text style={{fontWeight: "700"}}>Type: </Text> Oak </Text>
                    <Text style={detailStyles.detailText}><Text style={{fontWeight: "700"}}>Pattern direction: </Text> Vertical </Text>
                    <Text style={detailStyles.detailDeliveryText}>Delivery in 4-6 weeks </Text>
                    <View style={styles.hr}/>
                    <Text style={detailStyles.detailDeliveryText}>Note : Colors may different from actual surface material , color are depending on your monitor’s display, please contact our material consultantant for actual surface material sample .</Text>
                </View>
                <View style={detailStyles.sectionContainer}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={detailStyles.sectionHeader}>Relate Product</Text>
                    </View>
                    <View style={styles.hr}/>

                </View>
                <View style={detailStyles.sectionContainer}>
                    <Text style={detailStyles.sectionHeader}>Ratings & Reviews Seller</Text>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 7, alignContent: "center"}}>
                            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', marginLeft: -15}}>
                                <Text style={detailStyles.ratingReviewAverage}> 4.0 / 5</Text>
                                <Rating readonly type='custom' startingValue="4" ratingColor='#d57646' imageSize={25} style={detailStyles.ratingReviewStar}/>
                                <Text style={detailStyles.ratingReviewSummary}> 4/5 Ss' ratings</Text>
                            </View>
                        </View>
                        <View style={{flex: 4}}>
                            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}><Rating readonly type='custom' startingValue="4" ratingColor='#d57646' imageSize={12} />
                                    <View style={detailStyles.progressBar}>
                                        <View style={{ width: '80%', height: '100%', backgroundColor: '#d57646'}}></View>
                                    </View>
                                    <Text style={detailStyles.ratingChildText}>5</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}><Rating readonly type='custom' startingValue="2" ratingCount="4" ratingColor='#d57646' imageSize={12} />
                                    <View style={detailStyles.progressBar}>
                                        <View style={{ width: '80%', height: '100%', backgroundColor: '#d57646'}}></View>
                                    </View>
                                    <Text style={detailStyles.ratingChildText}>4</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}><Rating readonly type='custom' startingValue="2" ratingCount="3" ratingColor='#d57646' imageSize={12} />
                                    <View style={detailStyles.progressBar}>
                                        <View style={{ width: '50%', height: '100%', backgroundColor: '#d57646'}}></View>
                                    </View>
                                    <Text style={detailStyles.ratingChildText}>3</Text></View>
                                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}><Rating readonly type='custom' startingValue="2" ratingCount="2" ratingColor='#d57646' imageSize={12} />
                                    <View style={detailStyles.progressBar}>
                                        <View style={{ width: '10%', height: '100%', backgroundColor: '#d57646'}}></View>
                                    </View>
                                    <Text style={detailStyles.ratingChildText}>2</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}><Rating readonly type='custom' startingValue="2" ratingCount="1" ratingColor='#d57646' imageSize={12} />
                                    <View style={detailStyles.progressBar}>
                                        <View style={{ width: '10%', height: '100%', backgroundColor: '#d57646'}}></View>
                                    </View>
                                    <Text style={detailStyles.ratingChildText}>1</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.hr}/>
                </View>
                <View style={detailStyles.sectionContainer}>
                    <Text>Seller Reviews</Text>
                    <View style={styles.hr}/>
                </View>
                <View style={detailStyles.sectionContainer}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <Text style={{fontSize: 12}}>Ratings: </Text>
                        <Rating readonly type='custom' startingValue="4" ratingColor='#d57646' imageSize={12} style={{marginTop: 2, marginHorizontal: 5}}/>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <TextInput
                            multiline={true}
                            numberOfLines={5}
                            style={detailStyles.commentTextInput}/>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <Button title="Comment"></Button>
                    </View>
                    <View style={styles.hr}/>
                </View>
            </ScrollView>
        </SafeAreaView>
      );
};

const detailStyles = StyleSheet.create({

    sectionContainer: {
        marginTop: 20,
        paddingHorizontal: 24,
        textAlign: "center"
    },
    sectionHeader: {
        fontWeight: 'bold',
        fontSize:17,
        marginBottom: 10
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
        color:"#d57646",
    },
    priceRetail: {
        textDecorationLine: "line-through",
        textDecorationColor: "red"
    },
    headerStarRating: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    headerStarTextRating: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        fontSize: 12,
    },
    detailText: {
        fontSize: 16,
        marginBottom: 2,
        color: '#6f6f6f'
    },
    detailDeliveryText: {
        fontSize: 12,
        color: '#6f6f6f'
    },
    
    ratingReviewAverage: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 5,
        fontWeight: 'bold'

    },
    ratingReviewStar: {
        marginBottom: 3
    },
    ratingReviewSummary: {
        textAlign: 'center'
    },
    ratingChildText: {
        fontSize: 11
    },
    progressBar: {
        height: 10,
        width: '65%',
        backgroundColor: '#d7d7d7',
        borderColor: '#d7d7d7',
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 7
    },
    commentTextInput: {
        width: '100%',
        textAlignVertical: 'top',
        borderWidth: 1,
        borderColor: '#d7d7d7',
        marginVertical: 5,
        borderRadius: 10

    }

})

const slideImageTop = StyleSheet.create({
  slider: { backgroundColor: '#000', height: 350 },
  contentText: { color: '#fff' },
  buttonSelected: {
    opacity: 1,
    color: 'red',
  },
  customSlide: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customImage: {
    width: '100%',
    height: 500,
  },
  buttons: {
    height: 15,
    marginTop: -25,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    margin: 3,
    width: 20,
    height: 15,
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  },
  buttonActive:{
    height:3,
    width:30,
    backgroundColor: 'white',
    
    },
    buttonInActive:{
        height:3,
        width:30,
        backgroundColor: 'grey',
    },
    hidden:{
        display: 'none'
    }
});

export default ProductDetail