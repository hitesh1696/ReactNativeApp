import 'react-native-gesture-handler';
import React, { useState, useRef } from 'react';
import {
	SafeAreaView,
	TouchableOpacity,
	StyleSheet, Text, View,
} from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

export default function App({ navigation }) {
	const [value, setValue] = useState("");
	const [countryCode, setCountryCode] = useState('');
	const [formattedValue, setFormattedValue] = useState("");
	const [valid, setValid] = useState(false);
	const [showMessage, setShowMessage] = useState(false);
	const [errors, setErrors] = useState({});
	const phoneInput = useRef(null);
	postData = async () => {      
        const response = await axios.post('http://192.168.1.16:8000/api/check_mobile_number_is_valid',
            {
                params: {
                    country_code: countryCode,
                    mobile: value,
				},
            }
        ).then((response) => {
			// console.log(response.data.errors);
            if (response.data.errors) {
                setErrors(response.data.errors);
			} else {
				// console.log(response);
				navigation.navigate('UserDetails', {value, countryCode});
            }
             
        });
        
    };
	const handleSubmit = () => {
		postData();
    };
    
    const handlePress = () => {
        navigation.navigate('GetStarted');
    };
    
	return (
		<View style={styles.body}>
			<View style={styles.container}>
				<Text style={styles.label}>Please enter your mobile number to proceed further</Text>
				<SafeAreaView style={styles.wrapper}>
					{showMessage && (
						<View style={styles.message}>
							 <Text>Country Code : {countryCode}</Text>
							<Text>Value : {value}</Text>
							<Text>Formatted Value : {formattedValue}</Text>
							<Text>Valid : {valid ? "true" : "false"}</Text>
						</View>
					)}
					{errors['mobile'] && (
						<Text style={{ color: 'red', fontWeight: 'bold' }}>{errors['mobile']}</Text>
					)}
					{errors['params.mobile'] && (
						<Text style={{ color: 'red', fontWeight: 'bold' }}>{errors['params.mobile'][0]}</Text>
					)}
					<PhoneInput
						ref={phoneInput}
						defaultValue={value}
						defaultCode="IN"
						layout="first"
						onChangeText={(text) => {
							setValue(text);
						}}
						onChangeFormattedText={(text) => {
							setFormattedValue(text);
							setCountryCode(phoneInput.current?.getCountryCode() || '');
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
							setCountryCode(phoneInput.current?.getCountryCode() || '');
							setValid(checkValid ? checkValid : false);
						}}
					>
					</TouchableOpacity>
				</SafeAreaView>
				<TouchableOpacity
					style={styles.buttonContainer}
					onPress={handleSubmit}
				>
					<Text style={styles.buttonText}>Submit</Text>
				</TouchableOpacity>
				<View style={styles.flatlist}>
					<View style={{ flexDirection: 'row', marginLeft: -5, paddingTop:5}}> 
						<Icon name='user' style={{marginRight: 10,fontSize: 22,color: 'orange',}} />
						<Text style={{fontSize: 16,color: '#333',fontWeight: 'bold', textTransform:'uppercase'}}>DWebPixel</Text>
					</View>
					<View style={{ flexDirection: 'row', paddingVertical:5, marginTop: 5}}> 
						<Icon name='user' style={styles.icon} />
						<Text style={styles.text}>Do not sell or trade your data</Text>
					</View>
					<View style={{ flexDirection: 'row', paddingVertical:5}}> 
						<Icon name='user' style={styles.icon} />
						<Text style={styles.text}>Is ISO 27001 certified for information security</Text>
					</View>
					<View style={{ flexDirection: 'row', paddingVertical:5}}> 
						<Icon name='user' style={styles.icon} />
						<Text style={styles.text}>Encrypts and secures data</Text>
					</View>
					<View style={{ flexDirection: 'row', paddingVertical:5}}> 
						<Icon name='user' style={styles.icon} />
						<Text style={styles.text}>Is certified GDPR ready, the gold standard in data privacy</Text>
					</View>
					<TouchableOpacity onPress={handlePress} style={{marginTop: 10}}>
						<Text style={{color: 'orange', fontSize: 13, marginLeft: -2}}>Privacy Policy</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={handlePress} style={{marginTop: 5}}>
						<Text style={{color: 'orange', fontSize: 13, marginLeft: -2}}>Terms & Consitions</Text>
					</TouchableOpacity>
					
				</View>
			</View>
		</View>

		

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		paddingTop: 80,
	},
	body: {
		flex: 1
	},
	flatlist: {
		marginTop: 50,
		height: 210,
		backgroundColor: '#f2f2f2',
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal:15
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
	icon: {
		marginRight: 15,
		fontSize: 12,
		color: 'orange',
	},
	text: {
		fontSize: 12,
		color: '#333',
	},
});

