import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import CurrentProjects from '../components/sections/CurrentProjects';
import Difference from '../components/sections/Difference';
import Showcase from '../components/sections/Showcase';
import PeopleTiles from '../components/sections/PeopleTiles';
import Cta from '../components/sections/Cta';
import SEO from 'react-seo-component'

const Home = () => {

  return (
    <>
      <SEO
        title="Home"
        titleTemplate="InTranscription@Duke"
        titleSeparator=' - '
        description='InTranscription@Duke is the premier biotechnology club for undergraduate students at Duke. We host biotech-related projects and regularly invite industry leaders for talks.'
        image='../assets/images/logo.svg'
        pathname='intduke.com'
        siteLanguage='en'
        siteLocale='en_US'
        author='Jaden Long'
      />
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Difference invertMobile topDivider imageFill className="illustration-section-03" />
      <Showcase invertMobile topDivider imageFill className="illustration-section-03" />
      <CurrentProjects topDivider />
      {/* <People invertMobile topDivider imageFill className="illustration-section-03" /> */}
      <PeopleTiles/>
      <Cta split />
    </>
  );
}

export default Home;