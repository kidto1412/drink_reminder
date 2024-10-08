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

export default function FormRegister() {
  return (
    <Box>
      <Box mx={4} mb={3} mt={10}>
        <Heading>Sign Up</Heading>
        <Text fontSize="md" color={"gray.500"} mt={"3"}>
          Sign in to your account to continue your journey towards a healthier
          you.
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
        <FormControl isRequired>
          <Stack mx="4">
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              type="password"
              defaultValue="12345"
              placeholder="password"
            />
          </Stack>
        </FormControl>
      </Box>
    </Box>
  );
}
