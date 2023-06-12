import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Simplex from './Simplex';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const PHHero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {


  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <>
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">

        <div className={innerClasses}>

          <div className="hero-content">
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="100">
                An <span className="text-color-primary">interactive introduction</span> to
                </p>
            </div>
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                Persistent Homology
            </h1>
            <div className="container-xs reveal-from-bottom" data-reveal-delay="400">
              <p>
                A novel <span className='text-color-primary'>algebraic topology</span> approach that <em>obliterated</em> other methods in <a href="https://link.springer.com/article/10.1007/s10822-018-0180-4"><span className='text-color-primary'>D3R grand challenge 3</span></a> on protein-ligand binding affinity prediction.
              </p>

            </div>
            <div className='container-sm reveal-from-bottom' data-reveal-delay="400">
              <div className='p-16 container-xs'>
                <p>
                <Image src={require('../../assets/images/PH/gww-performance.png')} alt="Source: Nguyen, D.D., Cang, Z., Wu, K. et al. Mathematical deep learning for pose and binding affinity prediction and ranking in D3R Grand Challenges. J Comput Aided Mol Des 33, 71–82 (2019). https://doi.org/10.1007/s10822-018-0146-6" />
                </p>
                <p className='text-xs'>Performance comparison of different submissions on affinity ranking of 19 ligands having crystallographic poses in stage 2 of subchallenge 1 of D3R GC3. The <b>persistent homology</b> algorithm by <em>Nguyen et al. (2018)</em> is shown in <span style={{color: "red"}}>red</span>.</p>
              </div>
              {/* <Image src={require('./../../assets/images/PH/41598_2020_66710_Fig1_HTML.png')} alt="Image source: Anand, D.V., Meng, Z., Xia, K. et al. Weighted persistent homology for osmolyte molecular aggregation and hydrogen-bonding network analysis. Sci Rep 10, 9685 (2020). https://doi.org/10.1038/s41598-020-66710-6" /> */}
            </div>
          </div>

        </div>
      </div>
    </section>

    </>
  );
}

const PHExplanation = () => {

  return (
    <>
      <PHHero className="illustration-section-01" />
      <div className="container-xs reveal-from-bottom center-content pb-32" data-reveal-delay="600">
        <ButtonGroup>
          <Button tag="a" color="primary" wideMobile href="https://github.com/longyuxi/int-duke-website/blob/master/src/views/PHCanvas.js">
            Source Code
            </Button>
          <Button tag="a" color="primary" wideMobile href="https://medium.com/@longyuxi/persistent-homology-an-interactive-demonstration-in-biochemistry-context-82bc189cf059">
            Documentation
            </Button>
        </ButtonGroup>
      </div>
      <Simplex />
    </>
  )

}

PHHero.propTypes = propTypes;
PHHero.defaultProps = defaultProps;

export default PHExplanation;