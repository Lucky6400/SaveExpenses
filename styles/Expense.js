import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'white',
    },
    screenTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 24,
        color: '#6200EE',
    },
    expenseItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: '#F3EFFF',
        position: 'relative'
    },
    expenseItemContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 12,
    },
    expenseItemText: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6200EE',
    },
    category: {
        fontSize: 14,
        color: '#6200EE',
    },
    amount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#6200EE',
        position: 'absolute',
        top: -25,
        left: -10,
        padding: 3,
        borderRadius: 5
    },
    expenseItemActions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionIcon: {
        marginLeft: 16,
    },
    addButton: {
        position: 'absolute',
        bottom: 24,
        right: 24,
        backgroundColor: '#6200EE',
        borderRadius: 36,
        width: 72,
        height: 72,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
    },
    addButtonIcon: {
        //transform: [{ rotate: '45deg' }],
    },
});