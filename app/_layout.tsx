import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ header: () => null }} />
      <Stack.Screen name="(register)" options={{ header: () => null }} />
      {/* <Stack.Screen name="(pages)/home" options={{ header: () => null }} />
      <Stack.Screen name="(pages)/register" options={{ header: () => null }} />
      <Stack.Screen
        name="(pages)/setup-profile"
        options={{ header: () => null }}
      /> */}
    </Stack>
  );
}
