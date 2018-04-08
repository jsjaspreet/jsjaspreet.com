# GraphQL Best Practices

So you may have heard of how 
[GraphQL](http://graphql.org) has made REST APIs [REST-in-peace APIs](https://medium.freecodecamp.org/rest-apis-are-rest-in-peace-apis-long-live-graphql-d412e559d8e4), 
and may have even started using GraphQL for some of your projects. I've had the pleasure of working with GraphQL at my past three jobs and have picked up
quite a few practical tips that I hope can help you transition away from REST APIs toward GraphQL. For the purposes of this guide, I'm going to 
assume you're using [Apollo](https://www.apollographql.com)'s GraphQL ecosystem, though the general ideas are applicable regardless of which GraphQL flavor you're using.  Without further ado, here are my GraphQL Best Practices:

Mock Mode
 - Mock mode has particularly been helpful for front end development. We all know the story of building out some special Mock API for testing purposes, 
 the awesome part of GraphQL is that mocks come out of the box. While I highly recommend using Storybook as your official design source of truth, 
 I have found this technique helpful for speeding up front end component development and testing in your real application with minimal friction as opposed to 
 artificially in a Storybook story.

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
