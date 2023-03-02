import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import SectionSubheader from './partials/SectionSubheader';
import HeadshotTiles from './partials/HeadshotTiles';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const PeopleTiles = ({
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

  const sectionHeader = {
    title: 'People',
    paragraph: ''
  };

  // Headshot tiles
  const facultyLead = [
    { name: 'Eric Spana',
      title: 'Faculty Lead',
      photo: require('../../assets/images/people/cropped/spana.png') },
  ];

  const board = [
    { name: 'Yuxi (Jaden) Long',
      title: 'President',
      photo: require('../../assets/images/people/cropped/jaden.png') },

    { name: 'Holly Zhuang',
      title: 'Co-President, Project 3 Lead',
      photo: require('../../assets/images/people/cropped/holly.png') },
  ]

  const leadAndMembers = [
    { name: 'Jose Chavez',
      title: 'Project 1 Lead',
      photo: require('../../assets/images/people/cropped/jose.png') },

    { name: 'Daniel Lee',
      title: 'Project 1 Lead',
      photo: require('../../assets/images/people/cropped/daniel.png') },

    { name: 'James Yang',
      title: 'Project 2 Lead',
      photo: require('../../assets/images/people/cropped/james.png') },

    { name: 'Jeffery Tan',
      title: 'Publicity Officer, Project 2 Member',
      photo: require('../../assets/images/people/cropped/jeffery.png') },

    { name: 'William Yan',
      title: 'Project 2 Lead',
      photo: require('../../assets/images/people/cropped/william.png') },

    { name: 'Annie Qin',
      title: 'Project 3 Lead',
      photo: require('../../assets/images/people/cropped/annie.png') },

    { name: 'Sid Ghanta',
      title: 'Project 2 Member',
      photo: require('../../assets/images/people/cropped/sid.png') },

    { name: 'Mike Bennett',
      title: 'Project 2 Member',
      photo: require('../../assets/images/people/cropped/mike.png') },

    { name: 'Matthew Ahlers',
      title: 'Project 3 Member',
      photo: require('../../assets/images/people/cropped/matthew.png') },

    { name: 'Abby Zaroff',
      title: 'Project 3 Member',
      photo: require('../../assets/images/people/cropped/abby.png') },

  ]

  const specialThanks = [

    { name: 'Andrew Longenecker',
      title: 'SVP of Business Development at Probably Genetic',
      photo: require('../../assets/images/people/cropped/longenecker.png') },

    { name: 'Tian-Lai (Leo) Zang',
      title: 'DKU Ambassador',
      photo: require('../../assets/images/people/cropped/leo.png') },

  ]

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />

          <SectionSubheader data={{title: 'Faculty'}} className="center-content" />
          <HeadshotTiles tilesClasses={tilesClasses} people={facultyLead}></HeadshotTiles>

          <SectionSubheader data={{title: 'Board'}} className="center-content" />
          <HeadshotTiles tilesClasses={tilesClasses} people={board}></HeadshotTiles>

          <SectionSubheader data={{title: 'Project Leads and Members'}} className="center-content" />
          <HeadshotTiles tilesClasses={tilesClasses} people={leadAndMembers}></HeadshotTiles>

          <SectionSubheader data={{title: 'Special Thanks'}} className="center-content" />
          <HeadshotTiles tilesClasses={tilesClasses} people={specialThanks}></HeadshotTiles>

        </div>

        <hr></hr>
      </div>
    </section>
  );
}

PeopleTiles.propTypes = propTypes;
PeopleTiles.defaultProps = defaultProps;

export default PeopleTiles;