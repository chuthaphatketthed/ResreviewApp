import React from "react";
import { ScrollView, View } from "react-native";
import Cover from "../components/Cover";
// import Event from "../../components/week6/Event";
import HomeIconMenu from ".././components/HomeIconMenu";
// import Tour from "../../components/week6/Tour";
// import TourFlatList from "../../components/week6/TourFlatList";

export default function Home() {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'lightyellow', marginTop: 20 }}>
                <Cover />
                <HomeIconMenu />
            </View>
        </ScrollView>

    );
}