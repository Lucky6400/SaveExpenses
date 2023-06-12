import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Card, Title, IconButton, Button, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RecentExpenses from '../components/RecentExpenses';
import { ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CategoryCard from '../components/Home/CategoryCard';

const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Appbar.Header style={{ backgroundColor: "#fff" }}>
                <Appbar.Content color='#000' title="SaveExpenses" />
                <Appbar.Action color='#979797' icon="menu" onPress={() => console.log('Add expense')} />
            </Appbar.Header>

            <Card style={styles.card}>
                <LinearGradient colors={['#A56EFF', '#6200EE']} style={styles.cardBackground}>
                    <Card.Content>
                        <Title style={styles.cardTitle}>Total Expenses</Title>
                        <View style={styles.cardContent}>
                            <Icon name="money" size={48} color="white" />
                            <Title style={styles.expenseAmount}>$1,250</Title>
                        </View>
                    </Card.Content>
                </LinearGradient>
            </Card>


            <CategoryCard styles={styles} />

            <RecentExpenses />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    card: {
        margin: 16,
        elevation: 4,
        borderRadius: 8,
        position: 'relative',
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#fff'
    },
    cardBackground: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 10
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    expenseAmount: {
        fontSize: 32,
        marginLeft: 8,
        color: '#32cd32'
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    },
    viewAllButton: {
        marginLeft: 16,
        borderRadius: 20,
        position: 'absolute',
        top: -55,
        right: -30
    },
    categoryButton: {
        width: 50,
        height: 50,
        borderRadius: 999,
        marginHorizontal: 5,
        textAlign: 'center',
        textAlignVertical: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});

export default HomeScreen;
