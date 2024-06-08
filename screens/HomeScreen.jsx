import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Modal,
  TextInput,
} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

// IMPORT COMPOSANTS
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const backgroundColorImage = require('../assets/img/FondAccueil.jpg');

const HomeScreen = () => {
  const [formModal, setFormModal] = useState(false);
  const [formData, setFormData] = useState({});

  const [formType, setFormType] = useState(false);

  const onCloseModalHandle = () => {
    setFormData({});
    setFormModal(false);
  };

  const sendAuthData = async () => {
    let url_server;
    if (formType) {
      url_server = 'http://localhost:4000/users/signin';
    } else {
      url_server = 'http://localhost:4000/users/signup';
    }

    const response = fetch(url_server, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(async response => {
        if (response.ok) {
          console.log(response.json());
        }
      })
      .catch(e => console.log(e));
  };

  return (
    <ImageBackground source={backgroundColorImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Connectez vous</Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={formModal}
          onRequestClose={() => {
            setFormModal(!formModal);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={styles.buttonClose}
                onPress={onCloseModalHandle}>
                <Text style={{color: 'white'}}>
                  <FontAwesomeIcon name={'close'} size={15} color="white" />
                </Text>
              </TouchableOpacity>

              {formType ? (
                <LoginForm formData={formData} setFormData={setFormData} />
              ) : (
                <SignupForm formData={formData} setFormData={setFormData} />
              )}

              <TouchableOpacity
                style={styles.sendButton}
                onPress={sendAuthData}>
                <Text>Envoyer</Text>
              </TouchableOpacity>

              <Text style={styles.formChangeText}>
                {formType ? 'Pas encore de compte ?' : 'Déja un compte ?'}
              </Text>
              <TouchableOpacity
                onPress={() => setFormType(prevState => !prevState)}>
                <Text style={{color: '#4BA3C3'}}>c'est par ici</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setFormModal(true)}>
          <Text style={styles.buttonLabel}>Se connecter</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4444',
    height: Dimensions.get('window').height,
    position: 'relative',
  },
  title: {
    fontSize: 35,
    position: 'absolute',
    top: Dimensions.get('window').height / 3,
    left: Dimensions.get('window').width / 2,
    transform: [{translateX: -120}],
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#991B1B',
    width: '50%',
    borderRadius: 10,
    position: 'absolute',
    top: Dimensions.get('window').height / 2.3,
    left: Dimensions.get('window').width / 2,
    transform: [{translateX: -90}],
    elevation: 2,
  },

  buttonLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    width: Dimensions.get('window').width / 1.3,
    position: 'relative',
  },

  buttonClose: {
    position: 'absolute',
    top: 10,
    right: 20,
    borderWidth: 1,
    borderColor: '#991B1B',
    backgroundColor: '#991B1B',
    borderRadius: 50,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'red',
  },

  sendButton: {
    backgroundColor: '#991B1B',
    color: 'white',
    padding: 10,
    borderRadius: 10,
  },

  formChangeText: {
    color: '#991B1B',
    marginTop: 20,
  },
});
