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
import styles from './CustomStyles';

import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';
  

const ReactnativeElement = ({ navigation }) => {
  return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.sectionContainer}>
                {/* <Button title="test"  style={styles.submit}/> */}
                <Text style={styles.title}>Common button</Text>
                <TouchableHighlight
                style={styles.submit}
                underlayColor='#fff'>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableHighlight>
                <TouchableHighlight
                style={styles.submit}
                underlayColor='#fff'>
                    <Text style={styles.submitText}>Registation</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default ReactnativeElement