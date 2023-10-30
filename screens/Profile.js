import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
// import Button from '../components/Button';

const Profile = ({ navigation }) => {
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
            onPress={() => navigation.navigate("Homepage")}
          >
            <Image
              source={require('../images/back.png')}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
  
          <View style={{ flex: 1, justifyContent: 'center', position: 'absolute', top: 190, marginHorizontal: 20 }}>
              <View
                 style={{
                 position: 'absolute',
                 top: 50,
                 left: -20.1, 
                 height: 2,
                 width: '1000%',
                 backgroundColor: COLORS.black,
                 zIndex: 0,
                }}
          />
          <View style={{alignItems: 'left', justifyContent: 'top' }}>
              <Image
                source={require('../images/dp.png')}
                style={{
                  width:105,
                  height: 100,
                }}
              />
              <Text style={{
                top:-10,
                fontSize: 22,
                fontWeight: 'bold',
                marginVertical: 12,
                color: COLORS.white,
              }}>
                John Doe
              </Text>
              <Text style={{
                top: -22,
                left: 5,
                fontSize: 12,
                color: COLORS.grey,
                }}>
                  @me
            </Text>
            <TouchableOpacity
                style={{
                  left: 240,
                  bottom: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: COLORS.defc,
                  width: 120,
                  height: 30,
                  borderRadius: 15,
                  borderColor: COLORS.orange,
                  borderWidth: 1
                }}
              >
                <Text style={{
                  fontSize: 14,
                  color: COLORS.white,
                  fontWeight: 'bold',
                  textShadowColor: COLORS.black,
                  textShadowOffset: { width: 0, height: 2 },
                  textShadowRadius: 5,
                }}>
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>  
          </View>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center', marginVertical: '70%', marginLeft: 30}}>
            <Text style={{
              fontSize: 16,
              color: COLORS.grey,
              marginBottom: 5,
              marginRight: 30
            }}>
              5 Posts
            </Text>
            <Text style={{
              fontSize: 16,
              color: COLORS.grey,
              marginBottom: 5,
              marginRight: 30
            }}>
              5 Following
            </Text>
            <Text style={{
              fontSize: 16,
              color: COLORS.grey,
              marginBottom: 5,
              marginRight: 30
            }}>
              1M Followers
            </Text>
          </View>
          {/* Footer Container */}
        <View style={styles.footerContainer}>
          <TouchableOpacity
          onPress={() => navigation.navigate("Homepage")}>
            <Image
              source={require('../images/home.png')}
              style={styles.footerImage}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../images/search.png')}
              style={styles.footerImage}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../images/add.png')}
              style={styles.footerImage}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../images/message.png')}
              style={styles.footerImage}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../images/profile.png')}
              style={styles.footerImage}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  const styles = {
    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: COLORS.defc,
      height: 100
    },
    footerImage: {
      width: 40,
      height: 50,
    },
  };
  
  export default Profile