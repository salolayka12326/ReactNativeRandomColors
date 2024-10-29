import {StyleSheet, TouchableOpacity} from 'react-native';

import {HelloWave} from '@/components/HelloWave';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {useState} from "react";

export default function HomeScreen() {
    const [backgroundColor, setBackgroundColor] = useState<string>('#FFFFFF');
    const [tapCount, setTapCount] = useState<number>(0);

    const handleTap = () => {
        setBackgroundColor(getRandomColor());
        setTapCount(tapCount + 1);
    };

    return (
        <TouchableOpacity style={[styles.container, {backgroundColor}]} onPress={handleTap}>

            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Hello there!</ThemedText>
                <HelloWave/>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Tap Count: {tapCount}</ThemedText>
            </ThemedView>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0)',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
    },
    stepContainer: {
        backgroundColor: 'rgba(0,0,0,0)',
        justifyContent: 'center',
        gap: 8,
        marginBottom: 8,
    },
});

const getRandomColor = () => {
    const letters: string = '0123456789ABCDEF';
    let color: string = '#';
    for (let i: number = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
