import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import SectionSubheader from './partials/SectionSubheader';
import Image from '../elements/Image';

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

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />

          <SectionSubheader data={{title: 'Faculty'}} className="center-content" />

          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/people/cropped/spana.png')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Eric Spana
                    </h4>
                  <p className="m-0 text-sm">
                    Faculty Lead
                    </p>
                </div>
              </div>
            </div>
          </div>

          <SectionSubheader data={{title: 'Board'}} className="center-content" />

          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/people/cropped/jaden.png')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Yuxi (Jaden) Long
                    </h4>
                  <p className="m-0 text-sm">
                    President
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/people/cropped/holly.png')}
                      alt=""
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Holly Zhuang
                    </h4>
                  <p className="m-0 text-sm">
                    Co-President, Project 3 Lead
                    </p>
                </div>
              </div>
            </div>

          </div>


          <SectionSubheader data={{title: 'Project Leads and Members'}} className="center-content" />

          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/people/cropped/jose.png')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Jose Chavez
                    </h4>
                  <p className="m-0 text-sm">
                    Project 1 Lead
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/people/cropped/daniel.png')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    {/* TODO */}
                    Daniel Lee
                    </h4>
                  <p className="m-0 text-sm">
                    Project 1 Lead
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/people/cropped/james.png')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    James Yang
                    </h4>
                  <p className="m-0 text-sm">
                    Project 2 Lead
                    </p>
                </div>
              </div>
            </div>


          </div>


          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/people/cropped/jeffery.png')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    {/* TODO */}
                    Jeffery Tan
                    </h4>
                  <p className="m-0 text-sm">
                    Publicity Officer, Project 2 Member
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/people/cropped/william.png')}
                      alt="William Yan"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    {/* TODO */}
                    William Yan
                    </h4>
                  <p className="m-0 text-sm">
                    Project 2 Lead
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/people/cropped/annie.png')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    {/* TODO */}
                    Annie Qin
                    </h4>
                  <p className="m-0 text-sm">
                    Project 3 Lead
                    </p>
                </div>
              </div>
            </div>

          </div>


          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/people/cropped/sid.png')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Sid Ghanta
                    </h4>
                  <p className="m-0 text-sm">
                    Project 2 Member
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/people/cropped/matthew.png')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Matthew Ahlers
                    </h4>
                  <p className="m-0 text-sm">
                    Project 3 Member
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/people/cropped/mike.png')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Mike Bennett
                    </h4>
                  <p className="m-0 text-sm">
                    Project 2 Member
                    </p>
                </div>
              </div>
            </div>

          </div>

          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/people/cropped/abby.png')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Abby Zaroff
                    </h4>
                  <p className="m-0 text-sm">
                    Project 2 Member
                    </p>
                </div>
              </div>
            </div>

          </div>

          <SectionSubheader data={{title: 'Special Thanks'}} className="center-content" />

          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/people/cropped/longenecker.png')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Andrew Longenecker
                    </h4>
                  <p className="m-0 text-sm">
                    SVP of Business Development at Probably Genetic
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/people/cropped/leo.png')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Tian-Lai (Leo) Zang
                    </h4>
                  <p className="m-0 text-sm">
                    DKU Ambassador
                    </p>
                </div>
              </div>
            </div>

          </div>

          {/* <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Kishan Patel
                    </h4>
                  <p className="m-0 text-sm">
                    Project 4 Lead
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Miran Bhima
                    </h4>
                  <p className="m-0 text-sm">
                    Project 5 Lead
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/people/cropped/aadesh.png')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Aadesh Anchaliya
                    </h4>
                  <p className="m-0 text-sm">
                    Project 5 Lead
                    </p>
                </div>
              </div>
            </div>
          </div> */}

        </div>

      </div>
    </section>
  );
}

PeopleTiles.propTypes = propTypes;
PeopleTiles.defaultProps = defaultProps;

export default PeopleTiles;