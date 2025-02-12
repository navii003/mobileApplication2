import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function CalgaryPage() {
  return (
    <View style={styles.container}>
      {/* Hero Image */}
      <Image 
        source={require('../../assets/images/calgary.jpg')} 
        style={styles.heroImage} 
      />

      {/* Title */}
      <Text style={styles.header}>Welcome to Calgary</Text>

      {/* Description Text (Without Extra Box) */}
      <Text style={styles.cityInfo}>
      Calgary, nestled in Alberta, Canada, stands as the province's largest city, renowned for its proximity to the Rocky Mountains and the iconic Calgary Stampede. This vibrant city, traditionally centered on the oil and gas industry, is rapidly diversifying into technology, tourism, and other sectors. Calgary boasts a young, dynamic population, a high quality of life, and ample outdoor recreational opportunities. Its accessible downtown and cultural diversity make it a desirable location for residents and tourists alike, emphasizing its role as a gateway to adventure.
      </Text>

      {/* Explore Calgary Button */}
      <TouchableOpacity 
        style={styles.smallButton} 
        onPress={() => router.push('/calgary')}
      >
        <Text style={styles.buttonText}>Explore Calgary</Text>
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
    color: '#FF7043', // Calgary orange theme
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
    backgroundColor: '#D32F2F',
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
