import { FontAwesome } from "@expo/vector-icons";
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
} from "native-base";
import React from "react";

export default function Gender() {
  return (
    <Box>
      <Box mx={4} mb={3} mt={10}>
        <Center>
          <Heading>What's Your Gender</Heading>
          <Text fontSize="md" color={"gray.500"} mt={"3"}>
            Hydrify is here to tailor a hydration plan just for you left kick
            things off by getting yo know you better.
          </Text>
          <HStack
            space={2}
            alignContent={"center"}
            alignItems={"center"}
            mt={"10"}
          >
            <Avatar bg="lightBlue.400" size={100}>
              <Icon as={FontAwesome} name="venus" size={50} color={"white"} />
            </Avatar>
            <Avatar bg="lightBlue.400" size={100}>
              <Icon as={FontAwesome} name="mars" size={50} color={"white"} />
            </Avatar>
          </HStack>
        </Center>
      </Box>
    </Box>
  );
}
