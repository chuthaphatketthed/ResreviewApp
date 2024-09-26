import React, { useState, useEffect } from "react";
import { Dimensions, FlatList, Image, ScrollView, Text, View } from "react-native";
import Cover from "../components/Cover";
// import Event from "../../components/week6/Event";
import HomeIconMenu from "../components/HomeIconMenu"
import BottomTab from "../components/BottomTab";
// import Tour from "../../components/week6/Tour";
// import TourFlatList from "../../components/week6/TourFlatList";

export default function Home(){ 
const food = [
    { id: "1", title: "Fukubuki", uri: "https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/img/hotelflat1.jpg" },
    { id: "2", title: "LivelySun Hotel", uri: "https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/img/hotelflat2.jpg" },
    { id: "3", title: "Saru", uri: "https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/img/hotelflat3.jpg" },
    { id: "4", title: "Kakaki Hotel", uri: "https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/img/hotelflat4.jpg" },
    { id: "5", title: "Hotel Luna", uri: "https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/img/hotelflat5.jpg" },
];

const [onlineTours, setOnlineTours] = useState([]);

const loadOnlineTours = async () => {
    try {
        let response = await fetch('https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/json/hotel.json');
        let data = await response.json();
        console.log("Loaded Data: ", data);
        setOnlineTours(data);
    } catch (error) {
        console.log("Error loading data: ", error);
    }
}

useEffect(() => {
    loadOnlineTours();
}, []);
{
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'lightyellow', marginTop: 20 }}>
                <Cover />
                <HomeIconMenu />
                 <View style={{ padding: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>โรงแรมราคาดีในประเทศไทย</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 30, marginTop: 10, fontWeight: 'bold' }}>จองโรงแรมที่ถูกใจของคุณ</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, paddingBottom: 10 }}>โรงแรมน่าอยู๋ วิวดี!!</Text>
                    </View>

                    {/* FlatList แนวนอน */}
                    <FlatList
                        horizontal={true}
                        data={onlineTours.length > 0 ? onlineTours : food}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ marginBottom: 10, marginRight: 10 }}>
                                    <Image
                                        style={{ width: Dimensions.get("screen").width / 2.0 - 20, height: 380, borderRadius: 10 }}
                                        source={{ uri: item.uri }}
                                    />
                                    <View
                                        style={{
                                            marginTop: -30,
                                            height: 30,
                                            width: '100%',
                                            paddingHorizontal: 10,
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            borderBottomLeftRadius: 10,
                                            borderBottomRightRadius: 10,
                                        }}
                                    >
                                        <Text style={{ fontSize: 20, color: "white", textAlign: 'center', fontWeight: 'bold' }}>
                                            {item.title}
                                        </Text>
                                    </View>
                                </View>
                            );
                        }}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        </ScrollView>
    );
}
}