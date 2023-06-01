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
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                An <span className="text-color-primary">interactive introduction</span> to the field of
                </p>
            </div>
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                Persistent Homology
            </h1>
            <div className="container-xs">
              <p>
                A method involving <span className='text-color-primary'>algebraic topology</span> that <em>"beat the pants off"</em> other methods in <a href="https://link.springer.com/article/10.1007/s10822-018-0180-4"><span className='text-color-primary'>D3R grand challenge 3</span></a> on protein-ligand binding affinity prediction.
              </p>
            </div>
            <Image
                  src={require('./../../assets/images/PH/41598_2020_66710_Fig1_HTML.png')}
                  alt="Image source: Anand, D.V., Meng, Z., Xia, K. et al. Weighted persistent homology for osmolyte molecular aggregation and hydrogen-bonding network analysis. Sci Rep 10, 9685 (2020). https://doi.org/10.1038/s41598-020-66710-6"
                  />

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
      <Simplex />
    </>
  )

}

PHHero.propTypes = propTypes;
PHHero.defaultProps = defaultProps;

export default PHExplanation;