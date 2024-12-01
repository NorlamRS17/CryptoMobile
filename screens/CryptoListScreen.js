import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AxioCryptos } from '../services/cryptoServices';

export default function CryptoListScreen({ navigation }) {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCryptos() {
      try {
        const data = await AxioCryptos();
        setCryptos(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadCryptos();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <FlatList
      data={cryptos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('CryptoDetail', { crypto: item })}
        >
          <View style={styles.itemHeader}>
            <Text style={styles.itemName}>{item.name} ({item.symbol})</Text>
            <Text style={styles.itemPrice}>${item.quote.USD.price.toFixed(2)}</Text>
          </View>
          <Text style={styles.itemRank}>Rank #{item.cmc_rank}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f9f9f9',
    marginHorizontal: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4CAF50', 
  },
  itemRank: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
});
