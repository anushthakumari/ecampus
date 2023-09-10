import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../screens/student/Profile';
import PersonalDetails from '../screens/student/PersonalDetails';
import ContactDetails from '../screens/student/ContactDetails';
import PostalDetails from '../screens/student/PostalDetails';

import routenames from '../constants/routenames';

const Stack = createStackNavigator();

function ProfileRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={routenames.STUDENT.SUB_ROUTES.PROFILE.SUB_ROUTES.ALL_DETAILS.NAME}
        component={Profile}
      />
      <Stack.Screen
        name={
          routenames.STUDENT.SUB_ROUTES.PROFILE.SUB_ROUTES.PERSONAL_DETAILS.NAME
        }
        component={PersonalDetails}
      />
      <Stack.Screen
        name={
          routenames.STUDENT.SUB_ROUTES.PROFILE.SUB_ROUTES.CONTACT_DETAILS.NAME
        }
        component={ContactDetails}
      />
      <Stack.Screen
        name={
          routenames.STUDENT.SUB_ROUTES.PROFILE.SUB_ROUTES.POSTAL_DETAILS.NAME
        }
        component={PostalDetails}
      />
    </Stack.Navigator>
  );
}

export default ProfileRoutes;
