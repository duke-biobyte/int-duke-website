import React from 'react';
// import sections
import Background from '../components/sections/Background';
import SEO from 'react-seo-component'
import ButtonBanner from '../components/sections/ButtonBanner';
import { MetaTags } from 'react-meta-tags';
import AltPage from '../components/sections/AltPage';

// To-dos:
// 1. Hover effects on the buttons
// 2. Export different components for the background on hover
// 3. 
const AltHome = () => {

  return (
    <>
      <SEO
        title="Demo"
        titleTemplate="Personal Site"
        titleSeparator=' - '
        description=''
        image='../assets/images/splash-image.png'
        pathname='intduke.com'
        siteLanguage='en'
        siteLocale='en_US'
        author='Jaden Long'
      />

      <MetaTags>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </MetaTags>


      <div style={{overflow: "hidden"}}>
        <AltPage />
      </div>

    </>
  );
}

export default AltHome;