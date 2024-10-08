import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
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
  Icon,
  HStack,
  Avatar,
  Badge,
} from "native-base";
import React from "react";
// import ManImage from '@/assets/images/man.png'

export default function Age() {
  return (
    <Box>
      <Box mx={4} mb={3} mt={10}>
        <Center>
          <Heading>What's your age?</Heading>
          <Text
            textAlign={"center"}
            width={"xs"}
            fontSize="md"
            color={"gray.500"}
            mt={"3"}
          >
            Your height is another key factorin customizing your hydration plan.
            Choose your height measurement.
          </Text>
          <Input
            mt="3"
            mb={"3"}
            placeholder="Input"
            w="100%"
            InputRightElement={
              <Badge colorScheme="info">
                <Text>years</Text>
              </Badge>
            }
          />
        </Center>
      </Box>
    </Box>
  );
}
