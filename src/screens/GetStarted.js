import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    StyleSheet, Text, View, Image, ScrollView
} from 'react-native';

const images = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/300/400',
    'https://picsum.photos/400/500',
    'https://picsum.photos/500/600',
    'https://picsum.photos/600/700',
];


export default function GetStarted({ navigation }) {
    const [active, setActive] = useState(0);
    const change = ({ nativeEvent }) => {
        const slide = Math.ceil(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
        );
        if (slide !== active) {
            setActive(slide);
        }
    };

    const handleSubmit = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.body}>
            <View style={styles.container}>
                <ScrollView
                    pagingEnabled
                    horizontal
                    onScroll={change}
                    showsHorizontalScrollIndicator={false}>
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            source={{ uri: image }}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    ))}

                </ScrollView>
                <View style={styles.pagination}>
                    {images.map((i, k) => (
                        <Text
                            key={k}
                            style={k == active ? styles.paginationActiveText : styles.paginationText}>
                            ⬤
                        </Text>
                    ))}
                </View>

                <SafeAreaView >
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 50
    },
    body: {
        flex: 1
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 90,
        alignSelf: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    paginationText: {
        color: 'orange',
        margin: 3,
    },
    paginationActiveText: {
        color: 'red',
        margin: 3,
    },

    scrollView: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        backgroundColor: 'orange',
        borderRadius: 28,
        paddingVertical: 15,
        paddingHorizontal: 100,
        alignSelf: 'center',
        marginBottom: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '500',
        textTransform: 'uppercase'
    },
    image: {
        width: 360,
        marginHorizontal: 15,
        height: 580,
    },
});

