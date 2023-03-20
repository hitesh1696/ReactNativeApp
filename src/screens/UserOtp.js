import 'react-native-gesture-handler';
import React, { useState, useRef } from 'react';
import {
    TextInput,
    TouchableOpacity,
    StyleSheet, Text, View,
} from 'react-native';



export default function UserOtp({ navigation, route }) {
    console.log(route.params.mobileNumber)
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputs = useRef([]);

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputs.current[index + 1].focus();
        }
    };
    
    const handleSubmit = () => {
        navigation.navigate('GetStarted');
    };


    return (
        <View style={styles.container}>
            <Text style={{fontSize:18, justifyContent:'center', alignItems:'center'}}>We have sent you OTP on your given number { route.params.mobileNumber}</Text>
            <Text style={styles.label}>Please enter OTP to proceed further</Text>
            <View style={styles.otp}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        keyboardType="numeric"
                        maxLength={1}
                        value={digit}
                        onChangeText={(value) => handleOtpChange(index, value)}
                        ref={(ref) => (inputs.current[index] = ref)}
                    />
                ))}
            </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    otp: {
        flexDirection: 'row',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        fontSize: 20,
        padding: 10,
        margin: 5,
        textAlign: 'center',
        width: 50,
        height: 50,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
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


