import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import {
	SafeAreaView,
	TouchableOpacity,
	StyleSheet, Text, View, Button, FlatList
} from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
	const [text, setText] = useState('');
	const [value, setValue] = useState("");
	const [formattedValue, setFormattedValue] = useState("");
	const [valid, setValid] = useState(false);
	const [showMessage, setShowMessage] = useState(false);
	const phoneInput = (null);
	const handlePress = () => {
		// Handle button press logic here
	};
	const data = [
		{ key: '1', text: 'Do not sell or trade your data', icon: 'user' },
		{ key: '2', text: 'Is ISO 27001 certified for information security', icon: 'lock' },
		{ key: '3', text: 'Encrypts and secures data', icon: 'envelope' },
		{ key: '4', text: 'Is certified GDPR ready, the gold standard in data privacy', icon: 'cog' },
	];
	return (
		<View style={styles.body}>
			<View style={styles.container}>

				<Text style={styles.label}>Please enter your mobile number to proceed further</Text>
				<SafeAreaView style={styles.wrapper}>
					{showMessage && (
						<View style={styles.message}>
							<Text>Value : {value}</Text>
							<Text>Formatted Value : {formattedValue}</Text>
							<Text>Valid : {valid ? "true" : "false"}</Text>
						</View>
					)}
					<PhoneInput
						ref={phoneInput}
						defaultValue={value}
						defaultCode="DM"
						layout="first"
						onChangeText={(text) => {
							setValue(text);
						}}
						onChangeFormattedText={(text) => {
							setFormattedValue(text);
						}}
						withDarkTheme
						withShadow
						autoFocus
					/>
					<TouchableOpacity
						style={styles.button}
						onPress={() => {
							const checkValid = phoneInput.current?.isValidNumber(value);
							setShowMessage(true);
							setValid(checkValid ? checkValid : false);
						}}
					>
					</TouchableOpacity>
				</SafeAreaView>
				<TouchableOpacity
					style={styles.buttonContainer}
					onPress={handlePress}
				>
					<Text style={styles.buttonText}>Submit</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				style={{backgroundColor: '#f2f2f2', borderRadius: 10, marginHorizontal:20, height: 100}}
				data={data}
				renderItem={({ item }) => (
					<View style={styles.item}>
						<Icon name={item.icon} style={styles.icon} />
						<Text style={styles.text}>{item.text}</Text>
					</View>
				)}
			/>
		</View>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		marginTop: 70,
	},
	body: {
		flex: 1
	},
	label: {
		paddingHorizontal: 70,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 8,
		lineHeight: 25
	},
	buttonContainer: {
		backgroundColor: 'orange',
		borderRadius: 28,
		paddingVertical: 15,
		paddingHorizontal: 100,
		alignSelf: 'center',
		marginTop: 30,
	},
	buttonText: {
		color: '#fff',
		fontSize: 20,
		textAlign: 'center',
		fontWeight: '500',
		textTransform: 'uppercase'
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
	},
	icon: {
		marginRight: 10,
		fontSize: 16,
		color: 'orange',
	},
	text: {
		fontSize: 12,
		color: '#333',
	},
});

// echo "# ReactNativeApp" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/hitesh1696/ReactNativeApp.git
// git push -u origin main
