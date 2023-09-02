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
        marginTop: '16%',
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
        backgroundColor: '#303030',
        position: 'relative',
        marginTop: 20,
        width: '100%'
    },
    expenseItemContent: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        // borderWidth: 1,
        // borderColor: '#FFF'
    },
    icon: {
        marginRight: 12,
    },
    expenseItemText: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 600,
        color: '#FFF',
    },
    category: {
        fontSize: 14,
        color: '#FFF',
    },
    amount: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#000',
        backgroundColor: '#FFF',
        position: 'absolute',
        top: -25,
        left: -10,
        paddingVertical: 3,
        paddingHorizontal: 6,
        borderRadius: 5
    },
    expenseItemActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        width: '15%',
        // borderWidth: 1,
        // borderColor: '#FFF'
    },
    actionIcon: {
        marginLeft: 0,
    },
    addButton: {
        position: 'absolute',
        bottom: 24,
        right: 24,
        backgroundColor: '#000',
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
    picker: {
        marginBottom: 16,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        width: '70%'
    },
});