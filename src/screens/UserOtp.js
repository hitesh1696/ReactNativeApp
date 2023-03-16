import 'react-native-gesture-handler';
import React, { useState, useRef } from 'react';
import {
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet, Text, View,
} from 'react-native';

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


export default function UserOtp({ navigation, route }) {
    console.log(route);
    const [name, setName] = useState('');
    // const [email, setEmail] = useState('');

    const handleNameChange = (text) => setName(text);
    const handleEmailChange = (text) => setEmail(text);
    const handleSubmit = () => {
        navigation.navigate('GetStarted');
    };


    return (
            <View style={styles.container}>
                <Text style={styles.label}>Please enter OTP to proceed further</Text>
                <SafeAreaView style={styles.wrapper}>
                    <FormInput
                        label="Otp"
                        placeholder="Enter your name"
                        value={name}
                        onChangeText={handleNameChange}
                    />
                </SafeAreaView>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={handleSubmit}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',

        padding: 20,
    },
    formGroup: {
        marginVertical: 10,
        alignItems: 'center',

    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
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
});


