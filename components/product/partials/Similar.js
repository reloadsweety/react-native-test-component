import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

const Similar = (props) => {
    
        return (
            <View style={{ height: 120, width: 100, marginLeft: 10, }}>
                <View style={{ flex: 4, borderWidth: 0.5, borderColor: '#dddddd', overflow: "hidden", borderRadius: 10, marginBottom:10 }}>
                    <Image source={props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 1,  flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>{props.name}</Text>
                </View>
            </View>
        );

    }
export default Similar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});