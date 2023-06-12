import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Button, Card, Title, TouchableRipple } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CategoryCard({ styles }) {
    return (
        <Card style={styles.card}>
            <LinearGradient colors={['#A56EFF', '#6200EE']} style={styles.cardBackground}>
                <Card.Content>
                    <Title style={styles.cardTitle}>Categories</Title>
                    <View style={styles.categoryContainer}>
                        <TouchableRipple style={styles.categoryButton} onPress={() => console.log('Food')}>
                            <Icon name="fastfood" color='#6200EE' size={32} />
                        </TouchableRipple>
                        <TouchableRipple style={styles.categoryButton} onPress={() => console.log('Shopping')}>
                            <Icon name="shopping-cart" color='#6200EE' size={32} />
                        </TouchableRipple>
                        <TouchableRipple style={styles.categoryButton} onPress={() => console.log('Home')}>
                            <Icon name="home" color='#6200EE' size={32} />
                        </TouchableRipple>
                        <TouchableRipple style={styles.categoryButton} onPress={() => console.log('Gift')}>
                            <Icon name="wallet-giftcard" color='#6200EE' size={32} />
                        </TouchableRipple>
                        <Button icon="chevron-right" mode="contained" onPress={() => console.log('View All')} style={styles.viewAllButton}>
                            View All
                        </Button>
                    </View>
                </Card.Content>
            </LinearGradient>
        </Card>
    )
}