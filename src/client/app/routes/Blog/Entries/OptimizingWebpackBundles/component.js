import React, { PureComponent, Fragment } from 'react';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import { Article, P, H1, Link, H2, Code, CodeSnippet, Image } from '../../../../components';
import slugImage from './blogImages/slug-size.png';
import slugifyImage from './blogImages/slugify-size.png';

class BlogEntry extends PureComponent {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>JS - Blog - Optimizing Webpack Bundles for Production React Apps</title>
        </Helmet>
        <Article>
          <H1>Optimizing Webpack Bundles for Production React Apps</H1>
          <P>
            In building this site, I wanted to practice techniques for limiting bloat and unnecessary network requests
            that inevitably creep into most front end projects that don't put performance first.
            Here are three techniques outside of the obvious basic gzip + CDN Caching that you may find helpful in
            making your site more efficient.
          </P>
          <H2>
            Code Split with React Router v4 and React Loadable
          </H2>
          <P>
            There's already a great <Link
            href="https://github.com/jamiebuilds/react-loadable#------------guide">guide</Link> on the
            <CodeSnippet>react-loadable</CodeSnippet> github page, but the basic idea is that you can split up your
            website into different
            bundles based on routes. This is especially important for homepages for example where you may have just a
            simple
            splash page, but your site is downloading tons of unnecessary javascript that may not be needed at all if
            for example a user doesn't login. Considering the short attention span of most users, you may lose out on
            users sticking around entirely.
            Image from the github repo showing this difference in bundling:
          </P>

          <Image
            src="https://camo.githubusercontent.com/129f34bba8ba80f8a4a1a037619b5f7076906e06/687474703a2f2f7468656a616d65736b796c652e636f6d2f696d672f72656163742d6c6f616461626c652d73706c69742d62756e646c65732e706e67"/>
          <P>
            Beyond route level code splitting, sometimes it also makes sense to split out some data specific bundle
            that you'd like to live separately from the rest of your bundles. Whenever I deploy a
            new blog post for example, it doesn't make sense to bust the cache for the
            entire <CodeSnippet>/blog</CodeSnippet> route, wouldn't it
            make more sense to only cache bust a data specific "db" bundle that contains a list of all possible blog
            entries?
            Here's a code example below from this site that takes advantage of dynamic import syntax to
            implement this data-specific chunk feature for my blog posts:
          </P>
          <Code code={`
async componentDidMount() {
  const db = await import(/* webpackChunkName: "db" */ '../../database/dao.js');
  this.setState({ db: db.default });
}`}/>
          <H2>Understand the cost of dependencies</H2>
          <P>
            Without understanding the weight of your production dependencies,
            you're bound to ship megabytes over the wire for some functionality
            that could fit in kilobytes instead. You should ideally include some sort of automated process for every PR
            such that if there is a package.json change, show what the effects are on the production build bundles
            before actually merging.
          </P>
          <P>
            One easy way of doing this is through <Link href="https://www.npmjs.com/package/webpack-bundle-analyzer">Webpack
            Bundle Analyzer</Link>
          </P>
          <P>
            Real world use case: I needed a way to create URL safe routes on this site for my blog posts based on their
            titles. Typically the way I've seen
            this done is through a slug process, so I first decided to use
            the <CodeSnippet>slug</CodeSnippet> package for this feature. When
            I went to build my site however, I was shocked at how much extra weight was
            tacked on by what I assumed was a simple library. I ended up using Webpack Bundle Analyzer to first detect
            this issue, and then swapped it out
            for a slimmer <CodeSnippet>slugify</CodeSnippet> library that worked for my simple purpose. Visuals from
            Webpack
            Bundle Analyzer below:
          </P>

          <P>
            With <CodeSnippet>slug</CodeSnippet>, the vendor bundle gzip size is 137.92 KB and visually dwarfs the rest
            of the bundles:
          </P>

          <Image src={slugImage}/>

          <P>
            With <CodeSnippet>slugify</CodeSnippet>, the vendor bundle gzip size is 88.86 KB, massive improvement:
          </P>

          <Image src={slugifyImage}/>

          <H2>Optimize your imports</H2>
          <P>
            While many libraries are adopting the
            new <CodeSnippet>sideEffects</CodeSnippet> <Link
            href="https://github.com/webpack/webpack/tree/master/examples/side-effects">webpack 4
            standard</Link> to save you the trouble, you can bullet proof yourself by importing functionality from where
            library code lives directly rather than from a top level index file import.
          </P>
          <P>
            Real world use case: This site uses a couple icons from the <CodeSnippet>react-icons</CodeSnippet> library.
            Instead of importing the
            entire library for the 2-3 icons I use,
            it's much better to import the components directly as shown below:
          </P>
          <Code code={`
import InboxIcon from 'react-icons/lib/fa/inbox';
import GithubIcon from 'react-icons/lib/fa/github';
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square';
`}/>

          <H2>Conclusion</H2>
          <P>
            I hope these techniques help you slim down your production bundles!
            If you have any other techniques you use, feel free to reach out and let me know!
          </P>
        </Article>
      </Fragment>
    );
  }
}

export default BlogEntry;
