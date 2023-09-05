import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import CardsEffect from '../novelties/CardsEffect';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Podcast = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Podcasts',
    paragraph: 'We share the wisdom from innovators here.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />

          <div className='container-xs'>
            <center>
              <div className='pb-32'>
                Interview with <b>Dr. Vidyalakshmi Chandramohan</b> of Duke Neurosurgery Department done by William Yan and Jaden Long. Talks about her research, specifically about glioblastoma. (runtime: 10:53)
              </div>
            </center>
          </div>
          {/* Add the Audio Player */}
          <div align="center">
            <audio class="player" controls preload="none">
              <source src="https://docs.google.com/uc?export=open&id=1_AS3Y1dFKUqvwMMxXTT1jUjNWTLvK-JC" type="audio/mp3">
              </source>
            </audio>
          </div>
        </div>
      </div>
    </section>
  );
}

Podcast.propTypes = propTypes;
Podcast.defaultProps = defaultProps;

export default Podcast;