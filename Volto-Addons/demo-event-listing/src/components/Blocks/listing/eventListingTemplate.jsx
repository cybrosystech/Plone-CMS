// Importing necessary dependencies
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import './eventListingTemplateStyles.css'; // Importing styles
import moment from 'moment';

// Defining functional component with destructured items object as argument
const eventListingTemplate = ({ items }) => {
  return (
    // JSX section with className set to bgcolor
    <section className="bgcolor">
      <Grid columns={3}>
        {/* First column of the grid */}

        <Grid.Column width={4}>
          <div className="text-col">
            <h2>
              {/* UniversalLink component with href set to /events */}
              <UniversalLink className="upcomingEvents"href="/events">Upcoming events</UniversalLink>
            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at orci ac turpis dignissim interdum. Suspendisse volutpat
             ultrices dui non pretium. Nam convallis, elit ac viverra facilisis, quam odio vulputate tellus, ut maximus neque ante in mauris.
            </p>
            {/* UniversalLink component with href set to /add?type=Event and className set to ui button */}
            <UniversalLink href="/add?type=Event" className="ui button">
              Add an event
            </UniversalLink>
            <br />
            {/* UniversalLink component with href set to /add?type=News Item and className set to ui button */}
            <UniversalLink href="/add?type=News Item" className="ui button">
              Add a news item
            </UniversalLink>
            <br />
            {/* UniversalLink component with href set to events and className set to ui button */}
            <UniversalLink href="events" className="ui button">
              All events
            </UniversalLink>
          </div>
        </Grid.Column>
        {/* Second column of the grid */}
        <Grid.Column width={8} className="listing-col">
          <Grid columns={2}>
            {/* Mapping through the items object */}
            {items.map((item, index) => (
              <Grid.Column key={index} width={5} className="item">
                {/* UniversalLink component with href set to @id property of the current item */}
                <UniversalLink href={item['@id']}>
                  {/* div element with className set to date, displaying formatted start date of the event */}
                  <div className="date">
                    {moment(item.start).format('MMMM D, YYYY')}
                  </div>
                  {/* div element with className set to item-body, containing a h3 element displaying the title of the event, and a p element displaying the location of the event */}
                  <div className="item-body">
                    <h3>{item.title}</h3>
                    <p className="location">{item.location}</p>
                  </div>
                </UniversalLink>
              </Grid.Column>
            ))}
          </Grid>
        </Grid.Column>
      </Grid>
    </section>
  );
};

// Exporting the eventListingTemplate component as a default
export default eventListingTemplate;
