import React, { useState, useEffect } from 'react';
import ImageSlider from 'react-native-image-slider';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image,
    FlatList,
    TouchableHighlight
  } from 'react-native';

const SliderEX = ({ navigation }) => {
    const images = [
        require('../static/images/indexSlider/xsurface_01.jpg'),
        require('../static/images/indexSlider/xsurface_02.jpg'),
        require('../static/images/indexSlider/xsurface_03.jpg'),
        // 'https://placeimg.com/640/640/nature',
        // 'https://placeimg.com/640/640/people',
        // 'https://placeimg.com/640/640/animals',
        // 'https://placeimg.com/640/640/beer',
      ];

    return (
        <SafeAreaView style={styles.container}>
          {/* <View style={styles.content1}>
            <Text style={styles.contentText}>Content 1</Text>
          </View> */}
          <ImageSlider
            loopBothSides
            // autoPlayWithInterval={2000}
            images={images}
            customSlide={({ index, item, style, width }) => (
              // It's important to put style here because it's got offset inside
              <View key={index} style={[style, styles.customSlide]}>
                <Image source={item} style={styles.customImage} />
              </View>
            )}
            customButtons={(position, move) => (
              <View style={styles.buttons}>
                  <TouchableHighlight
                    style={position === images.length-1 ? styles.submit : styles.hidden}
                    onPress={() => navigation.push('Home')}
                    underlayColor='#fff'>
                        <Text style={styles.submitText}>Get Start</Text>
                </TouchableHighlight>
                {images.map((image, index) => {
                  return (
                    <View>
                        <TouchableHighlight
                        key={index}
                        underlayColor="#ccc"
                        onPress={() => move(index)}
                        style={styles.button}
                        >
                        {/* <Text style={position === index && styles.buttonSelected}>
                            {index + 1}
                        </Text> */}
                        
                            <View style={position === index ? styles.buttonActive : styles.buttonInActive}></View>
                        </TouchableHighlight>
                        
                    </View>
                  );
                })}
              </View>
            )}
          />
          {/* <View style={styles.content2}>
            <Text style={styles.contentText}>Content 2</Text>
          </View> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    submit:{
        // marginRight:40,
        // marginLeft:40,
        // marginTop:10,
        // paddingTop:20,
        // paddingBottom:20,
        padding:10,
        width:200,
        backgroundColor:'rgba(52, 52, 52, 0.8)',
        borderRadius:10,
        borderWidth: 1,
        borderColor: 'transparent',
        position: 'absolute',
        top: -80,
        zIndex: 999999,
      },
      submitText:{
          color:'#fff',
          textAlign:'center',
      },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  slider: { backgroundColor: '#000', height: 350 },
  content1: {
    width: '100%',
    height: 50,
    marginBottom: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content2: {
    width: '100%',
    height: 100,
    marginTop: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: { color: '#fff' },
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
    height: '100%',
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

export default SliderEX