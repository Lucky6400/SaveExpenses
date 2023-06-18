import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/Global';
import { Card } from 'react-native-paper';
import { currencies } from '../data/currency';
import DataCard from '../components/Data/DataCard';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";
import { categories } from '../data/categories';
import { ScrollView } from 'react-native';
const screenWidth = Dimensions.get("window").width;

const DataScreen = () => {
  const data = categories.slice(0, 5).map(category => ({
    name: category.name,
    amount: Math.floor(Math.random() * 1000), // Random amount spent
    color: category.color,
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  }));

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  return (
    <ScrollView style={globalStyles.container}>
      <DataCard />
      <Card style={globalStyles.chartCard}>
        <Text style={globalStyles.secCardHead}>Category wise expenses</Text>
        <PieChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor={"amount"}
          backgroundColor={"transparent"}
          center={[70, 10]}
          hasLegend={false}
        />

        <View style={styles.legendContainer}>
          {data.map((item, index) => (
            <View key={index} style={styles.legendItem}>
              <View
                style={[styles.legendColor, { backgroundColor: item.color }]}
              />
              <Text style={styles.legendLabel}>{item.name}</Text>
            </View>
          ))}
        </View>

      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 16,
  },
  legendContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: 8,
    padding: 10
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 8,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendLabel: {
    fontSize: 14,
  },
});


export default DataScreen;
