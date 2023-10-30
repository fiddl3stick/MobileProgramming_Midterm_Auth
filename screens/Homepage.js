import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';

const Homepage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.defc }}>
      <View style={{ flex: 1}}>

      <TouchableOpacity
            style={{
              position: 'absolute',
              top: 20,
              left: 20,
              zIndex: 1,
            }}
          >
            <Image
              source={require('../images/sort.png')}
              style={{
                width: 35,
                height: 35,
              }}
            />
          </TouchableOpacity>
        
        
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
          <View style={{ alignItems: 'center', marginVertical: 22 }}>
            <Text style={{
              fontSize: 32,
              fontWeight: 'bold',
              marginVertical: 12,
              color: COLORS.white,
            }}>
              Welcome
            </Text>
            <Image source={require('../images/logo.png')}
              style={{
                width: 150,
                height: 150,
              }}
            />
          </View>
        </ScrollView>
        
        {/* Footer Container */}
        <View style={styles.footerContainer}>
        <TouchableOpacity>
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
          <TouchableOpacity
          activeOpacity = {0.7}> 
            <Image
              source={require('../images/message.png')}
              style={styles.footerImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
           onPress={() => navigation.navigate("Profile")}>
            <Image
              source={require('../images/profile.png')}
              style={styles.footerImage}
            />
          </TouchableOpacity>
        </View>
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

export default Homepage;