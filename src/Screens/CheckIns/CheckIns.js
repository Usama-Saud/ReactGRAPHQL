import React from 'react';
import {StyleSheet, Text, View,Image, ScrollView} from 'react-native';
import {useQuery, gql} from '@apollo/client';

const FETCH_CHECKINS = gql`
  query myQuery {
    check_in(limit: 7, order_by: { created_at: desc }) {
      comment
      created_at
      id
      image_url
      name
      updated_at
    }
  }
`;

const CheckIns = () => {
  const {loading, error, data} = useQuery(FETCH_CHECKINS);

  if (loading) return <Text style={styles.loading}>Loading...</Text>;
  if (error) return <Text style={styles.error}>Error: {error.message}</Text>;

  return (
    <ScrollView style={styles.container}>
     {data.check_in.slice(0, 5).map(checkIn => (  
        <View key={checkIn.id} style={styles.itemContainer}>
          <Image 
            source={{ uri: checkIn.image_url }} 
            style={styles.userImage} 
            resizeMode="cover"
          />
           <Image 
            source={require('../../assets/users.png')} 
            style={styles.userImageSmall} 
          />
          <Text style={styles.itemText}>ID: {checkIn.id}</Text>
          <Text style={styles.itemText}>Name: {checkIn.name}</Text>
          <Text style={styles.itemText}>Comment: {checkIn.comment}</Text>
          <Text style={styles.itemText}>Created At: {checkIn.created_at}</Text>
          <Text style={styles.itemText}>Updated At: {checkIn.updated_at}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  loading: {
    padding: 16,
    fontSize: 18,
    textAlign: 'center',
  },
  error: {
    padding: 16,
    fontSize: 18,
    textAlign: 'center',
    color: 'red',
  },
  userImage: {
    width: '100%',  // or any desired width
    height: 200,    // or any desired height
    marginBottom: 10,
    borderRadius: 8,
  },
  userImageSmall:{
    width: '10%',  // or any desired width
    height: 30, 
  },
  itemContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 10,
    borderRadius: 4,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default CheckIns;
