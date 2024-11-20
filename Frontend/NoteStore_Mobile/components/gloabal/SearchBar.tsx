import React from "react";
import { Platform, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { theme } from "../../constants/theme";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onSearch: () => void;
}

export const SearchBar = React.memo(
  ({ value, onChangeText, onSearch }: SearchBarProps) => (
    <View style={styles.searchWrapper}>
      <TextInput
        style={[styles.input, styles.shadow]}
        placeholder="Search..."
        value={value}
        onChangeText={onChangeText}
        accessibilityLabel="Search input"
      />
      <TouchableOpacity
        style={styles.searchButton}
        onPress={onSearch}
        accessibilityLabel="Search button"
      >
        <FontAwesome5 name="search" size={18} color={theme.colors.white} />
      </TouchableOpacity>
    </View>
  )
);

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 1,
  },
  shadow: {
    ...Platform.select({
      ios: theme.shadows.md,
      android: theme.shadows.md,
    })
  },
  input: {
    flexDirection: "row",
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopLeftRadius: theme.borderRadius.lg,
    borderBottomLeftRadius: theme.borderRadius.lg,
    backgroundColor: theme.colors.white,
  },
  searchButton: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderTopRightRadius: theme.borderRadius.lg,
    borderBottomRightRadius: theme.borderRadius.lg,
    alignItems: "center",
    justifyContent: "center",
  },
});
