/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import TestPage from './components/TestPage';
import ReactnativeElement from './components/ReactnativeElement';
import ProductCard from './components/product/ProductCard';
import ProductList from './components/product/ProductList';
import ProductDetail from './components/product/ProductDetail';
import ProductCategory from './components/product/ProductCategory';
import ProductCategoryDetail from './components/product/ProductCategoryDetail';
import SliderEX from './components/Slider';
import styles from './components/CustomStyles';

import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';



const App = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            
            <View style={styles.sectionContainer}>
              <Button title="TestPage GAME" onPress={() => navigation.push('TestPage')} />
            </View>
            <View style={styles.sectionContainer}>
              <Button title="React-Native-Element" onPress={() => navigation.push('ReactnativeElement')} />
            </View>
            <View style={styles.sectionContainer}>
              <Button title="Product Cards" onPress={() => navigation.push('ProductCard')} />
            </View>
            <View style={styles.sectionContainer}>
              <Button title="Product List" onPress={() => navigation.push('ProductList')} />
            </View>
            <View style={styles.sectionContainer}>
              <Button title="Slider" onPress={() => navigation.push('SliderEX')} />
            </View>
            <View style={styles.sectionContainer}>
              <Button title="ProductDetail" onPress={() => navigation.push('ProductDetail')} />
            </View>
            <View style={styles.sectionContainer}>
              <Button title="ProductCategory" onPress={() => navigation.push('ProductCategory')} />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const AppStack = createStackNavigator(
  {
    Home: {
      screen: App,
      navigationOptions: {
        // headerRight: () => (
        //   <Button  title="Update count" />
        // ),
        headerTitle: () => headerBar
      },
    },
    TestPage:{
      screen: TestPage,
      navigationOptions: {
        // headerRight: () => (
        //   <Button  title="Update count" />
        // ),
        headerTitle: () => headerBar
      },
    },
    ReactnativeElement,
    ProductCard,
    ProductList,
    ProductDetail,
    ProductCategory,
    ProductCategoryDetail,
    SliderEX: {
      screen: SliderEX,
      navigationOptions: {
        header: null,
      },
    }
  },
  {
    initialRouteName: 'ProductCategory'
  }
);

const headerCSS = StyleSheet.create({
  imageIcon:{
    marginTop: 5,
    marginRight: 10,
      width: 30,
      height: 30
  },
  imageIcon2:{
    marginTop: 5,
    marginRight: 10,
      width: 27,
      height: 27
  },
  imageSearch:{
    marginTop: 0,
    marginRight: 10,
      width: 27,
      height: 27
  },
  iconHeader:{
    paddingTop: 10,
    paddingRight: 10
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10
  },
  searchIcon: {
    padding: 10
  },
  input: {
      flex: 1,
      paddingRight: 10,
      paddingLeft: 10,
      backgroundColor: '#fff',
      color: '#424242',
      // borderWidth: 1,
      lineHeight: 1,
      height: 34,
      fontSize: 13
  },
})

const headerBar = (
  <View style={{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft:15,
    marginRight: 15
  }}>
    <Image style={headerCSS.imageIcon} source={require('./static/images/icons/outline_notifications_black_48dp.png')}  />
    <Image style={headerCSS.imageIcon2} source={require('./static/images/icons/outline_shopping_cart_black_48dp.png')}  />
    <View style={headerCSS.searchSection}>
      <TextInput
          style={headerCSS.input}
          placeholder="Search Product..."
          // onChangeText={(searchString) => {this.setState({searchString})}}
          underlineColorAndroid="transparent"
      />
      <Image style={headerCSS.imageSearch} source={require('./static/images/icons/baseline_search_black_48dp.png')}  />
      {/* <Icon style={headerCSS.searchIcon} name="search" size={20} color="#000"/> */}
    </View>
  </View>
)

export default createAppContainer(AppStack);
// export default App;
