import React, { Component } from 'react';
import { Container, Segment, Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FaCloudMoon ,FaSun } from 'react-icons/fa';
import "./darkreader.less"

import {
  Anontools,
  LanguageSelector,
  Logo,
  Navigation,
  SearchWidget,
} from '@plone/volto/components';

const darkReaderOptions = {
  brightness: 100,
  contrast: 96,
  sepia: 0,
};

class Header extends Component {
  static propTypes = {
    token: PropTypes.string,
    pathname: PropTypes.string.isRequired,
  };

  static defaultProps = {
    token: null,
  };

  constructor(props) {
    super(props);
    this.state = { isDarkModeEnabled: false };
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  async toggleDarkMode() {
    if (typeof window != 'undefined') {
      const { isEnabled, enable, disable, setFetchMethod } = await import(
        'darkreader'
      );
      setFetchMethod(window.fetch);
      const isOn = isEnabled();
      isOn ? disable() : enable(darkReaderOptions);
      this.setState(prevState => ({
        isDarkModeEnabled: !prevState.isDarkModeEnabled,
      }));
    }
  }

  render() {
    const { isDarkModeEnabled } = this.state;
    return (
      <Segment basic className="header-wrapper" role="banner">
        <Container>
          <div className="header">
            <div className="logo-nav-wrapper">
              <div className="logo">
                <Logo />
              </div>
              <Navigation pathname={this.props.pathname} />
            </div>
            <div className="tools-search-wrapper">
              <LanguageSelector />
              <button className='darkmodebutton' onClick={this.toggleDarkMode}>
              {isDarkModeEnabled ? <FaSun/ >  :<FaCloudMoon/>}
              </button>
              {!this.props.token && (
                <div className="tools">
                  <Anontools />
                </div>
              )}
              <div className="search">
                <SearchWidget />
              </div>

            </div>
          </div>
        </Container>
      </Segment>
    );
  }
}

export default connect((state) => ({
  token: state.userSession.token,
}))(Header);
