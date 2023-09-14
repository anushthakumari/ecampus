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
        SUB_ROUTES: {
          MAIN_HOME: {
            KEY: 'MAIN_HOME',
            NAME: 'MAIN_HOME',
            LABEL: 'Home',
          },
          MARKET_PLACE: {
            KEY: 'MARKET_PLACE',
            NAME: 'MARKET_PLACE',
            LABEL: 'Market Place',
          },
          WEBINAR: {
            KEY: 'WEBINAR',
            NAME: 'WEBINAR',
            LABEL: 'Webinar',
            SUB_ROUTES: {
              WEBINAR_HOST: {
                KEY: 'WEBINAR_HOST',
                NAME: 'WEBINAR_HOST',
                LABEL: 'Hosting',
              },
              WEBINAR_LIVE: {
                KEY: 'WEBINAR_LIVE',
                NAME: 'WEBINAR_LIVE',
                LABEL: 'Live',
              },
            },
          },
          CALCULATOR: {
            KEY: 'CALCULATOR',
            NAME: 'CALCULATOR',
            LABEL: 'CGPA Calculator',
          },
        },
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
          ACADEMIC_DETAILS: {
            KEY: 'ACADEMIC_DETAILS',
            NAME: 'ACADEMIC_DETAILS',
            LABEL: 'Academic Details',
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

  CHAT_BOT: {
    KEY: 'CHAT_BOT',
    NAME: 'CHAT_BOT',
    LABEL: 'Chat Bot',
  },

  CHAT_BOX: {
    KEY: 'CHAT_BOX',
    NAME: 'CHAT_BOX',
    LABEL: 'Group Chats',
  },

  TEACHER: {
    KEY: 'TEACHER',
    NAME: 'TEACHER',
    LABEL: 'Teacher',
    SUB_ROUTES: {
      TEACHER_HOME: {
        KEY: 'TEACHER_HOME',
        NAME: 'TEACHER_HOME',
        LABEL: 'Home',
      },
      ID_VERIFY: {
        KEY: 'ID_VERIFY',
        NAME: 'ID_VERIFY',
        LABEL: 'Verify ID',
      },
      TEACHER_CALCULATOR: {
        KEY: 'TEACHER_CALCULATOR',
        NAME: 'TEACHER_CALCULATOR',
        LABEL: 'Attendance Calculator',
      },
      TEACHER_MARKET_PLACE: {
        KEY: 'TEACHER_MARKET_PLACE',
        NAME: 'TEACHER_MARKET_PLACE',
        LABEL: 'Market Place',
      },
      TEACHER_CHAT_BOT: {
        KEY: 'TEACHER_CHAT_BOT',
        NAME: 'TEACHER_CHAT_BOT',
        LABEL: 'Chat Bot',
      },
      TEACHER_WEBINAR_LIVE: {
        KEY: 'TEACHER_WEBINAR_LIVE',
        NAME: 'TEACHER_WEBINAR_LIVE',
        LABEL: 'Host Webinar',
      },
      TEACHER_PROFILE: {
        KEY: 'TEACHER_PROFILE',
        NAME: 'TEACHER_PROFILE',
        LABEL: 'Profile',
      },
      TEACHER_NOTICE: {
        KEY: 'TEACHER_NOTICE',
        NAME: 'TEACHER_NOTICE',
        LABEL: 'Notice',
      },
    },
  },
};

export default routenames;
