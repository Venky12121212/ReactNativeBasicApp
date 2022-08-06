import { useState } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GoalInput } from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  const [madalIsVisible, setModalIsVisible] = useState(false)

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function onModalGoalCancelHandler() {
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }])
  }
  function DeleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    });
    onModalGoalCancelHandler()
  }
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <Button
          title="Add Goal Handler"
          color="#a065ec"
          onPress={startAddGoalHandler} />
        <GoalInput
          addGoalHandler={addGoalHandler}
          isVisible={madalIsVisible}
          onCancel={onModalGoalCancelHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  deleteItem={DeleteGoalHandler} />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id
            }} />
          {/* <ScrollView horizontal={false}>
          {courseGoals.length > 0 ? courseGoals.map((goal) =>
            <View style={styles.goalItem}>
              <Text key={goal} style={styles.goalText}>{goal}</Text>
            </View>
          ) :
            <View style={styles.NogoalText}>
              <Text>No Goals Addded</Text>
            </View>}
        </ScrollView> */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e0858'
  },
  NogoalText: {
    dispaly: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  goalsContainer: {
    flex: 5
  }
});
