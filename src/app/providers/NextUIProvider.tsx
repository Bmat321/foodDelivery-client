// app/providers.tsx
"use client";

import { graphClient } from "@/src/graphql/gql.setup";
import { ApolloProvider } from "@apollo/client";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={graphClient}>
      <SessionProvider>
        <NextUIProvider>
          <NextThemeProvider defaultTheme="dark" attribute="class">
            {children}
          </NextThemeProvider>
        </NextUIProvider>
      </SessionProvider>
    </ApolloProvider>
  );
}
