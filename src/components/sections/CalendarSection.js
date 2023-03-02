import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Calendar from "@ericz1803/react-google-calendar";
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const CalendarSection = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const API_KEY = "AIzaSyA5E5fHomolceNipujb1Eh-lNVUghs9G-4";

  let calendars = [
    { calendarId: "e86aa30cc79cc09d92d8a77cd5bbea7b5a3fd8a9163fb2b497489a5c0cb8adc8@group.calendar.google.com" },
    { calendarId: "dukeu.intranscription@gmail.com"}
  ];

  const sectionHeader = {
    title: 'Event Calendar',
    paragraph: 'Some interesting biology/biotech events that we collected.'
  };


  return (
    <section
      {...props}
      className={outerClasses}
    >

      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <Calendar apiKey={API_KEY} calendars={calendars} />
        </div>
      </div>

    </section>
  );

  return(
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <Calendar apiKey={API_KEY} calendars={calendars} />
        </div>
      </div>
    </section>
  )
}

CalendarSection.propTypes = propTypes;
CalendarSection.defaultProps = defaultProps;

export default CalendarSection;