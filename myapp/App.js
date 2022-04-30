import { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([
    { name: 'take a shower', key: 1 },
    { name: 'work out', key: 2 },
    { name: 'go to shopping', key: 3 },
  ]);

  const onPressItemDelete = (key) => {
    const updatedTodos = todos.filter((item) => item.key !== key);
    setTodos(updatedTodos);
  };

  const onChangeText = (value) => {
    setText(value);
  };

  const onPressBtn = () => {
    const key = todos.length - 1;
    const newTodos = [...todos, { name: text, key: key }];
    setTodos(newTodos);
    setText('');
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text key={item.key}>{item.name}</Text>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => onPressItemDelete(item.key)}
        >
          <Text>delete</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
      />
      <View style={styles.button}>
        <Button title="Add" onPress={onPressBtn} />
      </View>
      <FlatList data={todos} renderItem={renderItem}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  input: {
    height: 30,
    width: 200,
    borderWidth: 1,
    marginBottom: 30,
  },
  button: {
    marginBottom: 10,
  },
  item: {
    width: 300,
    backgroundColor: 'pink',
    marginBottom: 30,
    alignItems: 'center',
    padding: 10,
  },
  delete: {
    width: 50,
    backgroundColor: 'orange',
    color: 'white',
    alignItems: 'center',
  },
});
