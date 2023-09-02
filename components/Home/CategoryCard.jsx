import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Button, Card, Title, TouchableRipple } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { categories } from '../../data/categories';

export default function CategoryCard({ styles, navigation }) {
    return (
        <Card style={styles.card}>
            <LinearGradient colors={['#494949', '#1a1a1a']} style={styles.cardBackground}>
                <Card.Content>
                    <Title style={styles.cardTitle}>Categories</Title>
                    <View style={styles.categoryContainer}>
                        {categories.slice(0, 4).map(v => (

                            <TouchableRipple key={v.name + Date.now()} style={styles.categoryButton} onPress={() => console.log('Food')}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '80%' }}>
                                    <Icon name={v.icon} color={v.color} size={24} />
                                    <Text>{v.name}</Text>
                                </View>
                            </TouchableRipple>
                        ))}

                        <Button icon="chevron-right" mode="contained" onPress={() => navigation.navigate("Categories")}
                            textColor='#000'
                            style={{ marginVertical: 10, backgroundColor: '#FFF' }}>
                            View All
                        </Button>
                    </View>
                </Card.Content>
            </LinearGradient>
        </Card>
    )
}