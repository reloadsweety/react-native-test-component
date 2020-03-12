import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
  } from 'react-native';

import { Image } from 'react-native-elements'

const ProductCard = (props) => {
    return (
        <View style={viewCardStyles.viewCard} >
            <TouchableOpacity onPress={() => {props.navigation.push('ProductDetail'); console.log('click detail')}}>
                <Image source={require('../../../static/images/3421.jpg')} style={viewCardStyles.imageCard}  />
            </TouchableOpacity>
            <View style={viewCardStyles.viewCardBody}>
                <Text style={viewCardStyles.viewCardName}>Light Berry Teak</Text>
                <Text style={viewCardStyles.viewCardCode}>AS14015CS98</Text>
                <View style={{
                    flex:1,
                    flexDirection: 'row',
                    marginTop: 5
                }}>
                    <Text style={viewCardStyles.viewCardPrice1}  >XXXX฿</Text>
                    {/* <Text style={viewCardStyles.viewCardPrice2}>{props.price}฿</Text> */}
                    <Text style={viewCardStyles.viewCardPrice2}>{props.index == null ? props.price : props.index}฿</Text>
                </View>
            </View>
        </View>
    )
}


const viewCardStyles = StyleSheet.create({
    viewCard:{
        width: 150,
        margin: 9,
        borderWidth: 1,
        borderColor: '#E0E0E0'
    },
    imageCard:{
        width: "100%",
        height: 200
    },
    viewCardBody:{
        margin: '5%'
    },
    viewCardPrice1:{
        flex:5,
        fontSize: 18,
        color:"orange",
    },
    viewCardPrice2:{
        marginTop: 2,
        justifyContent: 'flex-end',
    },
    viewCardName:{
        fontSize: 12,
    },
    viewCardCode:{
        fontSize: 12,
    },

})

export default ProductCard;
