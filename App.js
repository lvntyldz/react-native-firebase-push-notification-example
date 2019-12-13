import React from 'react';
import {StyleSheet, Text, View,} from 'react-native';

import {Colors,} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
    return (
        <>
            <View style={styles.container}>
                <Text>Hello World</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: Colors.dark,
        borderWidth: 1,
        padding: 2,
        top: 55
    }
});

export default App;
