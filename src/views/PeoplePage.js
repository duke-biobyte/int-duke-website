import React from 'react';
// import sections
import Background from '../components/sections/Background';
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import CurrentProjects from '../components/sections/CurrentProjects';
import Difference from '../components/sections/Difference';
import Showcase from '../components/sections/Showcase';
import PeopleTiles from '../components/sections/PeopleTiles';
import Cta from '../components/sections/Cta';
import SEO from 'react-seo-component'
import CalendarSection from '../components/sections/CalendarSection';
import Podcast from '../components/sections/Podcast';
import PHSectionIntro from '../components/sections/PHSectionIntro';


const PeoplePage = () => {

  return (
    <>
      <SEO
        title="About"
        titleTemplate="InTranscription@Duke"
        titleSeparator=' - '
        description='InTranscription@Duke is the premier biotechnology club for undergraduate students at Duke. We host biotech-related projects and regularly invite industry leaders for talks.'
        image='../assets/images/splash-image.png'
        pathname='intduke.com'
        siteLanguage='en'
        siteLocale='en_US'
        author='Jaden Long'
      />
      <Background />
      <PeopleTiles />
    </>
  );
}

export default PeoplePage;