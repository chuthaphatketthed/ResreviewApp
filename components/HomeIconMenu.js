import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, TextInput, } from "react-native";
import MyIcon from "../components/MyIcon";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeIconMenu() {
  const navigation = useNavigation();
    return (
        <View style={{ marginHorizontal: 20, marginTop: -50, padding: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 20, backgroundColor: 'white' }}>
            {/* View ก้อนที่ 1 */}
            <View style={{ backgroundColor: '#eeeeee', padding: 10, borderRadius: 10 }} >
                <TextInput style={{ fontSize: 20 }} placeholder="What're you looking for ?" />
            </View>
            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <MyIcon title="จองร้านอาหาร" name="cutlery" size={30} color="orange" onPress={() => { navigation.navigate("ReseFood"); }} />
                <MyIcon title="จองโรงแรม" name="bed" size={30} color="orange" onPress={() => { navigation.navigate("ListHotle"); }} />
                <MyIcon title="รีวิวโรงแรม" name="star" size={30} color="orange" onPress={() => { navigation.navigate("Review"); }} />
                <MyIcon title="xxx" name="question" size={30} color="orange" />
            </View>
            {/* View ก้อนที่ 3 */}
            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <MyIcon title="xxx" name="question" size={30} color="orange" />
                <MyIcon title="xxx" name="question" size={30} color="orange" />
                <MyIcon title="xxx" name="question" size={30} color="orange" />
                <MyIcon title="More" name="ellipsis-h" size={30} color="orange" />
            </View>
        </View>
    );
}


