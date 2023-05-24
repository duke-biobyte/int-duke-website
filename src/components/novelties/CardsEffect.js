/* Adapted from https://codepen.io/Hyperplexed/pen/zYWdYoo */

import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CardsEffect.css'

const propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string
}

const defaultProps = {
  src: undefined,
  width: undefined,
  height: undefined,
  alt: undefined
}

const centerStyle = {textAlign:"center", width:'100%'};

const CardsEffect = ({
  className,
  src,
  width,
  height,
  alt,
  ...props
}) => {

  return (
    <div>
    <div class="card-body card-swiper">
      <div class="card-groups">
        <div class="card-group" data-index="0" data-status="active">
          <div class="little-card card">
          </div>

          <div class="big-card card card-text">
            <div style={centerStyle}>
              Science + Research
            </div>
          </div>

          <div class="little-card card">
          </div>

          <div class="big-card card card-text">
            <div style={centerStyle}>
              Biotech + Entrepreneurship
            </div>
          </div>

          <div class="little-card card">
          </div>

          <div class="big-card card card-text">
            <div style={centerStyle}>
              Computational Biology
            </div>
          </div>

          <div class="little-card card">
          </div>

          <div class="big-card card card-text">
            <div style={centerStyle}>
              Healthcare + Public Policy
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

CardsEffect.propTypes = propTypes;
CardsEffect.defaultProps = defaultProps;

export default CardsEffect;