"use client";

import { Provider, cacheExchange, createClient, fetchExchange } from "urql";

const client = createClient({
  url: `https://gateway.thegraph.com/api/${process.env.NEXT_PUBLIC_API_KEY}/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV`,
  exchanges: [cacheExchange, fetchExchange],
});

export default function Client({ children }: { children: React.ReactNode }) {
  return <Provider value={client}>{children}</Provider>;
}
