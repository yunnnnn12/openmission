import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import InputForm from '../components/InputForm';
import TodoItem from '../components/TodoItem';

const SERVER_URL = 'https://todoweb-gbcqgeh8hndcbuge.koreacentral-01.azurewebsites.net';

const MainScreen = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get(`${SERVER_URL}/todos`);
      const todoList = Array.isArray(res.data) ? res.data : res.data.todos || [];
      setTodos(todoList.filter(t => !t.completed));
      setCompletedTodos(todoList.filter(t => t.completed));
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  useEffect(() => { fetchTodos(); }, []);

  const addTodo = async (title) => {
    if (!title.trim()) return;
    await axios.post(`${SERVER_URL}/todos`, { title });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${SERVER_URL}/todos/${id}`);
    fetchTodos();
  };

  const completeTodo = async (id) => {
    await axios.put(`${SERVER_URL}/todos/${id}/complete`);
    fetchTodos();
  };

  return (
    <View style={styles.container}>
      <InputForm onSubmit={addTodo} />

      <Text style={styles.sectionTitle}>할 일</Text>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            item={item.title}
            onDelete={() => deleteTodo(item.id)}
            onComplete={() => completeTodo(item.id)}
          />
        )}
        keyExtractor={(item) => 'todo-' + item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>할 일이 없습니다.</Text>}
      />

      <Text style={styles.sectionTitle}>완료된 일</Text>
      <FlatList
        data={completedTodos}
        renderItem={({ item }) => (
          <TodoItem
            item={item.title}
            completed
            onDelete={() => deleteTodo(item.id)} // 완료된 일도 삭제 가능
          />
        )}
        keyExtractor={(item) => 'completed-' + item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>완료된 일이 없습니다.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 15, marginBottom: 5, paddingLeft: 10 },
  emptyText: { fontSize: 16, color: '#888', paddingLeft: 10, fontStyle: 'italic' },
});

export default MainScreen;
