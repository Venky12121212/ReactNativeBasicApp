// @flow 
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';
export const GoalInput = ({ addGoalHandler, ...props }) => {

    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputhandler(enteredText) {
        if (enteredText.length > 0) {
            setEnteredGoalText(enteredText)
        }
    }
    function goalClick() {
        addGoalHandler(enteredGoalText)
        setEnteredGoalText('')
    }
    return (
        <Modal visible={props.isVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/Images/goal.jpg')} style={styles.imageStyle} />
                <TextInput placeholder='mine goal!!!!!'
                    style={styles.textInput}
                    onChangeText={goalInputhandler}
                    value={enteredGoalText} />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonStyles} >
                        <Button
                            disabled={enteredGoalText.length > 0 ? false : true}
                            title='Add Goal'
                            onPress={goalClick}
                            color='#5e0acc' />
                    </View>
                    <View style={styles.buttonStyles} >
                        <Button title='Cancel' onPress={props.onCancel} color='#f31282' />
                    </View>
                </View>
            </View>

        </Modal>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row'
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 24,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        width: '95%',
        color: '#120438',
        marginRight: 8,
        padding: 8
    },
    buttonStyles: {
        width: '30%',
        marginHorizontal: 10,
        marginVertical: 10
    },
    imageStyle: {
        width: 200,
        height: 200,
        marginBottom: 10
    }
})