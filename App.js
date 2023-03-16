import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import {
	SafeAreaView,
	TouchableOpacity,
	StyleSheet, Text, View, Button, FlatList, SectionList
} from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/screens/Home';
import GetStartedScreen from './src/screens/GetStarted';
import UserDetailScreen from './src/screens/UserDetails'
import UserOtpScreen from './src/screens/UserOtp'
import axios from 'axios';
const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator >
			{/* UserDetails */}
				<Stack.Screen name="GetStarted" component={GetStartedScreen}  options={{ headerShown: false }} />
				<Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
				<Stack.Screen name="UserDetails" component={UserDetailScreen}  options={{ headerShown: false }} />
				<Stack.Screen name="UserOtp" component={UserOtpScreen}  options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
