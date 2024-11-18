import { ActivityIndicator, Pressable, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import AppColors from '@/constants/AppColors';
import { useState } from 'react';
import Header from '@/components/Home/Header';

export default function TabOneScreen() {
  const [isPending, setIsPending] = useState(false);

  return (
    <View style={styles.container}>

      {isPending && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={AppColors.whiteColor} />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      )}

      <View style={styles.heroContent} >
        <Header />
      </View>

      <View>
        <View>
          <Text>Find, Share, And Succeed Together...</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.whiteColor,
    position: 'relative',
    alignItems: 'center',
  },
  heroContent: {
    backgroundColor: AppColors.primaryColor,
    height: 256,
    marginBottom: 16,
    justifyContent: 'flex-start',
    width: '100%',
    position: 'relative',
    paddingTop: 64,
    borderBottomLeftRadius: 200,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loadingText: {
    marginTop: 10,
    color: AppColors.whiteColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    backgroundColor: AppColors.primaryColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: AppColors.whiteColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
