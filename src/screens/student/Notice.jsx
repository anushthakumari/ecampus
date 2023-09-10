import {
  ScrollView,
  Text,
  VStack,
  Heading,
  Badge,
  Pressable,
  HStack,
  Icon,
} from 'native-base';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Notice = () => {
  return (
    <ScrollView px={5} pt={3} w="100%" h="100%" bgColor={'white'}>
      <SingleCard />
    </ScrollView>
  );
};

export default Notice;

const SingleCard = () => {
  return (
    <VStack
      padding={3}
      borderWidth={2}
      backgroundColor={'secondary.50'}
      borderColor={'primary.100'}
      borderRadius={'md'}
      w={'100%'}>
      <VStack space={3}>
        <Badge borderRadius={'md'} w="20%" colorScheme="success">
          Notice
        </Badge>
        <Heading size={'sm'} bold>
          FY B-Tech applications are out!
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ipsam
          provident officia, deserunt non nobis laudantium dolorum minima alias
          maxime, sapiente, aperiam facilis temporibus ullam deleniti modi
          magnam accusamus debitis.
        </Text>

        <Pressable>
          <HStack
            maxW={'50%'}
            bgColor={'primary.200'}
            borderRadius={'md'}
            justifyContent={'space-between'}
            padding={2}>
            <Text>View Attachment</Text>
            <Icon
              as={<MaterialIcons name="remove-red-eye" />}
              size={5}
              ml="2"
            />
          </HStack>
        </Pressable>
      </VStack>
    </VStack>
  );
};
