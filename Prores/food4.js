import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Food4() {


    const navigation = useNavigation();
    const handleBooking = async () => {
        const bookingData = {
          restaurantName: "ร้านก๋วยเตี๋ยวป้าแจ๋ว",
          bookingDate: new Date().toLocaleDateString(),
          guests: 2,
        };
    
        try {
          // Load existing bookings
          const savedBookings = await AsyncStorage.getItem('bookings');
          const bookings = savedBookings ? JSON.parse(savedBookings) : [];
    
          // Save the new booking
          bookings.push(bookingData);
          await AsyncStorage.setItem('bookings', JSON.stringify(bookings));
    
          // Alert the user and navigate to the booking confirmation screen
          Alert.alert("จองเรียบร้อย", "การจองของคุณเสร็จเรียบร้อยแล้ว", [
            {
              text: "ตกลง",
              onPress: () => {
                navigation.navigate('BookingConfirmation');
              },
            },
          ]);
        } catch (error) {
          console.error('Failed to save booking:', error);
        }
      };

    return (
        <ScrollView>
            <View style={{ padding: 30 }}>
                <View style={{ alignSelf: 'flex-start', marginBottom: -30 }}>
                    
                </View>
                <View style={{ alignSelf: 'flex-end', marginBottomBottom: -50 }}>
                    {/* <Fontisto name="zoom" size={24} color="black" /> */}
                </View>
                <Text style={{ fontSize: 20, alignSelf: 'center', paddingBottom: 10, marginTop: -25 }}> ร้านก๋วยเตี๋ยวป้าแจ๋ว </Text>
                <View style={{ flexDirection: "row" }}>
                    <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 3 / 2 }} source={require("../assets/projectres/thaino1.jpg")} />
                </View>
                {/* View ก้อนที่ 3 */}
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 50 }}>ร้านก๋วยเตี๋ยวป้าแจ๋ว</Text>
                </View>
                {/* View ก้อนที่ 4 */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle-thin" size={25} color="#50B498" />
                        <Text style={{ fontSize: 20, paddingLeft: 10 }}>รีวิว 530 รายการ</Text>
                    </View>
                </View>
                {/* View ก้อนที่ 5 */}
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 20, color: 'black' }} >ร้านอาหารอันดับที่ 190 จาก 340 แห่งในประเทศไทย</Text>
                </View>
                <View style={{ marginTop: 4 }}>
                    <Text style={{ fontSize: 20, color: 'black', textDecorationLine: 'underline', fontWeight: 'bold' }} >เยี่ยมชมเว็ปไซต์</Text>
                    <Text style={{ fontSize: 20, color: 'black', textDecorationLine: 'underline', marginTop: -27, marginLeft: 150, fontWeight: 'bold' }} >โทร</Text>
                    <Text style={{ fontSize: 20, color: 'black', textDecorationLine: 'underline', marginTop: -27, marginLeft: 200, fontWeight: 'bold' }} >อีเมลล์</Text>
                </View>
                <View style={{ flexDirection: 'row', borderRadius: 40, borderWidth: 2, padding: 20 }}>
                    <Fontisto name="date" size={25} color="black" />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}> 10 ส.ค.</Text>
                    <AntDesign name="arrowright" size={24} color="black" />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}> 16 ส.ค.</Text>
                    <AntDesign name="team" size={24} style={{ marginLeft: 240 }} color="black" />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}> 2</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, padding: 5 }}>
                    <AntDesign name="home" size={35} color="black" />
                    <Text style={{ color: "red", fontSize: 20, marginLeft: 5, marginTop: 10 }}>FoodinThai.com</Text>
                    <Text style={{ color: "black", fontSize: 15, marginTop: 37, marginLeft: -130 }}>ยกเลิกได้ฟรีถึงวันที่ 20/08/22</Text>
                    <View style={{ marginLeft: 100 }}>
                        <Text style={{ color: "grey", fontSize: 20, marginLeft: 155, marginTop: 10, textDecorationLine: 'line-through' }}>$20</Text>
                    </View>
                    <View>
                        <Text style={{ color: "black", fontSize: 30, marginLeft: -69, marginTop: 30, fontWeight: 'bold' }}>$15</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 20, marginBottom: 10 }}>สถานที่ตั้ง:</Text>
                    <MapView
                        style={{ height: 300, width: '100%' }}
                        initialRegion={{
                            latitude: 13.698338,  // แก้ไขเป็นพิกัดของสถานที่ที่ต้องการ
                            longitude: 100.522271, // แก้ไขเป็นพิกัดของสถานที่ที่ต้องการ
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: 13.698338, // แก้ไขเป็นพิกัดของสถานที่ที่ต้องการ
                                longitude: 100.522271, // แก้ไขเป็นพิกัดของสถานที่ที่ต้องการ
                            }}
                            title="ร้านก๋วยเตี๋ยวป้าแจ๋ว"
                            description="สถานที่ตั้งของร้านอาหาร"
                        />
                    </MapView>
                </View>
                <TouchableOpacity onPress={handleBooking}>
                    <View style={{ padding: 25, backgroundColor: "#D3BC8D", borderRadius: 40, marginTop: 10 }}>
                        <Text style={{ fontSize: 20, textAlign: "center", color: 'black', fontWeight: 'bold' }}>
                            จองเลย
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
