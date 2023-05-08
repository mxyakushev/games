import { PropsWithChildren, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { ErrorBoundary, ErrorBoundaryFallback } from 'components';
import '@fontsource/outfit';
import { theme } from '../theme';

export const AllProviders = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <StrictMode>
      <BrowserRouter>
        <ChakraProvider theme={theme} resetCSS>
          <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} /> {children}
          </ErrorBoundary>
        </ChakraProvider>
      </BrowserRouter>
    </StrictMode>
  );
};
