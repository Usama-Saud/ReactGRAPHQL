import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useMutation, gql} from '@apollo/client';

const Submit = ({navigation}) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const ADD_CHECKIN = gql`
    mutation AddCheckIn(
      $name: String!
      $comment: String!
      $image_url: String!
    ) {
      insert_check_in_one(
        object: {name: $name, comment: $comment, image_url: $image_url}
      ) {
        id
      }
    }
  `;
  const [addCheckIn] = useMutation(ADD_CHECKIN);

  const onSubmit = () => {
    addCheckIn({
      variables: {
        name: name,
        comment: comment,
        image_url: imageUrl,
      },
    })
      .then(() => {
        // Clear the inputs
        setName('');
        setComment('');
        setImageUrl('');

        // Navigate to CheckIns screen
        navigation.navigate('CheckIns');
      })
      .catch(err => {
        console.error('Error while adding check-in:', err);
      });
  };


  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={text => setName(text)}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Comment"
          onChangeText={text => setComment(text)}
          value={comment}
        />
        <TextInput
          style={styles.input}
          placeholder="Image URL"
          onChangeText={text => setImageUrl(text)}
          value={imageUrl}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.addButton} onPress={() => onSubmit()}>
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    padding: 16,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    borderRadius: 4,
  },
  btnContainer: {
    // padding: 16,
    width: '92%',
    alignSelf: 'center',
  },
  addButton: {
    backgroundColor: '#4c34eb',
    borderRadius: 4,

    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
});

export default Submit;
