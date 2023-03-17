import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const CurrentProjects = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Current Projects',
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
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0 text-color-high">
                    Our mission is to support school work at an individual level, since a solid knowledge base is key to being successful in the biotech sector. <br></br><br></br>
                    Currently, we are delivering mentorship and guidance for public high school students around the triangle area and give them the best advice on how to navigate high school and explore potential careers in pre-med and biology.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Project Team 1</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Academic Guidance</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0 text-color-high">
                    We ask questions such as: What are some budding technologies that could be transforming in a decade? What are some innovative use cases of existing technologies? <br></br><br></br>
                    We host regular speaker events and biotechnology podcasts. In the past, we have invited speakers from <u><a href='https://www.tavrostx.com'>Tavros Therapeutics</a></u>, <u><a href='https://www.fuqua.duke.edu'>Duke Fuqua School of Business</a></u>, <u><a href='https://www.dent.umich.edu'>University of Michigan School of Dentistry</a></u>, and <u><a href='https://www.cajalneuro.com'>Cajal Neuroscience</a></u>. More speakers and podcast events will come soon.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Project Team 2</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Biotech Trends</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0 text-color-high">
                    Currently, we are in partnership with <u><a href='https://www.probablygenetic.com'>Probably Genetic</a></u>, a Germany-based biotechnology startup focused on genetic testing for rare disease. Our members provide consulting for them to identify biotechnologies of interest.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Project Team 3</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Entrepreneurship and Commercialization</a>
                  </span>
                </div>
              </div>
            </div>


          </div>

          {/* <div className={tilesClasses}>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0 text-color-high">
                    We host regular speaker and social events. <br></br><br></br>
                    We sample the best of the biotechnology realm by inviting speakers in this field to share their wisdom.
                    We also host activities to mingle the brilliant undergraduate minds. Finally, we will organize our club's big final event, which we anticipate to be the biggest biotechnology event on campus.
                    </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Project Team 3</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Speaker Events</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0 text-color-high">
                    Our goal is to explore the intersection between healthcare policy and economics around the world. Currently, with over 20% of the U.S GDP being spent on healthcare, there is massive wastage in the U.S healthcare system. We aim to inform how to improve the current healthcare systems around the world.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Project Team 5</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Healthcare Policy Exploration</a>
                  </span>
                </div>
              </div>
            </div>

          </div> */}
        </div>
      </div>
    </section>
  );
}

CurrentProjects.propTypes = propTypes;
CurrentProjects.defaultProps = defaultProps;

export default CurrentProjects;