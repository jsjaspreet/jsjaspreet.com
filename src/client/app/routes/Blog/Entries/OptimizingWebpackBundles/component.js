import React, { PureComponent, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Article, P, H1, Link, H2 } from '../../../../components';

class BlogEntry extends PureComponent {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>JS - Blog</title>
        </Helmet>
        <Article>
          <H1>3 Lessons from my First Job</H1>
          <P>My first full-time job was working as a Software Engineer at YP and I'd like to share three lessons that
            stood out the most during my time there. From starting out as a clueless intern who had trouble getting
            Tomcat set up in Eclipse to being a strong contributor on my team, I developed quickly and saw lessons from
            books like Mythical Man Month lived out in a real development environment.</P>
          <H2>Push for coding-heavy assignments</H2>
          <P>
            Live the <Link href="https://blog.codinghorror.com/quantity-always-trumps-quality">Quantity Over Quality
            Coding Horror blog post</Link>. I learned the most from taking on heavy coding assignments that required me
            to learn new technology and write a lot of code, or read a lot of legacy code from older yet critical
            projects other team members wouldn’t want to touch with a ten-foot pole. I’m sure you have some legacy
            project floating around at your workplace with a similar story--be the person to accept the responsibility
            of maintaining that monster. Not only will others thank you for accepting responsibility over something
            important where maybe the previous maintainer left the company, but you’ll also learn a lot from studying
            the design of others and thinking about how to improve upon it. Even better if it involves technology you’re
            unfamiliar with, you’ll leave with not only a better understanding of system design as a whole but maybe
            even learn a new programming language/paradigm. I believe this was the most important factor in my growth.
            Writing a lot of code in the beginning is to kick start your 10,000 hour journey and start developing your
            heuristics about what good software looks like.
          </P>
          <H2>Invest in testable design</H2>
          <P>Write your code in a QA-friendly way, for example by modularizing your code into separate ideally stateless
            functions. This will go a long way in easing refactoring time later on and being adaptable to changing
            product requirements. The confidence of being able to make code changes and validate them through a thorough
            test-suite is the secret sauce to rapid iteration. Thinking about test cases will also help other developers
            pick up on your projects if you ever have to leave the company, as they can make changes confidently by
            understanding the test cases you’ve written.</P>
          <H2>Dream wildly with your 20% Time</H2>
          <P>While I was hired for primarily a backend role at YP, I was able to expand my breadth of knowledge greatly
            by taking on side projects outside my expected expertise. My favorite side project was overhauling our
            deployment process which previously consisted of dropping WAR files into special production VMs, to an
            automated process that utilized Docker and Mesos for containerized deployments. This unified our deployment
            process across multiple applications, made both dev and QA teams more confident in their releases, and I
            also learned a ton along the way. Even if you don’t work on side projects outside your primary role, just
            tinkering with new technologies that all the cool folks at HN talk about and seeing whether they might be
            useful for what you do is a great way to keep up to date with our rapidly evolving field.</P>
        </Article>
      </Fragment>
    );
  }
}

export default BlogEntry;
