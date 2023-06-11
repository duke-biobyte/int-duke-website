import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import CardsEffect from '../novelties/CardsEffect';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const PHSectionIntro = ({
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
    title: 'Demonstrations',
    paragraph: ''
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
              <div className='pb-16'>
                The world's first <span className='text-color-primary'>interactive</span> introduction to <span className='text-color-primary'>persistent homology</span> in light of biomolecules. See <a href='https://medium.com/@longyuxi/persistent-homology-an-interactive-demonstration-in-biochemistry-context-82bc189cf059'><u><span className='text-color-primary'>this medium post</span></u></a> for my motivation behind this animation.
              </div>

            <Link to="/ph">
              <Image src={require('./../../assets/images/PH/expanding-fixed-width-screenshot.png')} alt="Features split 01" width={896} height={504} />
            </Link>
            </center>

          </div>

        </div>
      </div>
    </section>
  );
}

PHSectionIntro.propTypes = propTypes;
PHSectionIntro.defaultProps = defaultProps;

export default PHSectionIntro;