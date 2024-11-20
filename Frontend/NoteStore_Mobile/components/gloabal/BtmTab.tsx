import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform, Dimensions } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { theme } from '@/constants/theme';
import { Home, NotebookPen, Star, User, LucideIcon } from 'lucide-react-native';

// Define an interface for the icon mapping
interface TabIconMapping {
  [key: string]: LucideIcon;
}

export function BtmTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  // Explicit type annotation for tabIcons
  const tabIcons: TabIconMapping = {
    'index': Home,
    'notes': NotebookPen,
    'favorites': Star,
    'profile': User
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key] || {};
        const label =
          options?.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options?.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        // Use a type guard to safely get the icon
        const IconComponent = tabIcons[route.name] ?? Home;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options?.tabBarAccessibilityLabel}
            testID={options?.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}
          >
            <IconComponent 
              color={isFocused ? theme.colors.primary : theme.colors.text.secondary} 
              size={24} 
            />
            <Text 
              style={[
                styles.tabLabel, 
                { 
                  color: isFocused ? theme.colors.primary : theme.colors.text.secondary,
                  fontWeight: isFocused ? 'bold' : 'normal'
                }
              ]}
            >
              {label as string}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        ...theme.shadows.lg,
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 5,
      }
    }),
    height: 80,
    width: width,
    paddingHorizontal: 10,
  },
  tab: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    gap: 5,
  },
  tabLabel: {
    fontSize: 12,
    textAlign: 'center',
  }
});

export default BtmTabBar;