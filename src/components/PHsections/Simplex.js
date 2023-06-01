import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import CardsEffect from '../novelties/CardsEffect';
import AmazingShadow from '../novelties/three/AmazingShadow';
import { MathJax } from 'better-react-mathjax';
import simplicesImage from '../../assets/images/PH/simplices.png'
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Simplex = ({
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

  return (
    <section
      {...props}
      className={outerClasses}
    >

      <div className="container">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h2 className="mt-0 mb-12 pb-12">
                  Simplex
                </h2>
                <MathJax>
                <p>A simplex is a simple polytope of any dimension. In lower dimensions:</p>
                <ul>
                  <li>0-simplex is a point</li>
                  <li>1-simplex is a line segment</li>
                  <li>2-simplex is a triangle</li>
                  <li>3-simplex is a tetrahedron</li>
                </ul>
                <p>In persistent homology for data analysis, we usually only look at up to 3-simplex.</p>
                </MathJax>
              </div>
              <div>
                <Image
                  src={require('./../../assets/images/PH/simplices.png')}
                  alt="Features split 01"
                  width={528}
                  height={396}/>
              </div>
            </div>

            <div className="split-item">

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                  <div style={{aspectRatio: "1.5"}}>

                  </div>

              </div>

              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h2 className="mt-0 mb-12">
                  Simplicial Complex
                  </h2>
                <MathJax>
                  <p>A simplicial complex is a collection of simplices that satisfies the following conditions:</p>
                  <ul>
                    <li>Any face of a simplex in the complex is also in the complex</li>
                    <li>The intersection of any two simplices in the complex is a face of both</li>
                  </ul>
                </MathJax>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h2 className="mt-0 mb-12 pb-12">
                  Vietoris-Rips Persistence
                </h2>
                <MathJax>
                  The Vietoris-Rips complex is a simplicial complex constructed from a set of points in a metric space. The complex is constructed by connecting points that are within a certain distance of each other. The distance is called the threshold parameter.
                </MathJax>
              </div>
              <div>
                <Image
                  src={require('./../../assets/images/PH/rips_example.gif')}
                  alt="Features split 01"
                  width={528}
                  height={396}/>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}

Simplex.propTypes = propTypes;
Simplex.defaultProps = defaultProps;

export default Simplex;