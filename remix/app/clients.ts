import { GraphQLClient } from "graphql-request";


export const catalogueClient = new GraphQLClient(process.env.CATALOGUE_API_URL, {
  headers: { 'X-Crystallize-Static-Auth-Token': process.env.AUTH_TOKEN } 
});

// Service API
// https://crystallize.com/learn/open-source/boilerplates/service-api
export const serviceAPIClient = new GraphQLClient(
    process.env.SERVICE_API_URL,
    {
      credentials: "include",
      mode: "cors",
    }
  );