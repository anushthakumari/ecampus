const routenames = {
  LOGIN: {
    KEY: 'LOGIN',
    NAME: 'LOGIN',
    LABEL: 'Login',
    SUB_ROUTES: {
      LOGIN_TYPE: {
        KEY: 'LOGIN_TYPE',
        NAME: 'LOGIN_TYPE',
        LABEL: 'Choose Login',
      },
      ONBOARD: {
        KEY: 'ONBOARD',
        NAME: 'ONBOARD',
        LABEL: 'On board',
      },
      LOGIN_MAIN: {
        KEY: 'LOGIN_MAIN',
        NAME: 'LOGIN_MAIN',
        LABEL: 'Login',
      },
    },
  },
  STUDENT: {
    KEY: 'STUDENT',
    NAME: 'STUDENT',
    LABEL: 'Student',
    SUB_ROUTES: {
      HOME: {
        KEY: 'HOME',
        NAME: 'HOME',
        LABEL: 'Home',
      },
      STUDENT_ID: {
        KEY: 'STUDENT_ID',
        NAME: 'STUDENT_ID',
        LABEL: 'ID Card',
      },
      PROFILE: {
        KEY: 'PROFILE',
        NAME: 'PROFILE',
        LABEL: 'Profile',
        SUB_ROUTES: {
          ALL_DETAILS: {
            KEY: 'ALL_DETAILS',
            NAME: 'ALL_DETAILS',
            LABEL: 'All Details',
          },
          PERSONAL_DETAILS: {
            KEY: 'PERSONAL_DETAILS',
            NAME: 'PERSONAL_DETAILS',
            LABEL: 'Personal Details',
          },
          CONTACT_DETAILS: {
            KEY: 'CONTACT_DETAILS',
            NAME: 'CONTACT_DETAILS',
            LABEL: 'Contact Details',
          },
          POSTAL_DETAILS: {
            KEY: 'POSTAL_DETAILS',
            NAME: 'POSTAL_DETAILS',
            LABEL: 'Postal Details',
          },
        },
      },
      NOTICE: {
        KEY: 'NOTICE',
        NAME: 'NOTICE',
        LABEL: 'Notice',
      },
    },
  },
};

export default routenames;
