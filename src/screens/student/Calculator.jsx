import {
  ScrollView,
  FormControl,
  Input,
  Icon,
  Button,
  WarningOutlineIcon,
  HStack,
  Heading,
  Center,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, {useState, useEffect} from 'react';

const NUM_OF_SEM = 8;

const sgpa_default_inputs = [...new Array(NUM_OF_SEM)].map(v => 0);

const Calculator = () => {
  const [sgpa_inputs, setsgpa_inputs] = useState(sgpa_default_inputs);
  const [errState, seterrState] = useState([]);
  const [result, setresult] = useState(0);

  const navigation = useNavigation();

  const handleChange = (v, i) => {
    setsgpa_inputs(prev => {
      const newp = [...prev];
      newp[i] = v;
      return newp;
    });
  };

  const handleBlur = i => {
    const value = sgpa_inputs[i];

    if (value === 0) {
      return;
    }
    seterrState(prev => {
      const err = [...prev];
      if (value < 2 || value > 10) {
        err[i] = 'Invalid input!';
      } else {
        err[i] = '';
      }

      return err;
    });
  };

  const handleSubmit = async () => {
    const haserros = errState.some(v => !!v);
    if (haserros) {
      return;
    }

    const sgpas = [];
    for (const sgpa of sgpa_inputs) {
      if (sgpa) {
        sgpas.push(sgpa);
      }
    }

    const totalsgpa = sgpas.reduce((total, val) =>
      (parseFloat(total) + parseFloat(val)).toFixed(2),
    );

    const avg_sgpa = totalsgpa / sgpas.length;

    const cgpa = (avg_sgpa - 0.75) * 10;

    setresult(cgpa.toFixed(2));
  };

  useEffect(() => {
    navigation.getParent().setOptions({tabBarVisible: false});

    return () => {
      navigation.getParent().setOptions({tabBarVisible: true});
    };
  }, []);

  return (
    <ScrollView px={5} pt={3} bgColor={'white'}>
      {result ? (
        <Center mb={4}>
          <Heading size="md">Your Percentage</Heading>
          <Heading size={'2xl'} bold>
            {result}
          </Heading>
        </Center>
      ) : null}
      <HStack space={3} flexWrap={'wrap'}>
        {sgpa_inputs.map((v, i) => (
          <FormControl
            key={i}
            isInvalid={errState[i]}
            flex={1}
            minWidth={'35%'}
            marginBottom={3}
            isRequired>
            <FormControl.Label>{`Sem ${i + 1} SGPA`}</FormControl.Label>
            <Input
              size="2xl"
              value={setsgpa_inputs[i]}
              onChangeText={tex => handleChange(tex, i)}
              placeholder={'0'}
              keyboardType="decimal-pad"
              maxLength={3}
              onBlur={() => handleBlur(i)}
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              {errState[i]}
            </FormControl.ErrorMessage>
          </FormControl>
        ))}
      </HStack>
      <Button
        mt={5}
        onPress={handleSubmit}
        endIcon={<Icon as={<MaterialIcons name="percent" />} size={5} />}>
        Calculate
      </Button>
    </ScrollView>
  );
};

export default Calculator;
