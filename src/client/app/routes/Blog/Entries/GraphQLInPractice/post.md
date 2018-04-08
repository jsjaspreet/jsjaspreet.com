# GraphQL Best Practices

So you may have heard of how 
[GraphQL](http://graphql.org) has made REST APIs [REST-in-peace APIs](https://medium.freecodecamp.org/rest-apis-are-rest-in-peace-apis-long-live-graphql-d412e559d8e4), 
and even started using GraphQL for some of your projects. I've had the pleasure of working with GraphQL at my past three jobs and have picked up
quite a few practical tips that can help you transition away from REST APIs toward GraphQL. For the purposes of this guide, I'm going to 
assume you're using [Apollo](https://www.apollographql.com)'s GraphQL ecosystem, though the general ideas are applicable regardless of which GraphQL flavor you're using.  Without further ado, here are my GraphQL Best Practices:

### Mock Mode

We all know the story of needing to build out some one-off Mock API. As easy as Express.js makes it to quickly wire up a dummy REST server, 
GraphQL comes with mocking [out of the box](https://www.apollographql.com/docs/graphql-tools/mocking.html) using your existing schema in a handful of lines:
 
 ```javascript
// mockSchema.js
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import typeDefs from './typeDefs'

// Create a schema with no resolvers
const schema = makeExecutableSchema({
   typeDefs
});
 
// Add mock functions to your schema
addMockFunctionsToSchema({
   schema,
});

export default schema;
```
You might be wondering what GraphQL is actually resolving your types with if we haven't provided any resolvers. Since GraphQL is typed,
it uses the scalar definitions for your type fields to automatically respond with correctly typed data. If you'd like more manual control of your mocks 
(so they output real data and not just UUID looking strings for example), you can also provide a `mocks` object option to the `addMockFunctionsToSchema` call containing your own mocks. 

This technique has been essential for front end development&mdash;quickly seeing how my 
components look on my client side apps without needing to spin up actual backend servers in 
development greatly cuts down iteration time. Mocking is also really useful for testing, having your server able to output real data without needing a backing resolver / db is the kind of decoupling that makes for developer-happy architectures.


Automate Your Documentation
 - Use graphql-docs to keep public backend documentation always up to date with minimal effort. 
 - A more advanced solution may even be to offer a mock version of GraphiQL running (another way to leverage benefits of implementing a real mock mode).
 
Public Access through Whitelisting

- While GraphQL's flexibility is powerful, an unprotected public GraphQL endpoint is susceptible to 
easy DDoS attacks through both recursive deep queries (Imagine a parent child relationship in your GraphQL schema which recurses `parent { child { parent ... } }` 
with a naive resolver implementation) or wide queries which request every top level field. 

A single such large query can touch all of your backend systems if you do not lock down access patterns or have another 
way of detecting improper access (perhaps by limiting depth of subfields, limiting total number of top level fields in a single GraphQL request, intentionally designing your schema as a DAG).

Caching
 - Apollo Server provides basic caching out of the box through schema annotations. These annotations can be applied on
  a type or even as granularly as an individual field on a type. Similar to how in Redux you can hydrate your store, you can hydrate your
  graphql cache and keep network requests at a minimal by using this easy feature.
  
I hope you've found these techniques to be useful in thinking about how GraphQL can fit in your workflow. There are other techniques that you may also find helpful, such as using Facebook's `data-loader` for efficient database access or splitting up a monolithic GraphQL API into smaller GraphQL microservices that are combined through schema-stitching. I've used nearly all of these techniques in production so if you have any questions, feel free to reach out. Thanks for reading, now go code those GraphQL APIs!
