import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function ReseFood(props) 
{   
    const onPressButton = function () {
        console.log("button is pressed!!!");
    };
    const navigation = useNavigation();
    const food = [
        [
            { "id": "1", "title": "ร้านเฉลิมศรี", "uri": "https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/projectres/food1.jpeg" },
            { "id": "2", "title": "กะเพราป้าศรีรสเด็ด", "uri": "https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/projectres/food2.jpeg" },
            { "id": "3", "title": "italian Naparema", "uri": "https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/projectres/food3.jpeg" },
            { "id": "4", "title": "Kyokitsu Japan", "uri": "https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/projectres/food4.jpeg" },
            { "id": "5", "title": "ตี๋เล็กติ่มซํา", "uri": "https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/projectres/food5.jpg" }
        ]
    ];
    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try {
            let text = await fetch('https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/json/food.json');
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
                <Text style={{ fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>ร้านอาหารในประเทศไทย</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 30, marginTop: 50, fontWeight: 'bold' }}>จองโต๊ะ</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, paddingBottom: 10 }}>ร้านอาหารที่แนะนำและมีรสชาติอร่อย!!</Text>
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
                        source={require("../assets/projectres/china2.jpg")} />
                    <Image
                        style={{ width: Dimensions.get("screen").width / 3.0 - 20, height: 170, borderRadius: 10, marginTop: 10 }}
                        source={require("../assets/projectres/shabu1.jpg")} />
                    <Image
                        style={{ width: Dimensions.get("screen").width / 3.0 - 20, height: 170, borderRadius: 10, marginTop: 10 }}
                        source={require("../assets/projectres/pizza1.jpg")} />
                    <Image
                        style={{ width: Dimensions.get("screen").width / 3.0 - 20, height: 170, borderRadius: 10, marginTop: 10 }}
                        source={require("../assets/projectres/thaino1.jpg")} />
                    <Image
                        style={{ width: Dimensions.get("screen").width / 3.0 - 20, height: 170, borderRadius: 10, marginTop: 10 }}
                        source={require("../assets/projectres/steak1.jpg")} />
                    <Image
                        style={{ width: Dimensions.get("screen").width / 3.0 - 20, height: 170, borderRadius: 10, marginTop: 10 }}
                        source={require("../assets/projectres/sushi1.jpg")} />
                    <Image
                        style={{ width: Dimensions.get("screen").width / 3.0 - 20, height: 170, borderRadius: 10, marginTop: 10 }}
                        source={require("../assets/projectres/bbq1.jpg")} />
                </View>
               {/* ข้อความกลุ่ม 1 */}
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 30, marginTop: -1250 ,fontWeight:'bold'}}>
                        ร้านรื่นรส
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('food1')}>
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
                                จองร้านอาหาร
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 20, marginTop: -1220 }}>
                        ภัตตาคารอาหารจีนรสเด็ด
                    </Text>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 15, marginTop: -1120 ,textDecorationLine:'underline'}}>
                        เวลาเปิด-ปิด:เปิดทุกวัน ตั้งแต่เวลา 09:00-21:00
                    </Text>
                </View>
                {/* 2 */}
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 30, marginTop: -1070 ,fontWeight:'bold'}}>
                        ร้าน Halu
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('food2')}>
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
                                จองร้านอาหาร
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 20, marginTop: -1040 }}>
                        ร้านชาบูหมาล่าส่งตรงจากประเทศจีน
                    </Text>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 15, marginTop: -940 ,textDecorationLine:'underline'}}>
                        เวลาเปิด-ปิด:เปิดทุกวัน ตั้งแต่เวลา 8:00-23:00
                    </Text>
                </View>
                    {/* 3 */}
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 30, marginTop: -890 ,fontWeight:'bold'}}>
                        ร้าน Pizza manoliz
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('food3')}>
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
                                จองร้านอาหาร
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 20, marginTop: -860 }}>
                        พิซซ่าร้านดังจากประเทศอิตาลี
                    </Text>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 15, marginTop: -760 ,textDecorationLine:'underline'}}>
                        เวลาเปิด-ปิด:เปิด จ-ส ตั้งแต่เวลา 09:00-21:00
                    </Text>
                </View>
                    {/* 4 */}
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 30, marginTop: -710 ,fontWeight:'bold'}}>
                        ร้านก๋วยเตี๋ยวป้าแจ๋ว
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('food4')}>
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
                                จองร้านอาหาร
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 20, marginTop: -680 }}>
                        ร้านก๋วยเตี๋ยวเนื้อรสชาติดีที่เปฺิดมานานกว่า 40 ปี
                    </Text>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 15, marginTop: -580 ,textDecorationLine:'underline'}}>
                        เวลาเปิด-ปิด:เปิดทุกวัน ตั้งแต่เวลา 15:00-20:00
                    </Text>
                </View>
                    {/* 5 */}
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 30, marginTop: -530 ,fontWeight:'bold'}}>
                        ร้าน Steak Minihub
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('food5')}>
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
                                จองร้านอาหาร
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 20, marginTop: -500 }}>
                        ร้านสเต็กจากญี่ปุ่นที่ใช้เนื้อเกรด A5
                    </Text>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 15, marginTop: -400 ,textDecorationLine:'underline'}}>
                        เวลาเปิด-ปิด:เปิด จ-พฤ ตั้งแต่เวลา 17:00-23:00
                    </Text>
                </View>
                    {/* 6 */}
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 30, marginTop: -350 ,fontWeight:'bold'}}>
                        ร้าน Sushi Namake
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('food6')}>
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
                                จองร้านอาหาร
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 20, marginTop: -320 }}>
                        ร้านซูชิระดับ 1 ดาวมิชลินสตาร์
                    </Text>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 15, marginTop: -220 ,textDecorationLine:'underline'}}>
                        เวลาเปิด-ปิด:เปิด จ-ศ ตั้งแต่เวลา 19:00-01:00
                    </Text>
                </View>
                    {/* 7 */}
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 30, marginTop: -170 ,fontWeight:'bold'}}>
                        ร้าน Konum BBQ
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('food7')}>
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
                                จองร้านอาหาร
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 20, marginTop: -140 }}>
                        ร้านปิ้งย่างสไตล์เกาหลีที่มีวัตถุดิบเกรดคุณภาพ
                    </Text>
                </View>
                <View>
                    <Text style={{ paddingLeft: 210, fontSize: 15, marginTop: -40 ,textDecorationLine:'underline'}}>
                        เวลาเปิด-ปิด:เปิดทุกวัน ตั้งแต่เวลา 11:00-24:00
                    </Text>
                </View>


            </View>
        </ScrollView>
    );
}
