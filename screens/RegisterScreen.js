import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
    Alert,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigation = useNavigation();

    const handleRegister = () => {
        const user = {
            name: name,
            email: email,
            password: password,
        };

        axios
            .post("http://localhost:8000/register", user)
            .then((response) => {
                Alert.alert(
                    "Registration successful",
                    "You have registered successfully"
                );
                console.log(response);
                setName("");
                setPassword("");
                setEmail("");
                navigation.navigate("Login");
            })
            .catch((err) => {
                console.error(err);
                Alert.alert(
                    "Registration failed",
                    "an error occurred during registration"
                );
            });
    };

    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
        >
            <View>
                <Image
                    style={{ width: 200, height: 200, marginVertical: 20 }}
                    source={{
                        uri: "https://res.cloudinary.com/ducirgwnz/image/upload/v1694233861/ezcart-high-resolution-logo-black-on-transparent-background_aoqfrk.png",
                    }}
                />
            </View>

            <KeyboardAvoidingView>
                <View style={{ alignItems: "center" }}>
                    <Text
                        style={{
                            fontSize: 17,
                            fontWeight: "bold",
                            marginTop: 50,
                            color: "#041E42",
                        }}
                    >
                        Register to Your Account
                    </Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                            backgroundColor: "#D0D0D0",
                            paddingVertical: 8,
                            paddingHorizontal: 10,
                            borderRadius: 10,
                            marginTop: 30,
                        }}
                    >
                        <Ionicons name="ios-person" size={24} color="gray" />
                        <TextInput
                            style={{ color: "gray", width: 300 }}
                            placeholder="Enter your Username"
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />
                    </View>
                </View>

                <View style={{ marginTop: 1 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                            backgroundColor: "#D0D0D0",
                            paddingVertical: 8,
                            paddingHorizontal: 10,
                            borderRadius: 10,
                            marginTop: 30,
                        }}
                    >
                        <MaterialIcons name="email" size={24} color="gray" />
                        <TextInput
                            style={{ color: "gray", width: 300 }}
                            placeholder="Enter your email address"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                </View>

                <View style={{ marginTop: 1 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                            backgroundColor: "#D0D0D0",
                            paddingVertical: 8,
                            paddingHorizontal: 10,
                            borderRadius: 10,
                            marginTop: 30,
                        }}
                    >
                        <AntDesign name="lock1" size={24} color="gray" />
                        <TextInput
                            style={{ color: "gray", width: 300 }}
                            placeholder="Enter your Password"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                        />
                    </View>
                </View>

                <View
                    style={{
                        marginTop: 12,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Text>Keep me logged in</Text>
                    <Text style={{ color: "#007FFF", fontWeight: "500" }}>
                        Forgot Password
                    </Text>
                </View>

                <Pressable
                    style={{
                        width: 200,
                        backgroundColor: "#435334",
                        borderRadius: 6,
                        marginLeft: "auto",
                        marginRight: "auto",
                        padding: 15,
                        marginTop: 70,
                    }}
                    onPress={handleRegister}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: 16,
                            fontWeight: "bold",
                        }}
                    >
                        Register
                    </Text>
                </Pressable>
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        padding: 15,
                        marginTop: 5,
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            color: "gray",
                            fontSize: 14,
                            fontWeight: "bold",
                        }}
                    >
                        Already have an account? Sign In
                    </Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
