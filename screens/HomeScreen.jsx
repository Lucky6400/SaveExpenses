import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RecentExpenses from '../components/RecentExpenses';
import { ScrollView } from 'react-native';
import CategoryCard from '../components/Home/CategoryCard';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import {
    LineChart
} from "react-native-chart-kit";
import { currencies } from '../data/currency';
import { useSelector } from 'react-redux';
import { getExpensesByMonth } from '../helpers/ChartData';

const HomeScreen = ({ navigation, route }) => {
    console.log(navigation)
    const expenses = useSelector(state => state.expense.expenses);
    const expObj = getExpensesByMonth(expenses);
    const months = Object.keys(expObj);
    const amounts = Object.values(expObj);
    console.log(expObj);
    const chartConfig = {
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
        }
    };
    const [open, setOpen] = useState(false);
    const openDrawer = () => {
        setOpen(p => !p);
    };

    const menuItems = [
        { id: 'home', title: 'Home', icon: 'home' },
        { id: 'categories', title: 'Categories', icon: 'category' },
        { id: 'budgets', title: 'Budgets', icon: 'monetization-on' },
        { id: 'divider', title: '', icon: '' },
    ];

    const renderItem = ({ item }) => {
        if (item.id === 'divider') {
            return <View style={styles.divider} />;
        }

        return (
            <TouchableOpacity onPress={() => navigation.navigate(item.title)} style={styles.menuItem}>
                <Icon name={item.icon} color={route.name === item.title ? '#6200EE' : "#505050"} size={24} style={styles.icon} />
                <Text style={{ ...styles.title, color: route.name === item.title ? '#6200EE' : "#505050" }}>{item.title}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <>
            <Appbar.Header style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}>
                <Appbar.Content color='#000' titleStyle={{ fontWeight: 'bold' }} title={<Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                    <Text style={{ color: "#6200EE" }}>
                        SAVE
                    </Text>
                    {" "} EXPENSES</Text>} />
                <Appbar.Action color='#979797' icon="menu" onPress={openDrawer} />
            </Appbar.Header>
            {open ?
                <View style={styles.drawerStyle}>
                    <FlatList
                        data={menuItems}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={styles.menuContainer}
                    />
                </View>
                : <></>}

            <ScrollView style={styles.container}>

                {/* <Card style={styles.card}>
                    <LinearGradient colors={['#A56EFF', '#6200EE']} style={styles.cardBackground}>
                        <Card.Content>
                            <Title style={styles.cardTitle}>Total Expenses</Title>
                            <View style={styles.cardContent}>
                                <Icon name="money" size={48} color="white" />
                                <Title style={styles.expenseAmount}>$1,250</Title>
                            </View>
                        </Card.Content>
                    </LinearGradient>
                </Card> */}

                <LineChart

                    fromZero
                    data={{
                        labels: months.slice(-6),
                        datasets: [
                            {
                                data: amounts.slice(-6)
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    yAxisLabel={currencies.inr}
                    yAxisSuffix=""
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={chartConfig}
                    bezier
                    style={{
                        marginBottom: 8,
                        borderRadius: 0
                    }}
                />


                <CategoryCard navigation={navigation} styles={styles} />

                <RecentExpenses />

            </ScrollView>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',

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
        color: '#32cd32',
        marginTop: 10
    },
    categoryContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
        gap: 10
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
        textAlign: 'center',
        textAlignVertical: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    drawerStyle: {
        position: 'absolute',
        top: 30,
        left: 0,
        backgroundColor: '#fff',
        width: '80%',
        height: 800,
        zIndex: 9999
    },
    menuContainer: {
        paddingVertical: 16,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    icon: {
        marginRight: 16,
    },
    title: {
        fontSize: 14,
        fontWeight: 'medium',
        color: '#787878',
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginVertical: 8,
    },
});

export default HomeScreen;
