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

const Difference = ({
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
    title: 'You can make a difference.',
    paragraph: 'Our project-based organization means that you can make a difference in our club. Being an active member earns you the opportunity to propose and lead your own project next semester.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />

          <div className={splitClasses}>

            <div className="split-item">
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/club-organization.png')}
                  alt="Club Organization"
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
                  src={require('./../../assets/images/project-life-cycle.png')}
                  alt="Life Cycle of a Project"
                  width={528}
                  height={396} />
              </div>
            </div>
          </div>

          <div className={splitClasses}>
            <div className="split-item center-content">
                <Image
                  src={require('./../../assets/images/final-event.png')}
                  alt="The Big Final Event"
                  width={528}
                  height={396} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

Difference.propTypes = propTypes;
Difference.defaultProps = defaultProps;

export default Difference;