// HotelBookingConfirmationScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HotelBookingConfirmationScreen() {
  const [bookings, setBookings] = useState([]);

  // โหลดข้อมูลการจองเมื่อหน้าถูกเปิดขึ้น
  useEffect(() => {
    const loadBookings = async () => {
      try {
        const savedBookings = await AsyncStorage.getItem('hotelBookings');
        if (savedBookings) {
          setBookings(JSON.parse(savedBookings));
        }
      } catch (error) {
        console.error('Failed to load bookings:', error);
      }
    };

    loadBookings();
  }, []);

  // ฟังก์ชันสำหรับลบข้อมูลการจอง
  const handleDeleteBooking = async (index) => {
    Alert.alert(
      'ยืนยันการลบ',
      'คุณแน่ใจหรือว่าต้องการลบข้อมูลการจองนี้?',
      [
        { text: 'ยกเลิก', style: 'cancel' },
        {
          text: 'ลบ',
          onPress: async () => {
            try {
              const updatedBookings = bookings.filter((_, i) => i !== index);
              setBookings(updatedBookings);
              await AsyncStorage.setItem('hotelBookings', JSON.stringify(updatedBookings));
              Alert.alert('ลบเรียบร้อย', 'ข้อมูลการจองถูกลบเรียบร้อยแล้ว');
            } catch (error) {
              console.error('Failed to delete booking:', error);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  // ฟังก์ชันสำหรับการแสดงข้อมูลการจองแต่ละรายการ
  const renderBookingItem = ({ item, index }) => (
    <View style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.hotelName}</Text>
      <Text style={{ fontSize: 16 }}>{`วันที่เช็คอิน: ${item.checkInDate}`}</Text>
      <Text style={{ fontSize: 16 }}>{`วันที่เช็คเอาท์: ${item.checkOutDate}`}</Text>
      <Text style={{ fontSize: 16 }}>{`จำนวนห้อง: ${item.rooms}`}</Text>
      <Text style={{ fontSize: 16 }}>{`จำนวนคน: ${item.guests}`}</Text>
      <TouchableOpacity onPress={() => handleDeleteBooking(index)} style={{ marginTop: 10 }}>
        <Text style={{ color: 'red', fontSize: 16 }}>ลบข้อมูลการจอง</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>ข้อมูลการจองโรงแรมของคุณ</Text>
      {bookings.length > 0 ? (
        <FlatList
          data={bookings}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderBookingItem}
        />
      ) : (
        <Text>ไม่มีข้อมูลการจอง</Text>
      )}
    </View>
  );
}
