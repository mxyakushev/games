import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Outfit',
    body: 'Outfit',
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
});
