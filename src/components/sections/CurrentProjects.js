import React, { useState } from 'react';
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
  const [showMore1, setShowMore1] = useState(false);
  const [showLess1, setShowLess1] = useState(false);

  const handleSeeMore = (projectNumber) => {
    switch (projectNumber) {
      case 1:
        setShowMore1(!showMore1);
        setShowLess1(false); 
        break;
    }
  };

  const handleShowLess = (projectNumber) => {
    switch (projectNumber) {
      case 1:
        setShowMore1(false);
        setShowLess1(true);
        break;
    }
  };

  const resetState = (projectNumber) => {
    switch (projectNumber) {
      case 1:
        setShowMore1(false);
        setShowLess1(false);
        break;
    }
  };

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
                <p className={`text-sm mb-0 text-color-high ${showMore1 ? '' : 'overflow-hidden'}`}>
                    Our biweekly workshop aims to teach students computational tools relevant to medicine, biology, and biochemistry. Students will learn about Python and R language, bioinformatics data-processing, and genomic analysis. No previous coding experience is needed.
                  </p>
                  {(!showMore1 && (
                    <div style={{ marginTop: '10px' }}>
                      <button className="see-more-btn" onClick={() => handleSeeMore(1)}>
                        Show More
                      </button>
                    </div>
                  )) || (
                    <>
                      <br />
                      <span className="text-sm mb-0 text-color-high">
                      This workshop will place emphasis on providing the fundamental knowledge that empowers students to self-learn future tools (i.e. “teaching a man to fish”), and provide practice on some of the most important tools in computational biology. In the last few weeks of this course, 
                      we will peek into some of the newest computational methods. Every week’s tutorial will be introduced with the fundamentals of the topic, why it is important, and why we solve it the way we do, so that the student will not blindly follow but use the tutorial as a starting point. 
                      At the end of the course, the student should be able to learn to use any software package presented in publications and replicate computational experiments on relevant datasets.<br></br><br></br>
                      Every workshop will be accompanied by a PDF document for later reference.
                      </span>
                      <div style={{ marginTop: '10px' }}>
                        {showLess1 ? (
                          <button className="show-less-btn" onClick={() => resetState(1)}>
                            Show Less
                          </button>
                        ) : (
                          <button className="show-less-btn" onClick={() => handleShowLess(1)}>
                            Show Less
                          </button>
                        )}
                      </div>
                    </>
                  )}
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Project 1</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Bioinformatics Workshop</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0 text-color-high">
                    Our Biotech Consulting team provides third-party advising to clients in the healthcare sector. We research, analyze and interpret data to make healthcare more accessible, efficient, and affordable. <br></br><br></br>
                    Currently, we are in partnership with <a href="https://www.probablygenetic.com" target="_blank" rel="noopener noreferrer" style={{ color: 'lightblue' }}> Probably Genetic</a>, a Germany-based biotechnology startup focused on genetic testing for rare disease. Our members provide consulting for them to identify biotechnologies of interest.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Project 2</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Biotech Consulting</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0 text-color-high">
                    {/* Currently, we are in partnership with <u><a href='https://www.probablygenetic.com'>Probably Genetic</a></u>, a Germany-based biotechnology startup focused on genetic testing for rare disease. Our members provide consulting for them to identify biotechnologies of interest. */}
                    Our newsletter team writes scientific articles about the latest biotechnology development, research, and events. This provides great opportunities for students interested in scientific writing.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Project 3</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Newsletter</a>
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