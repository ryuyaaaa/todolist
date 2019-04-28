import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodo from '../containers/AddTodo';

class MainComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <VisibleTodoList />
                <AddTodo />
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 40 : 0,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: '#1D9FF2'
    },

});

// このConponentを利用できるためにexportする
export default MainComponent;
