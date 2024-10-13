import { router } from "expo-router";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Image,
  Input,
  NativeBaseProvider,
  Stack,
  WarningOutlineIcon,
  Text,
  Progress,
} from "native-base";
import React from "react";

import {
  SafeAreaFrameContext,
  SafeAreaView,
} from "react-native-safe-area-context";

export default function Index({ navigations }: any) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <Box backgroundColor={"white"} height={"100%"} width={"full"}>
          <Box mx={4} mb={3} mt={10}>
            <Heading>Sign In</Heading>
            <Text fontSize="md" color={"gray.500"} mt={"3"}>
              Sign in to your account to continue your journey towards a
              healthier you.
            </Text>
          </Box>
          <Box width={"full"} justifyContent={"center"}>
            <FormControl isRequired>
              <Stack mx="4">
                <FormControl.Label>Email</FormControl.Label>
                <Input type="text" placeholder="email" />
              </Stack>
            </FormControl>
            <FormControl isRequired>
              <Stack mx="4">
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  type="password"
                  defaultValue="12345"
                  placeholder="password"
                />
                <FormControl.HelperText>
                  Must be atleast 6 characters.
                </FormControl.HelperText>
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  Atleast 6 characters are required.
                </FormControl.ErrorMessage>
              </Stack>
            </FormControl>
            <Box mr={2} mb={3}>
              <Button size="sm" variant="link" alignSelf="flex-end">
                Sign Up
              </Button>
            </Box>
            <Box mx={4}>
              <Button onPress={() => router.push("/home")}>Login</Button>
            </Box>
          </Box>
        </Box>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}
