import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import FooterNav from './partials/FooterNav';
import FooterSocial from './partials/FooterSocial';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    <footer
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}>
          <div className="footer-top space-between text-xxs">
            <Logo />
            {/* <FooterSocial /> */}
          </div>
          <div className="footer-bottom space-between text-xxs text-color-low invert-order-desktop">
            {/* <FooterNav /> */}
            {/* <div className="footer-copyright">Made by Jaden Long. All right reserved</div> */}
            <div className="footer-copyright">
              Made by Jaden Long using a template from Cruip.
              <p> See source code on <a href='https://github.com/longyuxi/int-duke-website'>GitHub</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;