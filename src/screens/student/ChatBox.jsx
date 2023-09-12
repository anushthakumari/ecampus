import {
  FlatList,
  View,
  Text,
  Heading,
  Box,
  HStack,
  Avatar,
  Input,
  IconButton,
  Icon,
  ChevronRightIcon,
} from 'native-base';
import React, {useState, useEffect, useRef} from 'react';
import firestore from '@react-native-firebase/firestore';

import collection_schema from '../../constants/collection_schemas';
import useAuthState from '../../hooks/useAuth';

const ChatBox = () => {
  const {_id: id} = useAuthState();

  const [msgs, setmsgs] = useState([]);
  const flatRef = useRef();

  useEffect(() => {
    const subscriber = firestore()
      .collection(collection_schema.groupchats.name)
      .orderBy(collection_schema.groupchats.columns.time_added, 'desc')
      .limit(30)
      .onSnapshot(documentSnapshot => {
        let d = [];
        documentSnapshot.docs.forEach(v => {
          d.push({doc_id: v.id, ...v.data()});
        });
        setmsgs(d.reverse());
      });
    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  useEffect(() => {
    if (msgs.length > 2) {
      flatRef.current.scrollToEnd();
    }
  }, [msgs.length]);

  return (
    <Box h="99%" padding={3}>
      <FlatList
        w="100%"
        h="100%"
        ref={ref => (flatRef.current = ref)}
        data={msgs}
        renderItem={({item}) => {
          return (
            <Bubble
              pos={item.user_id === id ? 'end' : 'start'}
              text={item.text}
              title={item.name}
            />
          );
        }}
      />
      <Composer />
    </Box>
  );
};

const Bubble = ({pos, text, title, isTeacher}) => {
  const isLeft = pos === 'start';

  return (
    <HStack w="100%" justifyContent={'flex-' + pos}>
      <HStack my={2} maxWidth={'90%'} alignItems="baseline" space={2}>
        {isLeft ? <Avatar size={'sm'}>{title[0]}</Avatar> : null}
        <Box
          backgroundColor={isTeacher ? 'primary.500' : '#e5e5e5'}
          borderRadius={'xl'}
          padding={2}>
          {isLeft ? (
            <Text
              fontSize={12}
              bold={isTeacher}
              color={isTeacher ? 'white' : 'black'}>
              {title}
              {isTeacher ? ' (Guru)' : null}
            </Text>
          ) : null}
          <Text fontSize={16}>{text}</Text>
        </Box>
      </HStack>
    </HStack>
  );
};

const Composer = () => {
  const [text, settext] = useState('');
  const {_id: id, first_name: name} = useAuthState();

  const handleSend = () => {
    if (!text || !text.trim()) {
      return;
    }

    firestore()
      .collection(collection_schema.groupchats.name)
      .add({
        user_id: id,
        text,
        name,
        is_blocked_chat: false,
        time_added: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => settext(''));
  };

  return (
    <HStack w="100%" justifyContent={'space-between'}>
      <Input w="86%" value={text} onChangeText={v => settext(v)} />
      <IconButton
        padding={3}
        borderRadius={'full'}
        variant={'solid'}
        onPress={handleSend}
        icon={<ChevronRightIcon />}
      />
    </HStack>
  );
};

export default ChatBox;
