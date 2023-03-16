import 'react-native-gesture-handler';
import React, { useState, useRef } from 'react';
import {
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet, Text, View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const FormInput = ({ label, value, onChangeText, placeholder }) => {
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    return (
        <View style={styles.formGroup}>
            <Text style={[styles.label, isFocused && styles.focusedLabel]}>{label}</Text>
            <TextInput
                style={[styles.input, isFocused && styles.focusedInput]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </View>
    );
};
const RoundedCheckbox = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);
  
    const handlePress = () => setIsChecked(!isChecked);
  
    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.checkboxContainer}>
          <View style={isChecked ? styles.checkedCircle : styles.uncheckedCircle}>
            {isChecked && <Ionicons name="checkmark-outline" size={20} color="#fff" />}
          </View>
          <Text style={styles.label}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
};
  
export default function UserDetails({ navigation, route }) {
    console.log(route.params.formattedValue);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const handleNameChange = (text) => setName(text);
    const handleEmailChange = (text) => setEmail(text);
    postData = async () => {
        const response = await axios.post('http://192.168.1.16:8000/api/store_user',
            {
                params: {
                    mobile: route.params.formattedValue,
                    name: name,
                    email: email,
                    message: 'Hello, Laravel!'
                },
        headers: {
            Accept: 'application/json',
                },
            }
        )
        console.log(response.data);
      }
    const handleSubmit = () => {
        postData();
    };
    return (
        <View style={styles.container}>
            <Text>{route.params.formattedValue}</Text>
                <Text style={styles.headline}>Please enter your Name And Email Id to proceed further</Text>
                <SafeAreaView style={styles.wrapper}>
                    <FormInput
                        label="Name"
                        placeholder="Enter your name"
                        value={name}
                        onChangeText={handleNameChange}
                    />
                    <FormInput
                        label="Email"
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={handleEmailChange}
                />
                
                 <RoundedCheckbox label="I agree to the terms & conditions" />
                </SafeAreaView>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={postData}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({

    body: {
        flex: 1
    },
    container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		paddingTop: 80,
	},
    formGroup: {
        marginVertical: 10,
        width: 350,
        alignItems: 'center',

    },
    headline: {
		paddingHorizontal: 70,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 8,
		lineHeight: 25
	},
    focusedLabel: {
        color: 'blue',
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    focusedInput: {
        borderColor: 'blue',
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
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 50

      },
      checkedCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#007aff',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
      },
      uncheckedCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#007aff',
        marginRight: 10,
      },
});


