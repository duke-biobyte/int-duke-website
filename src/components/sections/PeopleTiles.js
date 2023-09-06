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
      photo: require('../../assets/images/people/cropped/holly.png'), 
      about: "Hey! My name is Holly, and I am from Princeton, New Jersey. I was born in Guangzhou, China. I am a junior majoring in CS + Bio. Over the past year, I’ve had the privilege of working with Nucleate Dojo as their partnerships and sponsorships associate. This experience has allowed me to connect with organizations like Nucleate and Pillar VC. One standout revelation has been the increasing number of opportunities for undergrads like us to make a significant mark in biotech, especially with the rise of LLMs, and this is the major reason why I tried to spearhead Duke BioByte’s Bio + AI initiative. I am now working on a project that aims to help daily people explore their personal DNA data in an accessible and private manner leveraging GPT for professional summaries and embeddings from the data collected for visualizations. I enjoy photography and work for the Duke Yearbook! In my free time, I TRY to work out everyday and play a lot of tennis."},
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

    { name: 'Matthew Ahlers',
      title: 'Project 3 Member',
      photo: require('../../assets/images/people/cropped/matthew.png') },

    { name: 'Abby Zaroff',
      title: 'Project 3 Member',
      photo: require('../../assets/images/people/cropped/abby.png') },
     
      ]

const bioaiTeam = [
    { name: 'Srikar Kavirayuni',
      title: '',
      photo: require('../../assets/images/people/cropped/srikar.png'), 
      about: "Hello! I'm Srikar Kavirayuni from the class of 2025, majoring in Biomedical Engineering and Computer Science with a minor in Computational Biology. At Duke, with a keen interest in Bio/AI Health Innovation, I started research under Dr. Pranam Chatterjee's guidance. There, I'm currently working on designing biomolecules using novel generative AI methods and creating various streamlined algorithmic pipelines for cell engineering. Previously, I've also researched in the Big Ideas Lab, using predictive AI approaches for various cardiovascular health-related tasks to improve wearable devices. Beyond academics, I balance my time with tennis and lend my voice to Duke Sangeet and Duke Deewana, leading South Asian vocal groups on campus. Thanks to Duke's unparalleled opportunities, my vision for the future has been sharpened, pushing me further into the realms of AI in synthetic biology, bioelectronics, and personalized healthcare." },

    { name: 'Rishab Pulugurta',
      title: '',
      photo: require('../../assets/images/people/cropped/rishab.png'),
      about: "Hey this is Rishab!  I am a current junior at Duke University pursuing a double major in Biology and Computer Science, working to find potential machine learning applications in the biotech industry! Right now, I am heavily involved in projects related to using deep learning techniques for optimizing protein engineering and drug discovery. Outside of school, I love to work out, dance, travel, and play basketball." },

    { name: 'Sasha Bacot',
      title: '',
      photo: require('../../assets/images/people/cropped/sasha.png'),
      about: "I am a part of the class of 2025, double majoring in Computer Science and Biology with a concentration in genomics. I am an undergraduate researcher in Dr. Joel Meyer’s lab and a scholar in Marine Medicine in the Nicholas School of the Environment, where I investigate ultraviolet-induced mtDNA mutagenesis. I’ve also worked as an REU researcher at Boston University, where I developed a pipeline to detect Poly(A) tails in paired end short-read RNA seq data from human hippocampus samples. My experiences at Duke and beyond have given me a passion for bioinformatic tool development and biotechnology, fields I did not anticipate on entering before coming to Duke! Outside of academics, I love collecting bumper stickers, watching too much TikTok, and reading sci-fi." },

    { name: 'Mira Khazanchi',
      title: '',
      photo: require('../../assets/images/people/cropped/mira.png'),
      about: "Hi! My name is Mira Khazanchi, and I am from Sarasota, FL. Currently, I’m a senior at Duke majoring in Neuroscience with a minor in Psychology. Some of my hobbies include photography, making Spotify playlists, going to the gym, and crocheting. I am a huge dog lover and volunteer at the Duke Canine Cognition Center. As for my interest in this club, I am very intrigued by the intersection of neuroscience, technology, and healthcare. Specifically, I would like to learn more about BCI (brain-computer interface). I’m super excited to meet other like-minded people who are also interested in biotech and to have a shared space at Duke to gain/provide knowledge about the field." },
    
    { name: 'Ayush Jain',
      title: '',
      photo: require('../../assets/images/people/cropped/ayush.png'), },

    { name: 'Pranay Vure',
      title: '',
      photo: require('../../assets/images/people/cropped/pranay.png'), },
  ]

const headsOfTech = [

    { name: 'Mason Wu',
      title: '',
      photo: require('../../assets/images/people/cropped/mason.png'), 
      about: "Hello! My name is Mason and I am a member of the Class of 2026. I am from Xi’an, China, and I plan to pursue a double major in Computer Science and Biology. While I am still exploring potential research opportunities, I have a strong interest in the field of computational biology. In my free time, I enjoy photography, gaming, and traveling to new places." },

    { name: 'Bowen Jiang',
      title: '',
      photo: require('../../assets/images/people/cropped/bowen.png'), 
      about: "Hey, this is Bowen Jiang! I am a freshman at Duke, intended to pursue a double major in BME and CS. I am fascinated by the ways of how recent innovations in AI and machine learning can influence biological research. Out side of school, I enjoy playing the piano and hitting some tennis balls with friends." },
  ]

  const specialThanks = [

    { name: 'Andrew Longenecker',
      title: 'SVP of Business Development at Probably Genetic',
      photo: require('../../assets/images/people/cropped/longenecker.png') },

    { name: 'Tian-Lai (Leo) Zang',
      title: 'DKU Ambassador',
      photo: require('../../assets/images/people/cropped/leo.png') },

  ]

  const alumni = [

    { name: 'Mike Bennett',
      title: 'Class of 2023',
      photo: require('../../assets/images/people/cropped/mike.png') },

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
	
	        <SectionSubheader data={{title: 'Bio + AI Team'}} className="center-content" />
          <HeadshotTiles tilesClasses={tilesClasses} people={bioaiTeam}></HeadshotTiles>

          <SectionSubheader data={{title: 'Project Leads and Members'}} className="center-content" />
          <HeadshotTiles tilesClasses={tilesClasses} people={leadAndMembers}></HeadshotTiles>

	        <SectionSubheader data={{title: 'Heads of Tech'}} className="center-content" />
          <HeadshotTiles tilesClasses={tilesClasses} people={headsOfTech}></HeadshotTiles>

          <SectionSubheader data={{title: 'Special Thanks'}} className="center-content" />
          <HeadshotTiles tilesClasses={tilesClasses} people={specialThanks}></HeadshotTiles>

          <SectionSubheader data={{title: 'Alumni'}} className="center-content" />
          <HeadshotTiles tilesClasses={tilesClasses} people={alumni}></HeadshotTiles>

        </div>
      </div>
    </section>
  );
}

PeopleTiles.propTypes = propTypes;
PeopleTiles.defaultProps = defaultProps;

export default PeopleTiles;
