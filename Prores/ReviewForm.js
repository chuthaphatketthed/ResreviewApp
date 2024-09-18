// screens/ReviewFormScreen.js
import React, { useState } from 'react';
import { Button, TextInput, View, Text, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';

export default function ReviewFormScreen({ navigation }) {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSave = async () => {
    try {
      const existingReviews = await AsyncStorage.getItem('reviews');
      const reviews = existingReviews ? JSON.parse(existingReviews) : [];
      const newReview = {
        topic: selectedTopic,
        info: additionalInfo,
        date: new Date().toLocaleDateString(),
      };
      reviews.push(newReview);
      await AsyncStorage.setItem('reviews', JSON.stringify(reviews));
      console.log('Review saved:', newReview); // Debugging line
      alert('ข้อมูลได้ถูกบันทึกเรียบร้อย');
      navigation.navigate('ReviewList', { refresh: true });
    } catch (error) {
      console.error('Failed to save data:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>เลือกหัวข้อ</Text>
        <Picker
          selectedValue={selectedTopic}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedTopic(itemValue)}
        >
          <Picker.Item label="พบเจอ Bug" value="topic1" />
          <Picker.Item label="แจ้งปัญหาเกี่ยวกับที่พัก" value="topic2" />
          <Picker.Item label="แจ้งปัญหาเกี่ยวกับร้านอาหาร" value="topic3" />
          {/* เพิ่มหัวข้ออื่น ๆ ที่ต้องการ */}
        </Picker>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>ข้อมูลเพิ่มเติม</Text>
        <TextInput
          style={styles.textArea}
          value={additionalInfo}
          onChangeText={setAdditionalInfo}
          placeholder="กรุณากรอกข้อมูลเพิ่มเติม"
          multiline
        />
      </View>

      <Button title="บันทึก" onPress={handleSave} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    height: 100,
  },
});
