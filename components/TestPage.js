import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image,
    FlatList
  } from 'react-native';
import styles from './CustomStyles';


const TestPage = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.title}>This is TestPage</Text>
                        <Button title="Go to HOME" onPress={() => navigation.push('Home')} />  
                    </View>
                    <View style={styles.sectionContainer}>
                        <Image source={require('../static/images/3421.jpg')} 
                        style={styles.productImage} />
                        <Image source={require('../static/images/icons/outline_notifications_white_48dp.png')}  />
                    </View>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.title}>Test Flex flexDirection: 'row' </Text>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                    </View>
                    <Text style={styles.title}>Test Flex flexDirection: 'column' </Text>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                    </View>
                    <Text style={styles.title}>Test Flex flexDirection: 'row' justifyContent: 'flex-start'</Text>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                    }}>
                        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                    </View>
                    <Text style={styles.title}>Test Flex flexDirection: 'row' justifyContent: 'center'</Text>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                    </View>
                    <Text style={styles.title}>Test Flex flexDirection: 'row' justifyContent: 'flex-end'</Text>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}>
                        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                    </View>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.title}>FlatList</Text>
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
                    renderItem={({item, index}) => <Text style={styles.listItem}>{index} - {item.key}</Text>}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
      );
};

export default TestPage;