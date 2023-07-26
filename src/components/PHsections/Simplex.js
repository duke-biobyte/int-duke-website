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
                <p>A <b>simplex</b> is a simple polytope of any dimension. In lower dimensions:</p>
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
                  <div>
                    <Image src={require('./../../assets/images/PH/simplicial_complex_example.png')} alt="Example of a simplicial complex"  />
                  </div>
              </div>
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h2 className="mt-0 mb-12">
                  Simplicial Complex
                  </h2>
                <MathJax>
                  <p>A <b>simplicial complex</b> is a collection of <b>simplices</b> that satisfies the following conditions:</p>
                  <ul>
                    <li>Any face of a simplex in the complex is also in the complex</li>
                    <li>The intersection of any two simplices in the complex is a face of both</li>
                  </ul>
                  <p>For the sake of this introduction, just consider a simplicial complex to be the "gluing together" of a few simplices.</p>
                  <i>We will construct simplicial complexes in a fixed way, so you don't need to remember these properties of simplicial complex.</i>
                </MathJax>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h2 className="mt-0 mb-12 pb-12">
                  Vietoris-Rips Complex
                </h2>
                <MathJax>
                  The <b>Vietoris-Rips complex</b> is a <b>simplicial complex</b> constructed from a set of points in a metric space, such as the usual 3D Euclidean space. The complex is constructed by connecting points that are within a <b>threshold parameter</b> of distance within each other.
                  </MathJax>
              </div>
              <div>
                <Image
                  src={require('./../../assets/images/PH/rips_example.gif')}
                  alt="Source: https://comptag.github.io/rpackage_tutorials/2019/07/tda-rips-tutorial.html"
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
                  <div>
                    <Image src={require('./../../assets/images/PH/ripsfilt.png')} alt="Filtration with the Vietoris-Rips complex"  />
                  </div>
              </div>
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h2 className="mt-0 mb-12">
                  Filtration
                  </h2>
                <MathJax>
                  <p>A <b>filtration</b> is a sequence of simplicial complexes, where each complex is a subset of the next. In the context of <b>Vietoris-Rips complexes</b>, a <b>filtration</b> is created as the <b>threshold parameter</b> increases from 0 to \(\infty\).</p>
                </MathJax>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h2 className="mt-0 mb-12 pb-12">
                  Betti Numbers
                </h2>
                <MathJax>
                  <p>The <b>Betti numbers</b> of a simplicial complex are a sequence of integers that describe the topology of the complex. Specifically, the <em>n-th Betti number</em> specifies the <em>number of n-dimensional holes</em>. The <b>0th Betti number</b> is the number of connected components, the <b>1st Betti number</b> is the number of holes, and the <b>2nd Betti number</b> is the number of voids.</p>
                </MathJax>
              </div>
              <div>
                <Image
                  // src={require('./../../assets/images/PH/betti-number-example.png')}
                  // alt="https://www.researchgate.net/publication/354944272_Persistent_homology_and_the_shape_of_evolutionary_games"
                  src={require('./../../assets/images/PH/betti-number-simplices.png')}
                  alt="Adapted from https://www.nature.com/articles/s41598-020-66710-6"
                  width={200}
                  />
              </div>
            </div>

            <div className="split-item">
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                  <div>
                    <Image src={require('./../../assets/images/PH/persistence.png')} alt="Filtration with the Vietoris-Rips complex. Source: https://github.com/GUDHI/TDA-tutorial/blob/master/Tuto-GUDHI-persistence-diagrams.ipynb"  />
                  </div>
              </div>
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <h2 className="mt-0 mb-12">
                  Persistence Barcode
                  </h2>
                <MathJax>
                  <p>A <b>persistence barcode</b> is a plot of the <b>Betti numbers</b> of a <b>simplicial complex</b> over the <b>filtration</b>. The x-axis is the <b>threshold parameter</b> and the color is the <b>Betti number</b>. The number of lines of a certain color at a <b>threshold parameter</b> indicates the number of <b>holes</b> of that dimension at that <b>threshold parameter</b>.</p>

                  <b><span className="text-color-primary"><p>As simple as these barcodes look, they contain suitable information from biomolecules such that an algorithm by <i>Nguyen et al. (2018)</i> were able to predict binding affinity just on these barcodes.</p></span></b>
                </MathJax>
              </div>
            </div>

            <div className='container-sm'>
              <h3 className='pt-32'>References and credits</h3>
              <p>Hover over each image to see its source. The paper referenced in this demonstration is <i>Nguyen et al. (2018), doi: 10.1007/s10822-018-0146-6</i></p>
            </div>

            <div className='container-sm'>
              <h3 className='pt-32'>Scroll down to see an interactive demonstration of persistent homology, in light of biomolecules.</h3>
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