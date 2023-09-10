import {createStackNavigator} from '@react-navigation/stack';

import LoginType from '../screens/LoginType';
import Onboarding from '../screens/Onboarding';
import Login from '../screens/Login';

import routenames from '../constants/routenames';

const Stack = createStackNavigator();

function LoginRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={routenames.LOGIN.SUB_ROUTES.ONBOARD.NAME}
        component={Onboarding}
      />
      <Stack.Screen
        name={routenames.LOGIN.SUB_ROUTES.LOGIN_TYPE.NAME}
        component={LoginType}
      />
      <Stack.Screen
        name={routenames.LOGIN.SUB_ROUTES.LOGIN_MAIN.NAME}
        component={Login}
      />
    </Stack.Navigator>
  );
}

export default LoginRoutes;
