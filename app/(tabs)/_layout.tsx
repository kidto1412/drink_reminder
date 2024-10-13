import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Icon, NativeBaseProvider } from "native-base";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { NativeBaseConfigProvider } from "native-base/lib/typescript/core/NativeBaseContext";
import { Platform } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <NativeBaseProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              // <TabBarIcon
              //   name={focused ? "home" : "home-outline"}
              //   color={color}
              // />
              <Icon as={FontAwesome} name="home" size={"xl"} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="history"
          options={{
            title: "History",
            tabBarIcon: ({ color, focused }) => (
              <Icon
                as={Ionicons}
                name={Platform.OS ? "timer-outline" : "timer-outline"}
                size={"xl"}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="report"
          options={{
            title: "Report",
            tabBarIcon: ({ color, focused }) => (
              <Icon as={FontAwesome} name="file" size={"md"} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="achievment"
          options={{
            title: "History",
            tabBarIcon: ({ color, focused }) => (
              <Icon
                as={Ionicons}
                name={Platform.OS ? "star" : "star"}
                size={"xl"}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="account"
          options={{
            title: "Account",
            tabBarIcon: ({ color, focused }) => (
              <Icon as={FontAwesome} name="gear" size={"xl"} color={color} />
            ),
          }}
        />
      </Tabs>
    </NativeBaseProvider>
  );
}
