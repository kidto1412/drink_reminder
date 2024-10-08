import { Stack } from "expo-router";
import { Box, Progress } from "native-base";

export default function RegisterLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ header: () => null }} />
      {/* <Stack.Screen name="details" /> */}
    </Stack>
  );
}
