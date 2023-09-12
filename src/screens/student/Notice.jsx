import {
  ScrollView,
  Text,
  VStack,
  Heading,
  Badge,
  Pressable,
  HStack,
  Icon,
  Box,
} from 'native-base';
import React, {useState, useEffect} from 'react';
import {Linking} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Loader from '../../components/Loader';
import collection_schemas from '../../constants/collection_schemas';

const Notice = () => {
  const [materials, setmaterials] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setisLoading(true);
        const notice_coll = await firestore()
          .collection(collection_schemas.materials.name)
          .get();
        const dt = [];
        notice_coll.forEach(d => dt.push(d.data()));
        setmaterials(dt);
      } catch (error) {
      } finally {
        setisLoading(false);
      }
    })();
  }, []);
  return (
    <ScrollView px={5} pt={3} w="100%" h="100%" bgColor={'white'}>
      <Loader isLoading={isLoading} />
      <VStack space={3}>
        {materials.map((item, idx) => (
          <SingleCard
            key={idx}
            title={item.title}
            desc={item.desc}
            type={item.type}
            timestamp={
              item.time_added?.toDate().toDateString() +
              ' ' +
              item.time_added?.toDate().toLocaleTimeString()
            }
            docLink={item.doc_link}
          />
        ))}
      </VStack>
      {!isLoading && !materials.length ? <Heading>No Data!</Heading> : null}
      <Box h={300} />
    </ScrollView>
  );
};

export default Notice;

const SingleCard = ({title, desc, docLink, type}) => {
  const handlePress = async url => {
    await Linking.openURL(url);
  };
  return (
    <VStack
      padding={3}
      borderWidth={2}
      backgroundColor={'secondary.50'}
      borderColor={'primary.100'}
      borderRadius={'md'}
      w={'100%'}>
      <VStack space={3}>
        <Badge
          _text={{textTransform: 'capitalize'}}
          borderRadius={'md'}
          w="40%"
          colorScheme="success">
          {type}
        </Badge>
        <Heading textTransform={'capitalize'} size={'sm'} bold>
          {title}
        </Heading>
        <Text textTransform={'capitalize'}>{desc}</Text>

        {docLink ? (
          <Pressable onPress={() => handlePress(docLink)}>
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
        ) : null}
      </VStack>
    </VStack>
  );
};
