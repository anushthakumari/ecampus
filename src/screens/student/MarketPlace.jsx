import {
  ScrollView,
  VStack,
  Box,
  HStack,
  Image,
  Heading,
  Text,
  Button,
} from 'native-base';
import {Linking} from 'react-native';
import React from 'react';

const MarketPlace = () => {
  return (
    <ScrollView paddingX={6} marginTop={2}>
      <VStack space={3}>
        {items.map((item, idx) => (
          <Item key={idx} {...item} />
        ))}
      </VStack>
    </ScrollView>
  );
};

export default MarketPlace;

const Item = ({source, title, sellingPrice, ogPrice, sellerName, contact}) => {
  const handleContactPress = () => {
    Linking.openURL('tel:' + contact);
  };

  return (
    <HStack
      minH={250}
      space={2}
      bgColor="white"
      borderRadius={'md'}
      paddingY={3}
      paddingX={1}>
      <Image source={source} flex={1.2} alt={title} height={'100%'} />
      <VStack justifyContent={'space-between'} space={1} flex={1}>
        <Box>
          <Heading fontWeight={400} fontSize={15}>
            {title}
          </Heading>
          <HStack alignItems={'baseline'} space={2} w="100%">
            <Heading fontWeight={400} size="xl">
              ₹{sellingPrice}
            </Heading>
            <Text color="black" strikeThrough>
              ₹{ogPrice}
            </Text>
          </HStack>
        </Box>

        <Box>
          <Text fontWeight={200}>Seller</Text>
          <Text fontWeight={200} mt={-1}>
            {sellerName}
          </Text>

          <Button onPress={handleContactPress} variant={'solid'}>
            Contact Seller
          </Button>
        </Box>
      </VStack>
    </HStack>
  );
};

const items = [
  {
    title:
      'UEI ENGINEERING DRAWING INSTRUMENTS SET / GEOMETRY SET ( 5 ITEMS) Drafting Compass Set',
    ogPrice: 300,
    sellingPrice: 200,
    sellerName: 'Sandeepa Sen',
    contact: '1245891246',
    source: require('../../../assets/images/geo-box.jpg'),
  },
  {
    title: 'RS PRO White Unisex Reusable Lab Coat, XL',
    ogPrice: 300,
    sellingPrice: 150,
    sellerName: 'Radhakrishnan',
    contact: '6769081230',
    source: require('../../../assets/images/appron.jpg'),
  },
  {
    title: 'PVC Yellow Engineer Safety Helmets, Size: Medium',
    ogPrice: 400,
    sellingPrice: 200,
    sellerName: 'Govind',
    contact: '6769081230',
    source: require('../../../assets/images/helmet.jpg'),
  },
  {
    title:
      'Higher Engineering Mathematics by Dr. B. S. Grewal - 42nd edition (Khanna Publishers) ',
    ogPrice: 600,
    sellingPrice: 400,
    sellerName: 'Keshav',
    contact: '6769081230',
    source: require('../../../assets/images/book.jpg'),
  },
  {
    title: 'Plastic Drawing Sheet Container',
    ogPrice: 50,
    sellingPrice: 40,
    sellerName: 'Kamal',
    contact: '6769081230',
    source: require('../../../assets/images/drawing-sheet-container.jpg'),
  },
  {
    title:
      'Easy To Use Topcon Mini Drafter For Drawing & Drafting at Best Price in Roorkee | Public Instruments',
    ogPrice: 80,
    sellingPrice: 50,
    sellerName: 'Radhey',
    contact: '6769081230',
    source: require('../../../assets/images/drafter.jpg'),
  },
];
