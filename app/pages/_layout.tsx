import { Stack } from "expo-router";

export default function PagesLayout() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ header: () => null }} />
      <Stack.Screen name="register" options={{ header: () => null }} />
    </Stack>
  );
}
