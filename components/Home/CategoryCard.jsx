import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Button, Card, Title, TouchableRipple } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { categories } from '../../data/categories';

export default function CategoryCard({ styles, navigation }) {
    return (
        <Card style={styles.card}>
            <LinearGradient colors={['#A56EFF', '#6200EE']} style={styles.cardBackground}>
                <Card.Content>
                    <Title style={styles.cardTitle}>Categories</Title>
                    <View style={styles.categoryContainer}>
                        {categories.slice(0, 4).map(v => (

                            <TouchableRipple key={v.name + Date.now()} style={styles.categoryButton} onPress={() => console.log('Food')}>
                                <Icon name={v.icon} color='#6200EE' size={32} />
                            </TouchableRipple>
                        ))}

                        <Button icon="chevron-right" mode="contained" onPress={() => navigation.navigate("Categories")} style={styles.viewAllButton}>
                            View All
                        </Button>
                    </View>
                </Card.Content>
            </LinearGradient>
        </Card>
    )
}