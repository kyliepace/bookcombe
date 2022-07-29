import { GraphQLClient } from "graphql-request";

export const catalogueClient = (url: string): GraphQLClient => new GraphQLClient(url, {
  // headers: { 'X-Crystallize-Static-Auth-Token': process.env.AUTH_TOKEN } 
}
);

const serviceUrl = 'https://product-storytelling-service-api.vercel.app/api/graphql'
// Service API
// https://crystallize.com/learn/open-source/boilerplates/service-api
export const serviceAPIClient = new GraphQLClient(
    serviceUrl,
    {
      credentials: "include",
      mode: "cors",
    }
  );