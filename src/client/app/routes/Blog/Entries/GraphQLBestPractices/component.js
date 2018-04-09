import React, { PureComponent, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Article, P, H1, Link, H2, Code, CodeSnippet, Image } from '../../../../components';
import graphdocImage from './blogImages/graphdoc.png';
import graphiqlImage from './blogImages/graphiql.png';
import graphqlLogoImage from './blogImages/graphql-logo.png';

class BlogEntry extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>JS - Blog - GraphQL Best Practices</title>
        </Helmet>
        <Article>
          <H1>GraphQL Best Practices</H1>
          <Image src={graphqlLogoImage}/>
          <P>
            So you may have heard of how <Link href="http://graphql.org">GraphQL</Link> has made REST APIs <Link
            href="https://medium.freecodecamp.org/rest-apis-are-rest-in-peace-apis-long-live-graphql-d412e559d8e4">REST-in-peace
            APIs</Link>,
            and even started using GraphQL for some of your projects. I've had the pleasure of working with GraphQL
            professionally for
            the past two years and have picked up
            a few practical tips that can help you transition away from REST APIs toward GraphQL. For the purposes
            of this guide, I'm going to
            assume you're using <Link href="https://www.apollographql.com">Apollo's GraphQL ecosystem</Link>, though the
            general ideas are applicable regardless of which GraphQL flavor you're using.
          </P>

          <P>
            Let's get to it, here are my GraphQL Best Practices:
          </P>

          <H2>Use Mock Mode</H2>
          <P>
            We all know the story of needing to build out a one-off Mock API for some testing purpose. As easy as
            Express.js makes it to quickly wire up a dummy REST server,
            GraphQL comes with mocking <Link href="https://www.apollographql.com/docs/graphql-tools/mocking.html">out of
            the box</Link> using your existing schema in a handful of lines:
          </P>

          <Code code={`
// mockSchema.js
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import typeDefs from './typeDefs';

// Create a schema with no resolvers
const schema = makeExecutableSchema({
   typeDefs
});

// Add mock functions to your schema
addMockFunctionsToSchema({
   schema,
});

// Export a fully functioning schema that resolves correctly typed data
export default schema;
`}/>

          <P>
            You might be wondering how GraphQL is actually resolving your types if we haven't provided any resolvers.
            Since all GraphQL fields ultimately resolve to Scalar types, GraphQL uses these type definitions to
            automatically respond with correctly typed data. If you'd like more manual control of your mocks
            (so they output real data and not just UUID looking strings for example), you can also provide
            a <CodeSnippet>mocks</CodeSnippet> <Link
            href="https://www.apollographql.com/docs/graphql-tools/mocking.html#addMockFunctionsToSchema">object
            option</Link> to the <CodeSnippet>addMockFunctionsToSchema</CodeSnippet> call containing your own mocks.
          </P>

          <P>
            This technique has been essential for front end development&mdash;quickly seeing how my
            components behave on my client side apps without needing to spin up actual backend servers has greatly cut
            down iteration time.
            Mocking is also really useful for integration testing when you want to make sure your API is responding
            appropriately in the context of a larger test.
          </P>

          <P>
            In general, having your server output real data without needing a backing resolver / db is the kind of
            decoupling that makes for developer-happy architectures.
          </P>

          <H2> Automate Your Documentation</H2>

          <P>
            With a little Continuous Integration magic and some awesome library support, GraphQL makes implementing
            up-to-date easy-to-share API documentation a breeze.
          </P>

          <Image src={graphiqlImage}/>

          <P>
            The batteries-included Documentation Explorer in GraphiQL is already a massive upgrade from most
            undocumented REST API's in the wild. You can turbo-charge this feature however by taking advantage of
            the <Link href="https://www.apollographql.com/docs/graphql-tools/generate-schema.html#descriptions">Markdown
            description support</Link> available
            for your entire GraphQL Schema. This allows you to add helpful Markdown-enabled descriptions for fields
            and even arguments that may not be immediately clear by their names, as well as mark certain fields as
            deprecated so other developers know not to use them.
            In practice, I've found it best to include documentation as part of a PR check so you can keep your backend
            continuously documented over time.
          </P>

          <P>
            So you now have this awesome body of documentation for your backend, how do we actually share this? Enter
            <CodeSnippet>graphdoc</CodeSnippet>! <Link href="https://github.com/2fd/graphdoc">Graphdoc</Link> is a
            package that generates
            a static documentation site based on your GraphQL schema. If you tie this into
            your CI/CD pipeline, you can have a setup such that merges to master automatically trigger an internal
            facing deployment of the site generated by <CodeSnippet>graphdoc</CodeSnippet>.
            This results in an always up-to-date link that anyone in your company can use to figure out what data is
            available and exactly what Query to write to get that data.
            Here's an <Link href="https://2fd.github.io/graphdoc/github">example with the public Github GraphQL
            schema</Link>:
          </P>

          <Image src={graphdocImage}/>

          <P>
            Here's also a <Link href="https://gist.github.com/jsjaspreet/9cbe9b8dd629c0d1b8c05ddd00b80c63">github
            gist</Link> showing how you
            can integrate this workflow in your project.
          </P>

          <P>
            So the next time someone asks you "How do I get that data?", tell them to RTFM with a link to your deployed
            graphql docs.
          </P>

          <H2>Control Public Access through Whitelisting</H2>

          <P>
            After you're done building your app, you may wonder if there are any steps to take before taking your
            GraphQL
            API public.
          </P>

          <P>
            While GraphQL's flexibility makes development a breeze by allowing you to query for exactly the data you
            need for your client app,
            an unprotected public GraphQL endpoint is susceptible to
            easy DDoS attacks through both recursive deep queries (imagine a parent child relationship in your GraphQL
            schema which recurses <CodeSnippet>{'parent { child { parent ... } }'}</CodeSnippet>
            with a naive resolver implementation) or wide queries which request every top level field. A single such
            client request can trigger hundreds of underlying backend requests if you do not lock down access patterns
            or have another way of detecting improper access (perhaps by limiting depth of subfields, limiting total
            number of top level fields in a single GraphQL request, intentionally designing your schema as a DAG).
          </P>

          <P>
            One way of locking down requests is through <Link
            href="https://github.com/apollographql/apollo-server#whitelisting">whitelisting
            operations</Link> for your public facing GraphQL API.
            This Apollo feature allows you to declare in advanced what queries/mutation are acceptably resolved by your
            GraphQL Server, while rejecting all other arbitrary operations. For client side apps, this does mean
            figuring out what queries/mutations you'll need in advanced, but there are libraries such as <Link
            href="https://github.com/apollographql/persistgraphql">PersistGraphQL</Link> that can help you extract your
            queries from your client-side apps automatically.
          </P>

          <P>
            It's interesting to note that whitelisting is equivalent to declaring the routes you'd expose with a
            traditional REST API.
          </P>

          <H2>Conclusion</H2>

          <P>
            I hope you've found these techniques to be useful in thinking about how you can take your GraphQL usage to
            the
            next level, or possibly consider introducing GraphQL in your stack for your next project.
            There are other techniques that you may also find helpful, such as using
            Facebook's <CodeSnippet>data-loader</CodeSnippet> for <Link href="https://github.com/facebook/dataloader">efficient
            database
            access</Link> or splitting up a monolithic GraphQL API into smaller
            GraphQL microservices that are combined through <Link
            href="https://www.apollographql.com/docs/graphql-tools/schema-stitching.html">schema-stitching</Link>.
            I've used nearly all of these techniques in production so if you have any questions, feel free to reach out.
          </P>

          <P>
            For me personally, the thing that astounds me about GraphQL isn't just the awesome technical solutions it
            enables, but also the organizational impact of a more decoupled environment where teams can develop
            independently of one another and focus more on upholding public contracts rather than knowing too much about
            internal implementations.
          </P>

          <P>
            Thanks for reading, now go code those GraphQL APIs!
          </P>
        </Article>
      </Fragment>
    );
  }
}

export default BlogEntry;
