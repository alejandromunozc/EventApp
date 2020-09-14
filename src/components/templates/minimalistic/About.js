import React from "react";

import "../../../assets/styles/components/templates/minimalisticTemplate/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__info">
          <div className="about__cover">
            <img
              src="https://images.unsplash.com/photo-1461280360983-bd93eaa5051b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
          </div>
          <div className="about__content">
            <div className="about__content--title">About</div>
            <h2>Why you should care</h2>
            <hr />
            <p>
              Introducing LifeSwap. An app that connects you to people who are
              willing to trade lives. For real.
            </p>
            <p>
              Ever wonder what it’d be like to be a music teacher in Nashville?
              A children’s book illustrator in Brooklyn? A human rights activist
              in DC?
            </p>
            <p>
              LifeSwap is a brand new company founded by a former Couchsurfing
              engineer and Facebook creative director. It takes the idea of
              authentic travel to a new (Freaky Friday-esque) level.
            </p>
            <p>
              It’s a social network that facilitates real LifeSwaps: you go to
              someone’s city, live in their home, hang with their friends and
              family, do their jobs, attend their events and activities. Yes,
              it’s totally intense… and it’s totally thrilling. Call us crazy,
              but we don’t think the best memories are made in the comfort zone.
            </p>
            <p>
              Come check us out at the party (and sign up for a LifeSwap account
              at one of our stations while you’re at it). Bottom line: it’s a
              startup launch. Good times will be had by all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
