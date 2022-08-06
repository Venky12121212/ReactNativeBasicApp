import { StyleSheet, View, Text, Pressable } from 'react-native'

const GoalItem = (props) => {
    return (
        <Pressable
            android_ripple={{ color: '#ddd' }}
            onPress={props.deleteItem.bind(this, props.id)}
            style={({ pressed }) => pressed && styles.pressedItem}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderWidth: 2,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        borderColor: '#5e0acc'
    },
    pressedItem: {
        opacity: 0.5
    },
    goalText: {
        color: '#fff',
        padding: 8,
    }
})