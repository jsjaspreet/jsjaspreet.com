import React, { PureComponent, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Article, P, H1, H2 } from '../../../../components';

class BlogEntry extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>JS - Blog - 2016 In Review</title>
        </Helmet>
        <Article>
          <H1>2016 In Review</H1>

          <P>
            At the end of every year, I like to reflect on how that year went and how I can improve moving forward. This
            year gave me a lot to reflect on.
            There were many highlights, like returning to the startup world in a brand new role.
            But also many lowlights, the most prominent being imbalanced with basically everything outside of work.
          </P>

          <H2>New Job, New City</H2>

          <P>
            I left YP to start working at DataScience Inc in Culver City this past summer.
            Working on the ground floor for a new product is something I've always wanted.
            The opportunity allowed me to finally scratch that frontend itch I've had since I discovered React.
            And write a lot of front end code I did. From creating a data visualization framework from scratch to
            working
            on a
            brand new product that allows data scientists to collaborate better with
            cloud-hosted Jupyter notebooks, I delved deep into a world of code I hadn't
            seen in my previous backend life. In the process, I even picked up a new language
            or two (ES6 is love). I'm now confident in my abilities to see through the full process
            of taking designs from creative professionals, implementing the product code front to back,
            and seeing through the last-mile of deployment.
          </P>

          <H2>Imbalance</H2>

          <P>
            While I picked up a lot more healthier habits, I realize I need to balance time away from work better in
            2017.
            I'm proud of my meditation effort this year,
            made much easier thanks to Headspace. Also proud of consistently working out this
            year. Yet, all these self-improvement efforts came at the cost of connecting with others and in general,
            being
            stuck in my own world for most of the year. Keeping in touch with friends and being open to new
            opportunities
            are some areas of improvement to focus on this year. I'm optimistic, considering the transition with work
            and
            moving are finally behind me. It's so easy to forget that life should be an adventure much more than a march
            from one milestone to another.
          </P>

          <P>
            I'm looking forward to continue building amazing products and making new memories with friends and family.
            Let's do this 2017!
          </P>
        </Article>
      </Fragment>
    );
  }
}

export default BlogEntry;
