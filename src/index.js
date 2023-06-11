import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

// For scrolling to top on click
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import App from './App';
import * as serviceWorker from './serviceWorker';

//import './App.css';
import './assets/scss/style.scss';

const history = createBrowserHistory();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return null;
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Router history={history}>
    <ScrollToTop />
    <App />
  </Router>
  )

// ReactDOM.render(
//   <Router history={history}>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
