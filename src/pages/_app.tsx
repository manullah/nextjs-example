import '@/styles/globals.css';
import { MantineProvider, MantineProviderProps } from '@mantine/core';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  /**
   * Query client Configuration
   */
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        keepPreviousData: true,
      },
    },
  });

  /**
   * Mantine.dev Configuration
   */
  const mantineConfig: Omit<MantineProviderProps, 'children'> = {
    theme: {
      globalStyles: () => ({
        '*, *::before, *::after': {
          fontFamily: `'Plus Jakarta Sans', sans-serif !important`,
        },
      }),
    },
    withGlobalStyles: true,
    withNormalizeCSS: true,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider {...mantineConfig}>{getLayout(<Component {...pageProps} />)}</MantineProvider>
    </QueryClientProvider>
  );
}
