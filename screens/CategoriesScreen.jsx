import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { categories } from '../data/categories';

const CategoriesScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const renderCategoryItem = ({ item }) => {
    const handleCategoryPress = () => {
      setSelectedCategory(item);
    };

    return (
      <TouchableOpacity style={styles.categoryItem} onPress={handleCategoryPress}>
        <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
          <Icon name={item.icon} size={24} style={styles.icon} />
        </View>
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderCategoryModal = () => {
    if (!selectedCategory) return null;

    return (
      <Modal visible={!!selectedCategory} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Icon name={selectedCategory.icon} size={24} color={selectedCategory.color} style={styles.modalIcon} />
              <Text style={styles.modalTitle}>{selectedCategory.name}</Text>
            </View>
            <Text style={styles.modalDescription}>{selectedCategory.description}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSelectedCategory(null)}
            >
              <Icon name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
      {renderCategoryModal()}
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalIcon: {
    marginRight: 12,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  modalDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
});

export default CategoriesScreen;
