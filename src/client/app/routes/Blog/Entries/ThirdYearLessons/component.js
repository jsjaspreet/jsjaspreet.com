import React, { PureComponent, Fragment } from 'react';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Article, P, H1, H2, Image } from '../../../../components';
import thinker from './thinker.jpg';

class BlogEntry extends PureComponent {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>JS - Blog - Three Years Later: Lessons Learned in Engineering</title>
        </Helmet>
        <Article>

          <H1>Year 3: Lessons Learned in Engineering</H1>
          <Image src={thinker}/>
          <P>
            I was recently at LA Tech Fair and many of the people I talked to were students who later reached out asking
            for advice on breaking into the industry. They reminded me of when I was in their shoes a few years ago at
            Berkeley, walking from employer booth to employer booth, wondering if anyone would take a chance on me. </P>

          <P>I've since then worked on a variety of products across teams large
            and small all over LA, and wanted to update the <Link style={{
              color: '#f92300',
              textDecoration: 'none',
              textRendering: 'optimizeLegibility'
            }} to="/blog/3-lessons-from-my-first-job">lessons
              post</Link> I wrote after my first job at YP. If you're
            just starting out in your career, I hope these thoughts help you with some of the ambiguity and imposter
            syndrome you may be experiencing and if you're a decades-of-experience expert thinking this post is about to
            be full of shit, I'd love to know your thoughts on what mattered most in your career. Here's the unfiltered
            good and bad of what I learned the past few years:
          </P>

          <H2>Team Skills > Individual Talent</H2>

          <P>
            It's easy after being assessed on your tests and projects individually through all of college to develop
            a lone wolf mindset. Even on team projects, your group disbanded after a semester/quarter and so if you had
            any sort of conflict, you could wait out until the end of the project and learn nothing about handling those
            situations. As for the work itself, industry problems don't come with a textbook you can go through alone to
            get
            better&mdash;oftentimes you'll find yourself working on a problem no one has written about before and so
            Stackoverflow won't help you there.
          </P>

          <P>
            For these reasons, it's incredibly important to shift into a team mindset early on.
          </P>

          <P>You can do this by catching your impulse to start banging out solutions immediately on your assignments.
            Instead of thinking
            about how you could quickly solve a problem alone in your own optimized way, ask yourself how others around
            you may approach the same problem, and who else you need to talk to to ensure you're delivering the best
            solution for the group as a whole. And after you've done that, go one step further and think about how the
            work you're then going to do will affect the next person's ability to ask these same questions when they
            build on your effort.
          </P>

          <P>
            Sometimes this may mean having follow-up conversations with your product manager to clarify the spec.
            Othertimes maybe striking up that conversation with your fellow engineers about finally addressing some
            backlogged tech debt that you sense will be aggravated by completing your current work.
          </P>

          <P>
            Beyond communicating with those around you currently, also consider who might come after you to work on
            something you wrote months ago. How do you prevent that person from tearing their hair out from reading your
            code? Documentation! Everything clear and in context now will not be the same a year from now, so write that
            documentation for posterity's sake.
          </P>

          <P>
            This communication is what will prevent unncecessary or wrong work being done, teach you about who the
            experts are at your company for specific domains, and also help other people know about your work so if they
            have questions related to your domain, they will know who to talk to.
          </P>

          <P>
            The best experiences I had were on teams that understood the value of open communication and were willing to
            talk through differences in approach before committing to action. On the other hand, some of the worst
            experiences were doing work and later finding out that I had duplicated the efforts of another group, or
            being handed an undocumented legacy system that another engineer wrote a year ago and was no longer with the
            company. Boooo.
          </P>

          <H2>Keep Challenging Yourself</H2>

          <P>
            While practicing all those people skills by following my advice from the previous section, you also need to
            remember to stay sharp individually. There's no professor or four year curriculum to guide you through
            changes to expect in the coming years, and so you will have to become your own guide in adapting to a fast
            paced industry.
          </P>

          <P>
            Personally, this is what has kept software engineering exciting for me. I originally started writing Java
            code for servlets in a massive data pipeline connected by Kafka, but later switched to crafting UX
            experiences in React as I saw Javascript take the software industry by storm. And after a ton of React work,
            I'm now working on scaling a backend receiving thousands of requests a second!
          </P>

          <P>
            Beyond pushing to work on a variety of interesting problems, I've continued challenging myself by completing
            online training classes, pushing myself to practice stricter engineering discipline by maintaining 100% code
            coverage, giving internal engineering talks on best practices, and attending meetups to learn how others are
            approaching their technical problems. The last part is especially important, as the longer you work with the
            same group, the larger the possibility that group herd mentality kicks in. Maintaining diversity of thought
            is how you will continue learning as an engineer.
          </P>
          <P>
            So don't get complacent with the work you're doing, continue learning outside of work or also consider
            moving to different projects / companies to get broader experiences early on. The lessons you gain will make
            you a stronger, more well rounded engineer and clue you into the kind of work that you may be happy to
            specialize on to eventually become a domain expert. As much as it may seem blissful to continue working with
            the team or codebase you've grown comfortable with, your biggest growth spurts will come from those moments
            when you switch it up to learn something new or aspire to the next level of what you already know.
          </P>

          <H2>The Dark Side: Balance your Life</H2>

          <P>
            So I've just laid out a lot of extra work beyond the easy option of clocking in from 9-5 and doing just
            enough to not get fired. As you push yourself beyond that, be sure to actually take care of yourself.
          </P>

          <P>
            On a physical level, that office job isn't going to be anything like traversing those hills every day
            getting to class, and so you'll have to manage your day to provide enough time for physical exercise. Use
            this need to organize a sports league at your company! Personally, I built out a home gym in my garage at
            home
            and doing those reps has been crucial in not devolving into an inflexible slab of wood.
          </P>

          <P>
            On a mental level, burnout is the real deal. Early on, I didn't realize that it's actually part of your
            professional responsibility to give yourself enough mental recovery so you can stay committed over the long
            term. Life is definitely not a sprint. Sure, the nature of engineering especially at startups implies long
            periods of intensity followed by brief rest, but know that if you stay above 100% working capacity long
            enough, you'll be much less than 100% for even longer.</P>
          <P>I never regretted pushing back on
            situations where I felt like I was staying above my 100% for longer than I was willing to
            sacrifice. Listen to yourself and take time when you need to or else it will be taken from you.
          </P>

          <H2>Conclusion</H2>

          <P>
            I hope you've found this post useful, if you have any questions and would like to <Link style={{
            color: '#f92300',
            textDecoration: 'none',
            textRendering: 'optimizeLegibility'
          }} to="/contact">reach out</Link>, I'm always open
            to hearing from the community. I'm looking forward to writing the 6 year post!
          </P>
        </Article>
      </Fragment>
    );
  }
}

export default BlogEntry;
