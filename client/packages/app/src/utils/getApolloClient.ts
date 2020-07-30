import { ApolloClient, InMemoryCache } from "@apollo/client";

import { GRAPH_URI } from "../config";

let client: any = null;

if (!client) {
  client = new ApolloClient({
    uri: GRAPH_URI,
    cache: new InMemoryCache(),
  });
}

export default client;
