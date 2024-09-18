// screens/ReviewListScreen.js
import React, { useState, useEffect } from 'react';
import { Button, View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entypo } from '@expo/vector-icons';

export default function ReviewListScreen({ route, navigation }) {
  const [reviews, setReviews] = useState([]);

  // Load reviews on mount or when refreshing
  useEffect(() => {
    const loadReviews = async () => {
      try {
        const savedReviews = await AsyncStorage.getItem('reviews');
        if (savedReviews) {
          const parsedReviews = JSON.parse(savedReviews);
          setReviews(parsedReviews);
        }
      } catch (error) {
        console.error('Failed to load reviews:', error);
      }
    };

    loadReviews();
  }, [route.params?.refresh]);

  const handleDelete = (index) => {
    Alert.alert(
      'ยืนยันการลบ',
      'คุณแน่ใจหรือว่าต้องการลบรีวิวนี้?',
      [
        {
          text: 'ยกเลิก',
          style: 'cancel',
        },
        {
          text: 'ลบ',
          onPress: async () => {
            try {
              const updatedReviews = reviews.filter((_, i) => i !== index);
              await AsyncStorage.setItem('reviews', JSON.stringify(updatedReviews));
              setReviews(updatedReviews);
              alert('รีวิวถูกลบเรียบร้อยแล้ว');
            } catch (error) {
              console.error('Failed to delete review:', error);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  const renderItem = ({ item, index }) => (
    <View style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.topic}</Text>
      <Text style={{ fontSize: 16, marginVertical: 5 }}>{item.info}</Text>
      <Text style={{ fontSize: 14, color: 'gray' }}>{item.date}</Text>
      <TouchableOpacity onPress={() => handleDelete(index)} style={{ marginTop: 10 }}>
        <Entypo name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={reviews}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <Button
        title="เพิ่มรีวิวใหม่"
        onPress={() => navigation.navigate('ReviewForm')}
      />
    </View>
  );
}
