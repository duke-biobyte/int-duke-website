
import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import SectionSubheader from '../partials/SectionSubheader';
import Image from '../../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const HeadshotTiles = ({
    tilesClasses,
    people,
    ...props
}) => {

  let row = [];

  for (var i = 0; i < people.length; i++) {
    var photo = people[i].photo;
    row.push(
      <div className="tiles-item reveal-from-bottom">
        <div className="tiles-item-inner">
          <div className="features-tiles-item-header">
            <div className="features-tiles-item-image mb-16">
              <Image
                src={people[i].photo}
                alt="Features tile icon 01"
                width={128}
                height={128} />
            </div>
          </div>
          <div className="features-tiles-item-content">
            <h4 className="mt-0 mb-8">
              {people[i].name}
              </h4>
            <p className="m-0 text-sm">
              {people[i].title}
              </p>
          </div>
        </div>
      </div>
    )
  }

  return (
      <div className={tilesClasses}>
        {row}
      </div>
  );
}

HeadshotTiles.propTypes = propTypes;
HeadshotTiles.defaultProps = defaultProps;

export default HeadshotTiles;