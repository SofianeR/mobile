import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';

import {onChangeInputHandle} from '../assets/utils/eventFunction';

const SignupForm = ({formData, setFormData}) => {
  return (
    <ScrollView>
      <Text style={styles.title}>Créer un compte</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.textStyle}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          value={formData.email}
          onChangeText={v =>
            onChangeInputHandle(v, 'email', formData, setFormData)
          }
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.textStyle}>Nom d'utilisateur</Text>
        <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur"
          keyboardType="username-address"
          autoCapitalize="none"
          autoCompleteType="username"
          value={formData.username}
          onChangeText={v =>
            onChangeInputHandle(v, 'username', formData, setFormData)
          }
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.textStyle}>Mot de passe</Text>
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry={true}
          value={formData.password}
          onChangeText={v =>
            onChangeInputHandle(v, 'password', formData, setFormData)
          }
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.textStyle}>Vérification de mot de passe</Text>
        <TextInput
          style={styles.input}
          placeholder="Vérification de mot de passe"
          secureTextEntry={true}
          value={formData.checkPassword}
          onChangeText={v =>
            onChangeInputHandle(v, 'checkPassword', formData, setFormData)
          }
        />
      </View>
    </ScrollView>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    marginBottom: 30,
    fontSize: 20,
    color: '#991B1B',
    textAlign: 'center',
  },
  textStyle: {
    color: '#991B1B',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    // textDecorationStyle: 'double',
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7,
    marginVertical: 20,
    paddingHorizontal: 10,
    color: 'black',
  },
});
