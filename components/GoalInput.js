import { useState } from "react";
import { View, TextInput, Button , StyleSheet} from "react-native";

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
        
        
      }
      function addGoalEntered() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('');
        
      }


    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput}
            placeholder="Your course goal"
            onChangeText={goalInputHandler}
            />
            <Button title='Add goal' onPress={addGoalEntered} />
        </View>

    )


}
export default GoalInput;
const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    
      },
      inputContainer: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
      },


})