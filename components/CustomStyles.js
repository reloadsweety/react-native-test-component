import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


const styles = StyleSheet.create({
    hr: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        opacity: 0.1,
        marginTop: 15
    },
    headerTitle:{
        fontSize: 18,
        fontWeight: '700',
    },
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 15,
        paddingHorizontal: 24,
        textAlign: "center"
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },

    /* Test Page CSS */
    title: {
        marginTop: 10,
        marginBottom: 20,
    },
    productImage: {
        width: '100%',
        height: 200
    },
    listItem:{
        color: Colors.white,
        backgroundColor: Colors.black,
        padding: 5
    },

    submit:{
        // marginRight:40,
        // marginLeft:40,
        // marginTop:10,
        // paddingTop:20,
        // paddingBottom:20,
        padding:10,
        width:200,
        backgroundColor:'#f68326',
        borderRadius:10,
        borderWidth: 1,
        borderColor: 'transparent'
      },
      submitText:{
          color:'#fff',
          textAlign:'center',
      },

    cardViewBtn:{
        marginLeft:50,
        padding:10,
        width:200,
        backgroundColor:'#f68326',
        borderRadius:10,
        borderWidth: 1,
        borderColor: 'transparent'
    },

    /* VIEW CARD */
    viewCard:{
        margin: 10,
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

    /* Slid Image */
    




});

export default styles