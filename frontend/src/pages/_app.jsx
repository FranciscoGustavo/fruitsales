import { ApolloProvider } from '@apollo/client';
import { ThemeProvider  } from 'styled-components';
import { useApollo } from '../lib/apolloClient';
import { GlobalStyles, theme } from '../utils';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider> 
    </ApolloProvider>
  );
}

export default MyApp;
