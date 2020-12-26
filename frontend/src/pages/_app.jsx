import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          border: 0;
          box-sizing: border-box;
          outline: none;
          font-family: 'Lato', sans-serif;
          font-size: 14px;
          font-weight: normal;
        }
      `}</style>
    </ApolloProvider>
  );
}

export default MyApp;
