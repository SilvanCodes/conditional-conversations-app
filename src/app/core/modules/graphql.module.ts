import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache, split } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const hostPath = `${window.location.hostname}:8080/graphql`; // <-- add the URL of the GraphQL server here

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  // Create an http link:
  const http = httpLink.create({
    uri: `http://${hostPath}`,
  });

  // Create a WebSocket link:
  const ws = new WebSocketLink({
    uri: `ws://${hostPath}`,
    options: {
      reconnect: true,
    },
  });

  // using the ability to split links, you can send data to each link
  // depending on what kind of operation is being sent
  const link = split(
    // split based on operation type
    ({ query }) => {
      const mainDefinition = getMainDefinition(query);
      return (
        mainDefinition.kind === 'OperationDefinition' &&
        mainDefinition.operation === 'subscription'
      );
    },
    ws,
    http
  );

  return {
    link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
