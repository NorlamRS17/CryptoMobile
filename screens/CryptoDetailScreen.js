import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function CryptoDetailScreen({ route }) {
  const { crypto } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{crypto.name} ({crypto.symbol})</Text>
        <Text style={styles.rank}>Rank #{crypto.cmc_rank}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.detailText}>Precio: <Text style={styles.boldText}>${crypto.quote.USD.price.toFixed(2)}</Text></Text>
        <Text style={styles.detailText}>Capitalización de mercado: <Text style={styles.boldText}>${crypto.quote.USD.market_cap.toFixed(2)}</Text></Text>
        <Text style={styles.detailText}>Suministro Máximo: <Text style={styles.boldText}>{crypto.max_supply ? crypto.max_supply : 'N/A'}</Text></Text>
        <Text style={styles.detailText}>Suministro Circulante: <Text style={styles.boldText}>{crypto.circulating_supply.toFixed(2)}</Text></Text>
        <Text style={styles.detailText}>Variación 1D: <Text style={styles.boldText}>{crypto.quote.USD.percent_change_24h.toFixed(2)}%</Text></Text>
        <Text style={styles.detailText}>Variación 30D: <Text style={styles.boldText}>{crypto.quote.USD.percent_change_30d.toFixed(2)}%</Text></Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  rank: {
    fontSize: 18,
    color: '#888',
  },
  detailContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#333',
  },
});