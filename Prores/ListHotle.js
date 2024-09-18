import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function ListHotle(props) {
    const onPressButton = function () {
        console.log("button is pressed!!!");
    };
    const navigation = useNavigation();
    const food = [
        [

            { "id": "1", "title": "Fukubuki", "uri": "https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/img/hotelflat1.jpg" },
            { "id": "2", "title": "livelySun Hotel", "uri": "https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/img/hotelflat2.jpg" },
            { "id": "3", "title": "Saru", "uri": "https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/img/hotelflat3.jpg" },
            { "id": "4", "title": "Kakaki Hotel", "uri": "https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/img/hotelflat4.jpg" },
            { "id": "5", "title": "Hotel Luna", "uri": "https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/img/hotelflat5.jpg" }

        ]
    ];
    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try {
            let text = await fetch('https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/json/hotel.json');
            let data = await text.json();
            console.log("Load Data : ", data);
            //SET STATE
            setOnlineTours(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }
    useEffect(() => {
        loadOnlineTours();
    }, []);

    return (
        <ScrollView>
            <View style={{ padding: 20, marginTop: 10 }}>
                <Text style={{ fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>โรงแรมราคาดีในประเทศไทย</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 30, marginTop: 40, fontWeight: 'bold' }}>จองโรงแรมที่ถูกใจของคุณ</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, paddingBottom: 10 }}>โรงแรมน่าอยู๋ วิวดี!!</Text>
                </View>
                <FlatList
                    horizontal={true}
                    data={onlineTours}
                    renderItem={({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View>
                                <View style={{ marginBottom: 10, marginRight: 10 }}>
                                    <Image
                                        style={{ width: Dimensions.get("screen").width / 2.0 - 20, height: 380, borderRadius: 10 }}
                                        source={{ uri: item.uri }}
                                    />
                                    <View
                                        style={{
                                            marginTop: -30,
                                            height: 30,
                                            width: 280,
                                            paddingHorizontal: 10,
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            opacity: 1,
                                            borderBottomLeftRadius: 10,
                                            borderBottomRightRadius: 10,
                                        }}
                                    >
                                        <Text style={{ fontSize: 20, color: "white", textAlign: 'center', fontWeight: 'bold' }}>
                                            {item.title}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        );
                    }}
                    keyExtractor={(item) => item.id}
                />
                {/* ท้าย flatList */}
                <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        ร้านอาหารแนะนำน่ากิน
                    </Text>
                </View>
                <View>
                    <Image
                        style={{ width: Dimensions.get("screen").width / 3.0 - 20, height: 170, borderRadius: 10, marginTop: 10 }}
                        source={require("../assets/img/hotellist1.jpg")} />
                    <Image
                        style={{ width: Dimensions.get("screen").width / 3.0 - 20, height: 170, borderRadius: 10, marginTop: 10 }}
                        source={require("../assets/img/hotellist2.jpg")} />
                    <Image
                        style={{ width: Dimensions.get("screen").width / 3.0 - 20, height: 170, borderRadius: 10, marginTop: 10 }}
                        source={require("../assets/img/hotellist3.jpg")} />
                    <Image
                        style={{ width: Dimensions.get("screen").width / 3.0 - 20, height: 170, borderRadius: 10, marginTop: 10 }}
                        source={require("../assets/img/hotellist4.jpg")} />
                    <Image
                        style={{ width: Dimensions.get("screen").width / 3.0 - 20, height: 170, borderRadius: 10, marginTop: 10 }}
                        source={require("../assets/img/hotellist5.jpg")} />
                    <Image
                        style={{ width: Dimensions.get("screen").width / 3.0 - 20, height: 170, borderRadius: 10, marginTop: 10 }}
                        source={require("../assets/img/hotellist6.jpg")} />
                    <Image
                        style={{ width: Dimensions.get("screen").width / 3.0 - 20, height: 170, borderRadius: 10, marginTop: 10 }}
                        source={require("../assets/img/hotellist7.jpg")} />
                </View>
                {/* ข้อความกลุ่ม 1 */}
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 30, marginTop: -1250, fontWeight: 'bold' }}>
                    Evergreen Suites
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Hotel')}>
                        <View style={{
                            backgroundColor: "#D3BC8D",
                            borderRadius: 20,
                            width: 150,
                            height: 40,
                            marginLeft: 230,
                            marginTop: 45,
                            justifyContent: 'center', // จัดข้อความให้อยู่ตรงกลางแนวตั้ง
                            alignItems: 'center' // จัดข้อความให้อยู่ตรงกลางแนวนอน
                        }}>
                            <Text style={{
                                fontSize: 20,
                                color: 'black',
                                fontWeight: 'bold'
                            }}>
                                จองโรงแรม
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 15, marginTop: -1220 }}>
                    โรงแรมสไตล์โมเดิร์นใจกลางเมือง มีบรรยากาศผ่อนคลายเหมาะกับการพักผ่อนในวันหยุด
                    </Text>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 15, marginTop: -1120, textDecorationLine: 'underline' }}>
                    เวลาเปิด-ปิด: เปิดทุกวัน 24 ชั่วโมง
                    </Text>
                </View>
                {/* 2 */}
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 30, marginTop: -1070, fontWeight: 'bold' }}>
                    The Horizon Retreat
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Hotel2')}>
                        <View style={{
                            backgroundColor: "#D3BC8D",
                            borderRadius: 20,
                            width: 150,
                            height: 40,
                            marginLeft: 230,
                            marginTop: 45,
                            justifyContent: 'center', // จัดข้อความให้อยู่ตรงกลางแนวตั้ง
                            alignItems: 'center' // จัดข้อความให้อยู่ตรงกลางแนวนอน
                        }}>
                            <Text style={{
                                fontSize: 20,
                                color: 'black',
                                fontWeight: 'bold'
                            }}>
                                จองโรงแรม
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 15, marginTop: -1040 }}>
                    รีสอร์ทสุดหรูท่ามกลางธรรมชาติ ตกแต่งด้วยสถาปัตยกรรมที่เรียบง่ายแต่หรูหรา
                    </Text>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 15, marginTop: -940, textDecorationLine: 'underline' }}>
                    เวลาเปิด-ปิด: เปิดทุกวัน 24 ชั่วโมง
                    </Text>
                </View>
                {/* 3 */}
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 30, marginTop: -890, fontWeight: 'bold' }}>
                        Skyline Resort
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Hotel3')}>
                        <View style={{
                            backgroundColor: "#D3BC8D",
                            borderRadius: 20,
                            width: 150,
                            height: 40,
                            marginLeft: 230,
                            marginTop: 45,
                            justifyContent: 'center', // จัดข้อความให้อยู่ตรงกลางแนวตั้ง
                            alignItems: 'center' // จัดข้อความให้อยู่ตรงกลางแนวนอน
                        }}>
                            <Text style={{
                                fontSize: 20,
                                color: 'black',
                                fontWeight: 'bold'
                            }}>
                                จองโรงแรม
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 15, marginTop: -860 }}>
                     รีสอร์ทสุดหรูพร้อมวิวทะเลแบบล้อมตัว 
                    </Text>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 15, marginTop: -760, textDecorationLine: 'underline' }}>
                    เวลาเปิด-ปิด: เปิดทุกวัน 24 ชั่วโมง
                    </Text>
                </View>
                {/* 4 */}
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 30, marginTop: -710, fontWeight: 'bold' }}>
                    Urban Oasis Hotel
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Hotel4')}>
                        <View style={{
                            backgroundColor: "#D3BC8D",
                            borderRadius: 20,
                            width: 150,
                            height: 40,
                            marginLeft: 230,
                            marginTop: 45,
                            justifyContent: 'center', // จัดข้อความให้อยู่ตรงกลางแนวตั้ง
                            alignItems: 'center' // จัดข้อความให้อยู่ตรงกลางแนวนอน
                        }}>
                            <Text style={{
                                fontSize: 20,
                                color: 'black',
                                fontWeight: 'bold'
                            }}>
                                จองโรงแรม
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 15, marginTop: -680 }}>
                    โรงแรมหรูใจกลางเมืองที่ผสมผสานความทันสมัยและความสะดวกสบาย
                    </Text>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 15, marginTop: -580, textDecorationLine: 'underline' }}>
                    เวลาเปิด-ปิด: เปิดทุกวัน 24 ชั่วโมง
                    </Text>
                </View>
                {/* 5 */}
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 30, marginTop: -530, fontWeight: 'bold' }}>
                    Damview Resort
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Hotel5')}>
                        <View style={{
                            backgroundColor: "#D3BC8D",
                            borderRadius: 20,
                            width: 150,
                            height: 40,
                            marginLeft: 230,
                            marginTop: 45,
                            justifyContent: 'center', // จัดข้อความให้อยู่ตรงกลางแนวตั้ง
                            alignItems: 'center' // จัดข้อความให้อยู่ตรงกลางแนวนอน
                        }}>
                            <Text style={{
                                fontSize: 20,
                                color: 'black',
                                fontWeight: 'bold'
                            }}>
                                จองโรงแรม
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 15, marginTop: -500 }}>
                    รีสอร์ทสุดชิวตั้งอยู่กลางเขื่อน พร้อมวิวทิวทัศน์ของทะเลสาบและภูเขา มีบริการกิจกรรมกลางแจ้ง
                    </Text>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 15, marginTop: -400, textDecorationLine: 'underline' }}>
                    เวลาเปิด-ปิด: เปิดทุกวัน 24 ชั่วโมง
                    </Text>
                </View>
                {/* 6 */}
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 30, marginTop: -350, fontWeight: 'bold' }}>
                    Riverside Grand Hotel
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Hotel6')}>
                        <View style={{
                            backgroundColor: "#D3BC8D",
                            borderRadius: 20,
                            width: 150,
                            height: 40,
                            marginLeft: 230,
                            marginTop: 45,
                            justifyContent: 'center', // จัดข้อความให้อยู่ตรงกลางแนวตั้ง
                            alignItems: 'center' // จัดข้อความให้อยู่ตรงกลางแนวนอน
                        }}>
                            <Text style={{
                                fontSize: 20,
                                color: 'black',
                                fontWeight: 'bold'
                            }}>
                                จองโรงแรม
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 15, marginTop: -320 }}>
                    โรงแรมที่มีบริการห้องสวีทสะดวกสบาย พร้อมบาร์และร้านอาหารที่มีวิวเมืองตระการตา
                    </Text>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 15, marginTop: -220, textDecorationLine: 'underline' }}>
                    เวลาเปิด-ปิด: เปิดทุกวัน 24 ชั่วโมง
                    </Text>
                </View>
                {/* 7 */}
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 30, marginTop: -170, fontWeight: 'bold' }}>
                    Central Plaza Suites
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Hotel7')}>
                        <View style={{
                            backgroundColor: "#D3BC8D",
                            borderRadius: 20,
                            width: 150,
                            height: 40,
                            marginLeft: 230,
                            marginTop: 45,
                            justifyContent: 'center', // จัดข้อความให้อยู่ตรงกลางแนวตั้ง
                            alignItems: 'center' // จัดข้อความให้อยู่ตรงกลางแนวนอน
                        }}>
                            <Text style={{
                                fontSize: 20,
                                color: 'black',
                                fontWeight: 'bold'
                            }}>
                                จองโรงแรม
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 15, marginTop: -140 }}>
                    โรงแรมบูติกที่โดดเด่นด้วยการตกแต่งสไตล์โมเดิร์น ตั้งอยู่ในย่านธุรกิจและแหล่งช็อปปิ้งหลัก
                    </Text>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 15, marginTop: -40, textDecorationLine: 'underline' }}>
                    เวลาเปิด-ปิด: เปิดทุกวัน 24 ชั่วโมง
                    </Text>
                </View>


            </View>
        </ScrollView>
    );
}
