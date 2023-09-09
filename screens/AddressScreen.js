import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Pressable,
    Alert,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import jwt_decode from "jwt-decode";
import { UserType } from "../UserContext";

const AddressScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [street, setStreet] = useState("");
    const [landmark, setLandmark] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const { userId, setUserId } = useContext(UserType);

    useEffect(() => {
        const fetchUser = async () => {
            const token = await AsyncStorage.getItem("authToken");
            const decodedToken = jwt_decode(token);
            const userId = decodedToken.userId;
            setUserId(userId);
        };

        fetchUser();
    }, []);

    const handleAddAddress = () => {
        const address = {
            name,
            mobileNo,
            houseNo,
            street,
            landmark,
            postalCode,
        };

        axios
            .post("http://localhost:8000/addresses", { userId, address })
            .then((response) => {
                Alert.alert("Success", "Addresses added successfully");
                setName("");
                setMobileNo("");
                setHouseNo("");
                setStreet("");
                setLandmark("");
                setPostalCode("");

                setTimeout(() => {
                    navigation.goBack();
                }, 500);
            })
            .catch((error) => {
                Alert.alert("Error", "Failed to add address");
                console.log("error", error);
            });
    };

    return (
        <ScrollView style={{ marginTop: 50, backgroundColor: "#FAF1E4" }}>
            <View style={{ height: 50, backgroundColor: "#435334" }}>
            <Text style={{ fontSize: 17, fontWeight: "bold", textAlign:"center"}}>
                    Add a new Address
                </Text>

            </View>

            <View style={{ padding: 10 }}>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Full name (First and last name)
                    </Text>

                    <TextInput
                        value={name}
                        onChangeText={(text) => setName(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="Enter your name"
                    />
                </View>

                <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Mobile numebr
                    </Text>

                    <TextInput
                        value={mobileNo}
                        onChangeText={(text) => setMobileNo(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="Mobile No"
                    />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Flat/House No/Building/Company
                    </Text>

                    <TextInput
                        value={houseNo}
                        onChangeText={(text) => setHouseNo(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="House Number"
                    />
                </View>

                <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Area/District
                    </Text>
                    <TextInput
                        value={street}
                        onChangeText={(text) => setStreet(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="Area"
                    />
                </View>

                <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Country
                    </Text>
                    <TextInput
                        value={street}
                        onChangeText={(text) => setStreet(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="Country"
                    />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Landmark
                    </Text>
                    <TextInput
                        value={landmark}
                        onChangeText={(text) => setLandmark(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="Eg: near appollo hospital"
                    />
                </View>

                <View>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        Postal Code
                    </Text>

                    <TextInput
                        value={postalCode}
                        onChangeText={(text) => setPostalCode(text)}
                        placeholderTextColor={"black"}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="Enter Postal Code"
                    />
                </View>

                <Pressable
                    onPress={handleAddAddress}
                    style={{
                        backgroundColor: "#9EB384",
                        padding: 19,
                        borderRadius: 6,
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 20,
                    }}
                >
                    <Text style={{ fontWeight: "bold" }}>Add Address</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default AddressScreen;

const styles = StyleSheet.create({});
