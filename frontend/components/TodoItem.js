import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TodoItem = ({ item, onDelete, onComplete, completed }) => {
  return (
    <View style={styles.container}>
      {/* 체크박스 제거 → 그냥 텍스트만 */}
      <Text style={styles.text}>{item}</Text>

      <View style={styles.buttonGroup}>
        {/* 완료되지 않은 경우: 완료 + 삭제 버튼 */}
        {!completed && (
          <Button title="완료" onPress={onComplete} />
        )}

        {/* 완료된 경우에도 삭제 버튼은 항상 보이게 */}
        <Button title="삭제" onPress={onDelete} color="#ff3b30" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  // 완료된 일도 중간줄 삭제 → 그냥 텍스트 스타일
  text: { fontSize: 16 },
  buttonGroup: { flexDirection: 'row', gap: 8 },
});

export default TodoItem;
