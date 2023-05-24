import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import SectionSubHeader from './partials/SectionSubheader'
import Image from '../elements/Image';
// import GalleryTest from '../novelties/three/GalleryTest';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Showcase = ({
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
    title: 'Public Event Showcase',
    paragraph: 'These are all events that we have hosted or plan to host.'
  };

  const pastEventsSubheader = {
    title: 'Past Public Events',
    paragraph: ''
  }

  const futureEventsSubheader = {
    title: 'Planned Public Events',
    paragraph: ''
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />

          <SectionSubHeader data={pastEventsSubheader} className="center-content" />

          <div className={splitClasses}>

            <div className="split-item">
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/events/eoin.png')}
                  alt="Speaker Event with Eoin McDonnell, CEO of Tavros Therapeutics"
                  width={528}
                  height={396} />
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/events/mba.png')}
                  alt="Graduate Student Panel: A fireside chat with Aoying Zhang and Leyao Shen"
                  width={528}
                  height={396} />
              </div>

            </div>

          </div>


          <div className={splitClasses}>

            <div className="split-item">
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/events/boba.png')}
                  alt="Boba social"
                  width={528}
                  height={396} />
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/events/ben.png')}
                  alt="Speaker event with Ben Logsdon, VP of Computational Biology at Cajal Neuroscience"
                  width={528}
                  height={396} />
              </div>

            </div>
          </div>

          <SectionSubHeader data={futureEventsSubheader} className="center-content" />


          <div className={splitClasses}>

            <div className="split-item">
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/events/emmanuel.png')}
                  alt="Speaker event with Emmanuel Noutahi, Head of Platforms at Valence Discovery"
                  width={528}
                  height={396} />
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/events/doherty.png')}
                  alt="Speaker event with Michael Quinn Doherty, Director of Formulation Development at MedPharm US"
                  width={528}
                  height={396} />
              </div>

            </div>
          </div>

        </div>

        {/* <div style={{aspectRatio: "2/1"}}>
          <GalleryTest />
        </div> */}

      </div>
    </section>
  );
}

Showcase.propTypes = propTypes;
Showcase.defaultProps = defaultProps;

export default Showcase;