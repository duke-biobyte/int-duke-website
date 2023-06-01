import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'
import PHCanvas from './views/PHCanvas';
import { MathJaxContext } from 'better-react-mathjax';


// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import AltLayout from './layouts/AltLayout';

// Views 
import Home from './views/Home';
import AltHome from './views/AltHome';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <MathJaxContext>
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/althome" component={AltHome} layout={AltLayout} />
          <AppRoute exact path="/ph" component={PHCanvas} layout={AltLayout} />
        </Switch>
      )} />
    </MathJaxContext>
  );
}

export default App;