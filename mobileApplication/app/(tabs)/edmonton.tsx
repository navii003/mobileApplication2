import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function EdmontonPage() {
  return (
    <View style={styles.container}>
      {/* Hero Image */}
      <Image 
        source={require('../../assets/images/edmonton.jpg')} 
        style={styles.heroImage} 
      />

      {/* Title */}
      <Text style={styles.header}>Welcome to Edmonton</Text>

      {/* Description Text (Without Extra Box) */}
      <Text style={styles.cityInfo}>
      Edmonton, the capital city of Alberta, Canada, is known for its vibrant arts scene and the massive West Edmonton Mall, one of the largest shopping centers in the world. This city, rich in cultural diversity, hosts numerous festivals year-round, earning it the title "Canada's Festival City." Edmonton serves as a gateway to northern Alberta and is an important educational and governmental center. It boasts a strong economy based on the oil and gas industry, along with innovations in health and technology sectors.
      </Text>

      {/* Explore Edmonton Button */}
      <TouchableOpacity 
        style={styles.smallButton} 
        onPress={() => router.push('/edmonton')}
      >
        <Text style={styles.buttonText}>Explore Edmonton</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1E1E1E',
    padding: 20,
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#42A5F5', // Edmonton blue theme
    textAlign: 'center',
    marginBottom: 15,
  },
  cityInfo: {
    textAlign: 'center',
    color: '#E0E0E0',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  smallButton: {
    backgroundColor: '#1976D2',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: 180,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
