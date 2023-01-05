import { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import { ErrorBoundary, ErrorBoundaryFallback } from 'shared';
import '@fontsource/outfit';

const theme = extendTheme({
  fonts: {
    heading: 'Outfit',
    body: 'Outfit',
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
});

export const AllProviders = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme} resetCSS>
        <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} /> {children}
        </ErrorBoundary>
      </ChakraProvider>
    </BrowserRouter>
  );
};
