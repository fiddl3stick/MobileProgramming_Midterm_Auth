import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login, Signup, Verification, Homepage, Profile } from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Signup'
      >
        <Stack.Screen
         name="Verification"
         component={Verification}
         options={{
         headerShown: false
         }}
         />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{
            headerShown: false
          }}
        />
         <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}