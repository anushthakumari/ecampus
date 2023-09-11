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
        headerTitleStyle: {
          fontFamily: 'Urbanist-SemiBold',
        },
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={routenames.STUDENT.SUB_ROUTES.PROFILE.SUB_ROUTES.ALL_DETAILS.NAME}
        component={Profile}
      />
      <Stack.Screen
        name={
          routenames.STUDENT.SUB_ROUTES.PROFILE.SUB_ROUTES.PERSONAL_DETAILS.NAME
        }
        options={{
          headerTitle:
            routenames.STUDENT.SUB_ROUTES.PROFILE.SUB_ROUTES.PERSONAL_DETAILS
              .LABEL,
        }}
        component={PersonalDetails}
      />
      <Stack.Screen
        options={{
          headerTitle:
            routenames.STUDENT.SUB_ROUTES.PROFILE.SUB_ROUTES.CONTACT_DETAILS
              .LABEL,
        }}
        name={
          routenames.STUDENT.SUB_ROUTES.PROFILE.SUB_ROUTES.CONTACT_DETAILS.NAME
        }
        component={ContactDetails}
      />
      <Stack.Screen
        options={{
          headerTitle:
            routenames.STUDENT.SUB_ROUTES.PROFILE.SUB_ROUTES.POSTAL_DETAILS
              .LABEL,
        }}
        name={
          routenames.STUDENT.SUB_ROUTES.PROFILE.SUB_ROUTES.POSTAL_DETAILS.NAME
        }
        component={PostalDetails}
      />
    </Stack.Navigator>
  );
}

export default ProfileRoutes;
