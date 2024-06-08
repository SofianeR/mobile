import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';

const backgroundColorImage = require('../../assets/img/FondAccueil.jpg');

const RulesScreen = () => {
  return (
    <ImageBackground source={backgroundColorImage}>
      <View style={styles.container}>
        <View style={styles.rulesContainer}>
          <Text style={styles.title}>Règles du Jeu de Loup-Garou</Text>
          <Text style={styles.rule}>
            1. Les joueurs sont répartis en deux groupes : les villageois et les
            loups-garous.
          </Text>
          <Text style={styles.rule}>
            2. Le but des loups-garous est de dévorer tous les villageois sans
            se faire découvrir.
          </Text>
          <Text style={styles.rule}>
            3. Le but des villageois est de démasquer et éliminer les
            loups-garous.
          </Text>
          <Text style={styles.rule}>
            4. Chaque nuit, les loups-garous se réveillent secrètement et
            choisissent une victime à dévorer.
          </Text>
          <Text style={styles.rule}>
            5. Pendant la journée, tous les joueurs discutent pour déterminer
            qui sont les loups-garous et votent pour éliminer un joueur suspecté
            d'être un loup-garou.
          </Text>
          <Text style={styles.rule}>
            6. Le joueur éliminé est révélé et le cycle recommence jusqu'à ce
            que tous les loups-garous soient éliminés ou que tous les villageois
            soient dévorés.
          </Text>
          <Text style={styles.rule}>
            7. Le jeu se termine lorsque l'un des deux groupes remplit son
            objectif.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RulesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4444',
    height: Dimensions.get('window').height,
    position: 'relative',
  },
  rulesContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    top: '10%',
    width: Dimensions.get('window').width / 1.1,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  rule: {
    marginBottom: 10,
    fontSize: 16,
    color: 'black',
  },
});
