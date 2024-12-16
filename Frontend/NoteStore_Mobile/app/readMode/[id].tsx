import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import books from '@/data/books.json';
import { theme } from '@/constants/theme';
import CustomStatusBar from '@/components/global/CustomStatusBar';
import { Ionicons } from '@expo/vector-icons';
import { useHeaderHeight } from '@react-navigation/elements';
import DropDownBtn from '@/components/global/DropDownBtn';

const { width } = Dimensions.get('window');

const ReadMode = () => {
    const headerHeight = useHeaderHeight();
    const { id } = useLocalSearchParams();

    const note = books.find((item) => item.id.toString() === id);
    if (!note) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Note not found</Text>
            </View>
        );
    }

    const [ isDropDown, setDropDown ] = useState(false);

    useEffect(() => {
        setDropDown(true);
        if (isDropDown) {
            <DropDownBtn />
        }
    });

    return (
        <>
            <CustomStatusBar backgroundColor={theme.colors.white} barStyle="light-content" hidden={false} />
            <Stack.Screen
                options={{
                    headerTitle: note.name || 'Untitled Note',
                    headerTransparent: true,
                    headerRight: () => (
                        <TouchableOpacity onPress={() => {}} style={styles.chapterNumBox}>
                            <Text style={[styles.chTxt, theme.typography.body2]}>Ch</Text>
                            <Text style={[styles.chTxt, theme.typography.body2]}>{note.pages || 0}</Text>
                        </TouchableOpacity>
                    ),
                    headerStyle: {
                        backgroundColor: theme.colors.primary,
                    },
                    headerTintColor: theme.colors.white,
                    headerTitleStyle: {
                        fontWeight: '700',
                        color: theme.colors.white,
                        fontSize: 20,
                    },
                }}
            />

            <View style={[styles.container, { paddingTop: headerHeight - 20 }]}>
                <Text style={{textAlign: 'center', fontSize: 24, fontWeight: '600', marginBottom: 30, }}>Chapter One</Text>
                <View style={styles.textChPg}>
                    <Text style={[theme.typography.body1, styles.pgTxt]}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, distinctio ab doloremque, excepturi, nostrum magni minima rem corporis blanditiis facilis asperiores praesentium soluta nemo eum ut inventore similique cum sint.</Text>
                </View>
            </View>

            <View style={styles.turnPgBox}>
                <TouchableOpacity onPress={() => {}} style={[styles.pgBtn, styles.prevB]}>
                    <Ionicons name="arrow-back" size={18} color={theme.colors.white} />
                    <Text style={[styles.prevPgBtnTxt, theme.typography.body2]}>Prev</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {}} style={[styles.pgBtn, styles.nextB]}>
                    <Text style={[styles.nextPgBtnTxt, theme.typography.body2]}>Next</Text>
                    <Ionicons name="arrow-forward" size={18} color={theme.colors.white} />
                </TouchableOpacity>
            </View>
        </>
    );
};

export default ReadMode;

const styles = StyleSheet.create({
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
    chapterNumBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        backgroundColor: theme.colors.gray[100],
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: theme.borderRadius.sm,
    },
    chTxt: {
        fontWeight: '300',
    },
    container: {
        flex: 1,
    },
    turnPgBox: {
        position: 'absolute',
        width: width,
        bottom: 0,
        padding: 20,
        paddingBottom: 34,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pgBtn: {
        backgroundColor: theme.colors.gray[200],
        borderRadius: theme.borderRadius.sm,
        padding: theme.spacing.sm,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    prevPgBtnTxt: {
        fontWeight: '700',
        color: theme.colors.white,
    },
    nextPgBtnTxt: {
        fontWeight: '700',
        color: theme.colors.white,
    },
    prevB: {
        backgroundColor: theme.colors.gray[400],
    },
    nextB: {
        backgroundColor: theme.colors.primary,
    },
    textChPg:{
        paddingHorizontal: 20,
        flex: 1,
        paddingTop: 5,
        alignItems: 'center',
    },
    pgTxt:{
        textAlign: 'justify',

    }
});
