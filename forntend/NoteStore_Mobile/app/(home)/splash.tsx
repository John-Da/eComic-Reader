import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';
import AppColors from '@/constants/AppColors';

const Splash = () => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {/* Image Background */}
      <View style={[styles.imgContainer, { width: SCREEN_WIDTH, height: SCREEN_HEIGHT }]}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://i.pinimg.com/736x/18/db/e1/18dbe1269281a46f9064eb5efae42dbc.jpg',
          }}
        />
        <View style={styles.overlayImg} />
      </View>

      {/* Text Content */}
      <View style={[styles.contentBox, { top: SCREEN_HEIGHT * 0.35 }]}>
        <View style={styles.txtContainer}>
          <Text style={styles.sloganTxt}>Your Library, Anytime, Anywhere</Text>
          <Text style={styles.brandTxt}>NoteStore</Text>
        </View>
      </View>

      {/* Get Started Button */}
      <View style={styles.getStartBtnContainer}>
        <TouchableOpacity
          style={styles.getStartBtn}
          onPress={() => {}}
          accessibilityLabel="Get Started"
          accessibilityRole="button"
        >
          <Text style={styles.btnTxt}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: AppColors.whiteColor,
  },
  imgContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlayImg: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  contentBox: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  txtContainer: {
    alignItems: 'center',
  },
  sloganTxt: {
    fontSize: 14,
    color: AppColors.whiteColor,
    fontWeight: '300',
  },
  brandTxt: {
    fontSize: 42,
    fontWeight: 'bold',
    color: AppColors.whiteColor,
  },
  getStartBtnContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 80,
    alignItems: 'center',
  },
  getStartBtn: {
    backgroundColor: AppColors.primaryColor,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  btnTxt: {
    color: AppColors.whiteColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
