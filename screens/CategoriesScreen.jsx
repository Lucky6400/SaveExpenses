import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { categories } from '../data/categories';

const CategoriesScreen = () => {
  
  const renderCategoryItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.categoryItem}>
        <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
          <Icon name={item.icon} size={24} style={styles.icon} />
        </View>
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.name + Date.now()}
        contentContainerStyle={styles.categoryList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  categoryList: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 16,
  },
});

export default CategoriesScreen;
