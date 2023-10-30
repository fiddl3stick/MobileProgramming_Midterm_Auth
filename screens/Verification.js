import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Verification = ({ navigation }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');

  const generateVerificationCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedCode(code);
    console.log("Generated Code:", generatedCode);
  }

  const handleVerify = () => {
    if (verificationCode === '') {
      alert('Please enter the verification code.');
    } else if (verificationCode === generatedCode) {
      navigation.navigate("Login");
    } else {
      alert('Invalid verification code. Please try again.');
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.defc }}>
      <View style={{ flex: 1 }}>

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            zIndex: 1,
          }}
          onPress={() => navigation.navigate("Signup")}
        >
          <Image
            source={require('../images/back.png')}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>

        <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 22 }}>
          <View style={{alignItems: 'center' ,marginVertical: 22 }}>
            <Image
              source={require('../images/logo.png')}
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
              User Verification
            </Text>
          </View>

          <Text style={{
            fontSize: 13,
            marginVertical: 12,
            color: COLORS.grey,
            textAlign: 'left',
          }}>
            Your code is: {generatedCode}
          </Text>

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
                placeholder='Enter Code'
                placeholderTextColor={COLORS.black}
                keyboardType='number-pad'
                style={{
                  width: "100%"
                }}
                value={verificationCode}
                onChangeText={setVerificationCode}
              />
            </View>
          </View>

          <Button
            onPress={handleVerify}
            title="Verify"
            filled
            style={{
              marginTop: 18,
              marginBottom: 4,
            }}
          />
          <View style={{ alignItems: 'center', marginVertical: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{
                fontSize: 13,
                color: COLORS.grey,
                textAlign: 'center',
              }}>
                Didn't receive a code? 
              </Text>
              <Text style={{ marginLeft: 6 }}>
                <TouchableOpacity onPress={generateVerificationCode}>
                  <Text style={{
                    color: COLORS.orange,
                    textDecorationLine: 'underline',
                  }}>
                    Resend
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Verification;
