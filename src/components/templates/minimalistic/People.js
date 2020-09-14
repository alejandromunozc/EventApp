import React from "react";

import "../../../assets/styles/components/templates/minimalisticTemplate/People.css";

const People = () => {
  return (
    <section id="people" className="people">
      <div className="container">
        <div className="people__list">
          <h2>People to see</h2>
          <hr />
          <div className="people__list--speaker">
            <div className="speaker__img">
              <img
                className="speaker__img--photo"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt=""
              />
            </div>
            <div className="speaker__name">
              <div className="speaker__name--title">Camila & Arjun</div>
              <div className="speaker__name--description">
                The head honchos will kick the night off with a toast. They’ll
                probably tell the hilarious story about how they thought up
                LifeSwap. And hopefully they’ll remember to tell you that
                everyone who attends the party is gets $100 in Airway Bed
                credit.
              </div>
            </div>
            <div className="speaker__position">
              <div className="speaker__position--title">Founders</div>
              <div className="speaker__position--company">LifeSwap</div>
            </div>
          </div>
          <div className="people__list--speaker">
            <div className="speaker__img">
              <img
                className="speaker__img--photo"
                src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt=""
              />
            </div>
            <div className="speaker__name">
              <div className="speaker__name--title">Robison Frederick</div>
              <div className="speaker__name--description">
                One of the most fun ways to get a peek into another person’s
                life is to experience their city like a local would -- with a
                homebase in a their space. LifeSwap takes the fun of living how
                a stranger does one step further. We’ve teamed up withthe CTO of
                Airway Bed to give you a taste of what it’s like to step into
                someone else’s shoes. We can safely say that this is the best
                giveaway of any party around.
              </div>
            </div>
            <div className="speaker__position">
              <div className="speaker__position--title">CTO</div>
              <div className="speaker__position--company">Airway</div>
            </div>
          </div>
          <div className="people__list--speaker">
            <div className="speaker__img">
              <img
                className="speaker__img--photo"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt=""
              />
            </div>
            <div className="speaker__name">
              <div className="speaker__name--title">Quinn the Irishman</div>
              <div className="speaker__name--description">
                Camila’s brother was the world’s worst DJ. His taste in music is
                awful. He once played the hokey pokey in the middle of a huge
                techno dance party. He thought it’d be funny. The only part he
                was good at was hyping up the crowd. So that’s what he does now.
              </div>
            </div>
            <div className="speaker__position">
              <div className="speaker__position--title">Event Mc</div>
              <div className="speaker__position--company">Ciaran, LLC</div>
            </div>
          </div>
          <div className="people__list--speaker">
            <div className="speaker__img">
              <img
                className="speaker__img--photo"
                src="https://images.unsplash.com/photo-1546593928-0e028d71af91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt=""
              />
            </div>
            <div className="speaker__name">
              <div className="speaker__name--title">Dj Zeny</div>
              <div className="speaker__name--description">
                He’s a master at curating tunes that suit the mood. And the mood
                of this party will be a Good Mood. A Fun Mood. A Dancey Mood.
                Zeny’s going to kill it.
              </div>
            </div>
            <div className="speaker__position">
              <div className="speaker__position--title">Spin Doctor</div>
              <div className="speaker__position--company">@Djzeny</div>
            </div>
          </div>
          <div className="people__list--speaker">
            <div className="speaker__img">
              <img
                className="speaker__img--photo"
                src="https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=735&q=80"
                alt=""
              />
            </div>
            <div className="speaker__name">
              <div className="speaker__name--title">Stiles Switch</div>
              <div className="speaker__name--description">
                Damn good Texas BBQ. Taste it once, and you’ll wish you could
                taste it every day forever and ever. We can vouch for that.
              </div>
            </div>
            <div className="speaker__position">
              <div className="speaker__position--title">Grub</div>
              <div className="speaker__position--company">
                @feedmestileswitch
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;
