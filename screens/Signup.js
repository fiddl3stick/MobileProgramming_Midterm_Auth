import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Button from '../components/Button';

const Signup = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.defc }}>
            <View style={{ flex: 1, justifyContent:'center', marginHorizontal: 22 }}>
                <View style={{alignItems: 'center', marginVertical: 22 }}>

                <Image source={require('../images/logo.png')} 
                style={{
                    width:100,
                    height: 100
                }}
                />
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.white,
                    }}>
                        Register
                    </Text>
                </View>

                <View style={{ marginBottom: 12 }}>

                    <View style={{
                        width: "100%",
                        height: 48,
                        backgroundColor: COLORS.white,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Username'
                            placeholderTextColor={COLORS.black}
                            keyboardType='default'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>

                    <View style={{
                        width: "100%",
                        height: 48,
                        backgroundColor: COLORS.white,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 22
                    }}>
                       
                        <TextInput
                            placeholder='Password'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={!isPasswordShown}
                            keyboardType='default'
                            style={{
                                width: "80%"
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == false ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginBottom: 12 }}>

                    <View style={{
                        width: "100%",
                        height: 48,
                        backgroundColor: COLORS.white,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 22
                    }}>
                       
                        <TextInput
                            placeholder='Confirm Password'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={!isPasswordShown}
                            keyboardType='default'
                            style={{
                                width: "80%"
                            }}
                        />
                         <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == false ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View> 

                <View style={{ marginBottom: 12 }}>


                    <View style={{
                        width: "100%",
                        height: 48,
                        backgroundColor: COLORS.white,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Email Address'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>
               
                <Button
                onPress={() => navigation.navigate("Verification")}
                    title="Sign Up"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default Signup