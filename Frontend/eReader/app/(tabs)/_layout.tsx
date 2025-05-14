import React from "react";
import { Tabs } from "expo-router";
import { BtmTabBar } from "@/components/global/BtmTab";

const TabLayout = () => {
  return (
    <Tabs tabBar={(props) => <BtmTabBar {...props} />}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="notes" options={{ title: "Notes" }} />
      <Tabs.Screen name="favorites" options={{ title: "Favorites" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
};

export default TabLayout;
