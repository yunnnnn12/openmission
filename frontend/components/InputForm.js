import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const InputForm = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (!text.trim()) return;
    onSubmit(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="할 일을 작성해주세요."
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addText}>＋</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginBottom: 15, paddingHorizontal: 10 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontSize: 16,
    marginRight: 10,
  },
  addButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#007aff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: { fontSize: 24, color: 'white', fontWeight: 'bold', lineHeight: 28 },
});

export default InputForm;
