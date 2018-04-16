import React, { PureComponent, Fragment } from 'react';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import { Article, P, H1, H2, Image } from '../../../../components';

class BlogEntry extends PureComponent {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>JS - Blog - Reflections on Cal</title>
        </Helmet>
        <Article>
          <H1>Reflections on Cal</H1>
          <Image src="https://s3-us-west-2.amazonaws.com/jaspreetsingh.me/images/berkeley.jpg"/>
          <P>
            Let me be real, I didn't cheer at first when I saw my acceptance to Cal.
          </P>

          <P>
            I was disappointed learning that I had been accepted as a Spring admit rather than in the Fall, and had it
            in my mind for a while that I'd be attending UCLA.
          </P>

          <P>
            On a leap of faith and a moment of shutting off my ego (I need more of these moments), I chose Cal and
            looking back, it definitely ended up being one of the best decisions I've ever made. Here's a handful of
            lessons that stood out to me in my college experience:
          </P>

          <H2>Accept the Challenge</H2>

          <P>
            Honestly, I was afraid. The admit day orientations at Cal were rough around the edges and filled with
            intimidating smart people that I thought would run circles around me in class (they did), while UCLA's
            polished presentation felt a lot more familiar.
            I still remember the worn out, almost broken class seats at Cal and realizing "Oh shit these guys actually
            work hard around here".
          </P>

          <P>
            I wanted to be a part of that.
          </P>

          <P>
            In general, if you never push yourself outside of your comfort zone, how are you really going to know what
            you're truly capable of? UCLA was only a half hour drive away from my home town and I know the temptation of
            running home when things got rough in college would be too difficult for me to overcome. I knew if I really
            wanted to grow, I'd have to throw myself in a new environment and learn to thrive without the safety net of
            home.
          </P>

          <P>
            This was definitely the right decision looking back, when I finally received my diploma I felt much more
            proud
            of the accomplishment. Key takeaway: Don't underestimate yourself, take the harder route. The reward in the
            end will be that much better.
          </P>

          <H2>Say Hello</H2>

          <P>
            You never know how the people you interact with will come back to help you later on.
            One day while I was a summer intern at YP, I decided to start a random conversation with someone in the
            break
            room. This person ended up being the Executive Director of Talent Acquisition, and that initial conversation
            set off a series of events that ultimately concluded in my first job offer as a full time Software Engineer.
            That happened from some small talk by the water cooler! Being interested and open to the world around you
            sounds like basic advice, but we're so often locked up in our own little problems, we don't notice that
            there's help all around us if we're willing to ask for it.
          </P>

          <H2>Try Something New</H2>

          <P>
            Every semester of college was an opportunity to try something completely new.
            In retrospect, I wish I had taken even more advantages of this (It's not so easy to learn archery at work
            unfortunately). My favorite memories at Cal were saying yes to trying something new. You may never know that
            you love playing Catan if you dismiss board game night as some nerd gathering, or that you're a good public
            speaker if you never get up in front of an audience and lend them your voice.
          </P>
        </Article>
        <
        /Fragment>
        );
        }
        }

        export default BlogEntry;
