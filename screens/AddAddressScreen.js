import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable,
    TextInput,
} from "react-native";
import React, { useEffect, useContext, useState, useCallback } from "react";
import { Feather, AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import axios from "axios";
import { UserType } from "../UserContext";

const AddAddressScreen = () => {
    const navigation = useNavigation();
    const [addresses, setAddresses] = useState([
        {
            name: "Kamal",
            mobileNo: "0714810619",
            houseNo: "123",
            street: "Chatham St.",
            landmark: "Office",
            city: "Matara",
            country: "Srilanka",
            postalCode: "34545",
        },
        {
            name: "Saman",
            mobileNo: "0714810619",
            houseNo: "339/C",
            street: "Heave Avenue",
            landmark: "House",
            city: "Horana",
            country: "Srilanka",
            postalCode: "34545",
        },
    ]);
    const { userId, setUserId } = useContext(UserType);

    // useEffect(() => {
    //     fetchAddresses();
    // }, []);

    // const fetchAddresses = async () => {
    //     try {
    //         const response = await axios.get(
    //             `http://localhost:8000/addresses/${userId}`
    //         );
    //         const { addresses } = response.data;

    //         setAddresses(addresses);
    //     } catch (error) {
    //         console.log("error", error);
    //     }
    // };

    // useFocusEffect(
    //     useCallback(() => {
    //         fetchAddresses();
    //     }, [])
    // );

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 50, backgroundColor: "#FAF1E4", }}
        >
            <View
                style={{
                    backgroundColor: "#435334",
                    padding: 10,
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Pressable
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 7,
                        gap: 10,
                        backgroundColor: "white",
                        borderRadius: 3,
                        height: 38,
                        flex: 1,
                    }}
                >
                    <AntDesign
                        style={{ paddingLeft: 10 }}
                        name="search1"
                        size={22}
                        color="black"
                    />
                    <TextInput placeholder="Search in EZ-Cart" />
                </Pressable>

                <Feather name="mic" size={24} color="black" />
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Your Addresses
                </Text>

                <Pressable
                    onPress={() => navigation.navigate("Add")}
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 10,
                        borderColor: "#435334",
                        borderWidth: 1,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        paddingVertical: 7,
                        paddingHorizontal: 5,
                    }}
                >
                    <Text>Add a new Address</Text>
                    <MaterialIcons
                        name="keyboard-arrow-right"
                        size={24}
                        color="black"
                    />
                </Pressable>

                <Pressable>
                    {/* all the added adresses */}
                    {addresses?.map((item, index) => (
                        <Pressable
                            key={index}
                            style={{
                                borderWidth: 1,
                                borderColor: "#D0D0D0",
                                padding: 10,
                                flexDirection: "column",
                                gap: 5,
                                marginVertical: 10,
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 3,
                                }}
                            >
                                <Text
                                    style={{ fontSize: 15, fontWeight: "bold" }}
                                >
                                    {item?.name}
                                </Text>
                                <Entypo
                                    name="location-pin"
                                    size={24}
                                    color="red"
                                />
                            </View>

                            <Text style={{ fontSize: 15, color: "#181818" }}>
                                {item?.houseNo}, 
                            </Text>

                            <Text style={{ fontSize: 15, color: "#181818" }}>
                                {item?.street}
                            </Text>

                            <Text style={{ fontSize: 15, color: "#181818" }}>
                                {item?.city}, {item?.country}
                            </Text>

                            <Text style={{ fontSize: 15, color: "#181818" }}>
                                {item?.mobileNo}
                            </Text>
                            <Text style={{ fontSize: 15, color: "#181818" }}>
                                postal code : {item?.postalCode}
                            </Text>

                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10,
                                    marginTop: 7,
                                }}
                            >
                                <Pressable
                                    style={{
                                        backgroundColor: "#F5F5F5",
                                        paddingHorizontal: 10,
                                        paddingVertical: 6,
                                        borderRadius: 5,
                                        borderWidth: 0.9,
                                        borderColor: "#D0D0D0",
                                    }}
                                >
                                    <Text>Edit</Text>
                                </Pressable>

                                <Pressable
                                    style={{
                                        backgroundColor: "#F5F5F5",
                                        paddingHorizontal: 10,
                                        paddingVertical: 6,
                                        borderRadius: 5,
                                        borderWidth: 0.9,
                                        borderColor: "#D0D0D0",
                                    }}
                                >
                                    <Text>Remove</Text>
                                </Pressable>

                                <Pressable
                                    style={{
                                        backgroundColor: "#F5F5F5",
                                        paddingHorizontal: 10,
                                        paddingVertical: 6,
                                        borderRadius: 5,
                                        borderWidth: 0.9,
                                        borderColor: "#D0D0D0",
                                    }}
                                >
                                    <Text>Set as Default</Text>
                                </Pressable>
                            </View>
                        </Pressable>
                    ))}
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default AddAddressScreen;

const styles = StyleSheet.create({});
