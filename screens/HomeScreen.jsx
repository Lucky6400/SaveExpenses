import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Card, Title, IconButton, Button, TouchableRipple, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RecentExpenses from '../components/RecentExpenses';
import { ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CategoryCard from '../components/Home/CategoryCard';
import Drawer from 'react-native-drawer';

const HomeScreen = () => {
    const drawerRef = useRef(null);

    const openDrawer = () => {
        drawerRef.current.open();
    };

    const closeDrawer = () => {
        drawerRef.current.close();
    };

    return (
        <ScrollView style={styles.container}>
            <Appbar.Header style={{ backgroundColor: "#fff" }}>
                <Appbar.Content color='#000' title="SaveExpenses" />
                <Appbar.Action color='#979797' icon="menu" onPress={openDrawer} />
            </Appbar.Header>

            <Drawer
                ref={drawerRef}
                content={<Menu closeDrawer={closeDrawer} />}
                type="overlay"
                tapToClose
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                closedDrawerOffset={-3}
                styles={drawerStyles}
                tweenHandler={(ratio) => ({
                    main: { opacity: 1 - ratio },
                    mainOverlay: { opacity: 0 }
                })}
            >
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
            </Drawer>
        </ScrollView>
    );
};

const Menu = ({ closeDrawer }) => {
    const handleOptionPress = (option) => {
        console.log(option);
        closeDrawer();
    };

    return (
        <View style={drawerStyles.container}>
            <View style={{ backgroundColor: '#fff', height: '100%', width: '100%', opacity: 1 }}>

                <Button icon={ () => <Icon name="close" color="#6200EE" size={16} />} onPress={() => closeDrawer()} textColor={"#000"} style={{ marginLeft: 200, width: 30, height: 30 }} />

                <View style={drawerStyles.option}>
                    <Icon name="add" color="#6200EE" size={16} onPress={() => handleOptionPress('Add Expense')} />
                    <Title style={drawerStyles.optionTitle}>Add Expense</Title>
                </View>
                <View style={drawerStyles.option}>
                    <Icon name="history" color="#6200EE" size={16} onPress={() => handleOptionPress('Expense History')} />
                    <Title style={drawerStyles.optionTitle}>Expense History</Title>
                </View>
                <View style={drawerStyles.option}>
                    <Icon name="history" color="#6200EE" size={16} onPress={() => handleOptionPress('Expense History')} />
                    <Title style={drawerStyles.optionTitle}>Categories</Title>
                </View>
                <View style={drawerStyles.option}>
                    <Icon name="history" color="#6200EE" size={16} onPress={() => handleOptionPress('Expense History')} />
                    <Title style={drawerStyles.optionTitle}>Budgets</Title>
                </View>
                <Divider />
                <View style={drawerStyles.option}>
                    <Icon name="settings" color="#6200EE" size={16} onPress={() => handleOptionPress('Settings')} />
                    <Title style={drawerStyles.optionTitle}>Settings</Title>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

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

const drawerStyles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff',
        paddingTop: 24,
        zIndex: 9999
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomColor: '#E0E0E0',
    },
    optionTitle: {
        fontSize: 16,
        marginLeft: 16,
        color: '#6200EE',
    },
});

export default HomeScreen;
