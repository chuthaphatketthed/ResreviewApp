import React, { useState, useEffect } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";

export default function ReseFood(props) {
    const food = [
        [
            { "id": "1", "title": "ร้านเฉลิมศรี", "uri": "https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/projectres/food1.jpeg" },
            { "id": "2", "title": "กะเพราป้าศรีรสเด็ด", "uri": "https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/projectres/food2.jpeg"  },
            { "id": "3", "title": "italian Naparema", "uri": "https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/projectres/food3.jpeg"  },
            { "id": "4", "title": "Kyokitsu Japan", "uri": "https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/projectres/food4.jpeg"  },
            { "id": "5", "title": "ตี๋เล็กติ่มซํา", "uri": "https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/projectres/food5.jpg" }
        ]
    ];
    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try{
            let text = await fetch('https://raw.githubusercontent.com/chuthaphatketthed/ResreviewApp/main/assets/json/food.json');
            let data = await text.json();
            console.log("Load Data : " , data);
            //SET STATE
            setOnlineTours(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }
    useEffect(() => {
        loadOnlineTours();
    }, []);
    
    return (
        <View style={{padding:20,marginTop:10}}>
            <Text style={{fontSize:20,alignSelf:'center',fontWeight:'bold'}}>ร้านอาหารในประเทศไทย</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:30,marginTop:50,fontWeight:'bold'}}>จองโต๊ะ</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:20,paddingBottom:10}}>ร้านอาหารที่แนะนำและมีรสชาติอร่อย!!</Text>
            </View>
            <FlatList
                horizontal={true}
                data={onlineTours}
                renderItem={({ item, index }) => {
                    console.log(item, index, item.uri);
                    return (
                        <View>
                            <View style={{ marginBottom: 10 ,marginRight : 10}}>
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
                                    <Text style={{ fontSize: 20,  color: "white",textAlign:'center', fontWeight:'bold' }}>
                                        {item.title}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    );
                }}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}