import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Review() {
    return (
        <ScrollView>
            <View style={{ padding: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, alignItems: 'center', paddingRight: 10 }}>
                    <Text style={{ fontSize: 30 }}>รีวิว</Text>
                    <AntDesign name="search1" size={30} color="black" />
                </View>

                {/* รีวิว 1 */}
                <View style={{ flexDirection: "row", padding: 20 }}>
                    <Image style={{ width: 60, height: 60, borderRadius: 60 / 2 }} source={require("../assets/projectres/profile-2.jpg")} />
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ fontSize: 20 }}>Haruka Isaki</Text>
                        <Text style={{ color: "gray" }}>ญี่ปุ่น | โตเกียว</Text>
                        <Text style={{ color: "gray" }}>ผลงาน 100 รายการ</Text>
                        <View style={{ paddingLeft: 350, marginTop: -40 }}>
                            <AntDesign name="like2" size={20} color="black" />
                            <Text style={{ paddingLeft: 27, marginTop: -20, fontSize: 15, color: "black" }}>8</Text>
                            <View style={{ paddingLeft: 50, marginTop: -23 }}>
                                <Feather name="more-vertical" size={25} color="black" />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 5, padding: 5 }}>
                    <View style={{ flexDirection: "row", margin: 5 }}>
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle-thin" size={25} color="#50B498" />
                    </View>
                </View>
                <View style={{ padding: 10, marginTop: -15 }}>
                    <Text style={{ fontSize: 20 }}>ห้องนี้เป็นห้องติดทะเล เห็นวิวทะเลชัดมาก!</Text>
                    <Text style={{ fontSize: 15 }}>Jan 2023</Text>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: "#444444", fontSize: 20 }}>วิวเห็นทะเลสวยมาก{"\n"}
                            อาหารก็อร่อยแถมเป็นของดีทั้งนั้น{"\n"}
                            ห้องพักก็เตียงนุ่มสบายมาก{"\n"}</Text>
                    </View>
                    <View style={{ padding: 3, marginTop: -10, paddingBottom: 10 }}>
                        <Text style={{ color: "" }}>เขียนเมื่อ 25/01/2023</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", paddingLeft: 30, paddingRight: 30 }}>
                    <Image style={{ width: 150, height: 120 }} source={require("../assets/projectres/roomsea1.jpg")} />
                    <Image style={{ width: 150, height: 120 }} source={require("../assets/projectres/roomsea2.jpg")} />
                    <Image style={{ width: 150, height: 120 }} source={require("../assets/projectres/res1.jpg")} />
                </View>

                {/* รีวิว 2 */}
                <View style={{ flexDirection: "row", padding: 20, marginTop: 10 }}>
                    <Image style={{ width: 60, height: 60, borderRadius: 60 / 2 }} source={require("../assets/projectres/profile-3.jpg")} />
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ fontSize: 20 }}>Johny</Text>
                        <Text style={{ color: "gray" }}>สหรัฐอเมริกา | ชิคาโก</Text>
                        <Text style={{ color: "gray" }}>ผลงาน 50 รายการ</Text>
                        <View style={{ paddingLeft: 350, marginTop: -40 }}>
                            <AntDesign name="like2" size={20} color="black" />
                            <Text style={{ paddingLeft: 27, marginTop: -20, fontSize: 15, color: "black" }}>3</Text>
                            <View style={{ paddingLeft: 50, marginTop: -23 }}>
                                <Feather name="more-vertical" size={25} color="black" />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 5, padding: 5 }}>
                    <View style={{ flexDirection: "row", margin: 5 }}>
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle-thin" size={25} color="#50B498" />
                        <FontAwesome name="circle-thin" size={25} color="#50B498" />
                    </View>
                </View>
                <View style={{ padding: 10, marginTop: -15 }}>
                    <Text style={{ fontSize: 20 }}>ห้องสวยดีแต่ผนังมีรอยนิดหน่อย</Text>
                    <Text style={{ fontSize: 15 }}>Feb 2023</Text>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: "#444444", fontSize: 20 }}>วิวติดทะเลสวยดีครับ{"\n"}
                            สิ่งอำนวยความสะดวกโอเคดีครับ{"\n"}
                            แต่พนักงานบางคนไม่ค่อยสนใจลูกค้าเท่าไหร่{"\n"}
                            มีที่จอดรถเยอะและอาหารอร่อยครับ{"\n"}</Text>
                    </View>
                    <View style={{ padding: 3, marginTop: -10, paddingBottom: 10 }}>
                        <Text style={{ color: "" }}>เขียนเมื่อ 12/02/2023</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", paddingLeft: 30, paddingRight: 30 }}>
                    <Image style={{ width: 150, height: 120 }} source={require("../assets/projectres/roomsea3.jpg")} />
                    <Image style={{ width: 150, height: 120 }} source={require("../assets/projectres/res3.jpg")} />
                    <Image style={{ width: 150, height: 120 }} source={require("../assets/projectres/res2.jpg")} />
                </View>

                {/* รีวิว 3 */}
                <View style={{ flexDirection: "row", padding: 20, marginTop: 10 }}>
                    <Image style={{ width: 60, height: 60, borderRadius: 60 / 2 }} source={require("../assets/projectres/profile-4.jpg")} />
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ fontSize: 20 }}>Emma Smith</Text>
                        <Text style={{ color: "gray" }}>ออสเตรเลีย | ซิดนีย์</Text>
                        <Text style={{ color: "gray" }}>ผลงาน 80 รายการ</Text>
                        <View style={{ paddingLeft: 350, marginTop: -40 }}>
                            <AntDesign name="like2" size={20} color="black" />
                            <Text style={{ paddingLeft: 27, marginTop: -20, fontSize: 15, color: "black" }}>6</Text>
                            <View style={{ paddingLeft: 50, marginTop: -23 }}>
                                <Feather name="more-vertical" size={25} color="black" />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 5, padding: 5 }}>
                    <View style={{ flexDirection: "row", margin: 5 }}>
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle-thin" size={25} color="#50B498" />
                    </View>
                </View>
                <View style={{ padding: 10, marginTop: -15 }}>
                    <Text style={{ fontSize: 20 }}>บรรยากาศดีเยี่ยม แต่ราคาค่อนข้างสูง</Text>
                    <Text style={{ fontSize: 15 }}>Mar 2023</Text>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: "#444444", fontSize: 20 }}>ห้องพักสะอาดและเป็นระเบียบ{"\n"}
                            การบริการดีมาก{"\n"}
                            ราคาสูงไปหน่อยแต่ก็ถือว่าคุ้มค่าครับ{"\n"}</Text>
                    </View>
                    <View style={{ padding: 3, marginTop: -10, paddingBottom: 10 }}>
                        <Text style={{ color: "" }}>เขียนเมื่อ 05/03/2023</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", paddingLeft: 30, paddingRight: 30 }}>
                    <Image style={{ width: 150, height: 120 }} source={require("../assets/projectres/roomsea4.jpg")} />
                    <Image style={{ width: 150, height: 120 }} source={require("../assets/projectres/res4.jpg")} />
                    <Image style={{ width: 150, height: 120 }} source={require("../assets/projectres/res5.jpg")} />
                </View>

                {/* รีวิว 4 */}
                <View style={{ flexDirection: "row", padding: 20, marginTop: 10 }}>
                    <Image style={{ width: 60, height: 60, borderRadius: 60 / 2 }} source={require("../assets/projectres/profile-5.jpg")} />
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ fontSize: 20 }}>Luca Rossi</Text>
                        <Text style={{ color: "gray" }}>อิตาลี | มิลาน</Text>
                        <Text style={{ color: "gray" }}>ผลงาน 60 รายการ</Text>
                        <View style={{ paddingLeft: 350, marginTop: -40 }}>
                            <AntDesign name="like2" size={20} color="black" />
                            <Text style={{ paddingLeft: 27, marginTop: -20, fontSize: 15, color: "black" }}>4</Text>
                            <View style={{ paddingLeft: 50, marginTop: -23 }}>
                                <Feather name="more-vertical" size={25} color="black" />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 5, padding: 5 }}>
                    <View style={{ flexDirection: "row", margin: 5 }}>
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle-thin" size={25} color="#50B498" />
                    </View>
                </View>
                <View style={{ padding: 10, marginTop: -15 }}>
                    <Text style={{ fontSize: 20 }}>สถานที่ดีมาก แต่ค่อนข้างไกลจากตัวเมือง</Text>
                    <Text style={{ fontSize: 15 }}>Apr 2023</Text>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: "#444444", fontSize: 20 }}>ห้องพักสะอาดและมีสิ่งอำนวยความสะดวกครบ{"\n"}
                            อาหารเช้าเป็นบุฟเฟ่ต์ที่ดี{"\n"}
                            พนักงานบริการดี{"\n"}</Text>
                    </View>
                    <View style={{ padding: 3, marginTop: -10, paddingBottom: 10 }}>
                        <Text style={{ color: "" }}>เขียนเมื่อ 20/04/2023</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", paddingLeft: 30, paddingRight: 30 }}>
                    <Image style={{ width: 150, height: 120 }} source={require("../assets/projectres/foodh1.jpg")} />
                    <Image style={{ width: 150, height: 120 }} source={require("../assets/projectres/res6.jpg")} />
                    <Image style={{ width: 150, height: 120 }} source={require("../assets/projectres/foodh3.jpg")} />
                </View>

                {/* รีวิว 5 */}
                <View style={{ flexDirection: "row", padding: 20, marginTop: 10 }}>
                    <Image style={{ width: 60, height: 60, borderRadius: 60 / 2 }} source={require("../assets/projectres/profile-6.jpg")} />
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ fontSize: 20 }}>Mia Wong</Text>
                        <Text style={{ color: "gray" }}>ฮ่องกง | ฮ่องกง</Text>
                        <Text style={{ color: "gray" }}>ผลงาน 85 รายการ</Text>
                        <View style={{ paddingLeft: 350, marginTop: -40 }}>
                            <AntDesign name="like2" size={20} color="black" />
                            <Text style={{ paddingLeft: 27, marginTop: -20, fontSize: 15, color: "black" }}>5</Text>
                            <View style={{ paddingLeft: 50, marginTop: -23 }}>
                                <Feather name="more-vertical" size={25} color="black" />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 5, padding: 5 }}>
                    <View style={{ flexDirection: "row", margin: 5 }}>
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle" size={25} color="#50B498" />
                        <FontAwesome name="circle-thin" size={25} color="#50B498" />
                    </View>
                </View>
                <View style={{ padding: 10, marginTop: -15 }}>
                    <Text style={{ fontSize: 20 }}>สถานที่ดีเยี่ยมแต่บริการยังสามารถพัฒนาได้</Text>
                    <Text style={{ fontSize: 15 }}>May 2023</Text>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: "#444444", fontSize: 20 }}>ห้องพักดีเยี่ยม{"\n"}
                            วิวทะเลสวยมาก{"\n"}
                            การบริการต้องปรับปรุง{"\n"}</Text>
                    </View>
                    <View style={{ padding: 3, marginTop: -10, paddingBottom: 10 }}>
                        <Text style={{ color: "" }}>เขียนเมื่อ 10/05/2023</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", paddingLeft: 30, paddingRight: 30 }}>
                    <Image style={{ width: 150, height: 120 }} source={require("../assets/projectres/roomsea6.jpg")} />
                    <Image style={{ width: 150, height: 120 }} source={require("../assets/projectres/foodh2.jpg")} />
                    <Image style={{ width: 150, height: 120 }} source={require("../assets/projectres/res9.jpg")} />
                </View>
                
            </View>
        </ScrollView>
    );
}
