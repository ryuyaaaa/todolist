import React from 'react';
import {
    Text,
    View,
    FlatList,
    TextInput,
    StyleSheet,
    Platform
} from 'react-native';

class MainContainer extends React.Component {
    render() {

        var todos = [
            { id: 1, title: 'create some actions' },
            { id: 2, title: 'create some reducer' },
            { id: 3, title: 'create store' }
        ];

        return (
            <View style={styles.container}>
                <FlatList data={todos}
                    renderItem={this._renderItems}
                    keyExtractor={(item, index) => index} />
            </View>
        );
    }

    _renderItems = ({ item }) => {
        return (
            <View>
                <Text>{ item.title }</Text>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS == 'ios' ? 40 : 0
    }
});

export default MainContainer;
