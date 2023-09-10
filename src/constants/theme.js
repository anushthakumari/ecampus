import {extendTheme} from 'native-base';

import colors from './colors';

const theme = extendTheme({
  colors: {
    ...colors,
    info: {
      main: '#888',
    },
  },

  fontConfig: {
    Urbanist: {
      0: {
        normal: 'Urbanist-Thin',
        italic: 'Urbanist-ThinItalic',
      },
      50: {
        normal: 'Urbanist-ExtraLight',
        italic: 'Urbanist-ExtraLightItalic',
      },
      100: {
        normal: 'Urbanist-Light',
        italic: 'Urbanist-LightItalic',
      },
      200: {
        normal: 'Urbanist-Regular',
        italic: 'Urbanist-Italic',
      },
      300: {
        normal: 'Urbanist-Black',
        italic: 'Urbanist-BlackItalic',
      },
      400: {
        normal: 'Urbanist-Medium',
        italic: 'Urbanist-MediumItalic',
      },
      500: {
        normal: 'Urbanist-SemiBold',
        italic: 'Urbanist-SemiBoldItalic',
      },
      600: {
        normal: 'Urbanist-Bold',
        italic: 'Urbanist-BoldItalic',
      },
      700: {
        normal: 'Urbanist-ExtraBold',
        italic: 'Urbanist-ExtraBoldItalic',
      },
    },
  },

  fonts: {
    heading: 'Urbanist',
    body: 'Urbanist',
    mono: 'Urbanist',
  },

  components: {
    Input: {
      defaultProps: {
        fontFamily: 'body',
        size: 'xl',
      },
    },

    Text: {
      baseStyle: {
        fontFamily: 'body',
      },
    },

    Heading: {
      defaultProps: {
        fontFamily: 'body',
        fontWeight: 200,
      },
    },

    Button: {
      baseStyle: {
        rounded: 'lg',
        colorScheme: 'primary.300',
      },
      defaultProps: {
        fontFamily: 'body',
        size: 'lg',
      },
    },
  },
});

export default theme;
