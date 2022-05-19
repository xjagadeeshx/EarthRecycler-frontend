import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Typography } from 'antd';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import { FlexRowContainer } from '../FlexContainer';

const { Paragraph } = Typography;

const Header = () => (
  <Paragraph style={{ borderBottom: '1px solid lightgreen' }}>
    <FlexRowContainer>
      <FlexRowContainer
        style={{
          margin: '0.5rem',
          border: '1px solid lightgreen',
          borderRadius: 4,
          background: 'lightgreen',
        }}
      >
        <div style={{ width: '10rem', height: '10rem' }}>
          <A href="/">
            <Img src={Banner} alt="EarthRecycler" />
          </A>
        </div>
        <Typography.Title level={1} style={{ margin: '1rem', color: 'white' }}>
          EarthRecycler
        </Typography.Title>
      </FlexRowContainer>
      <NavBar>
        <HeaderLink to="/login">
          <FormattedMessage {...messages.login} />
        </HeaderLink>
        <HeaderLink to="/contactus">
          <FormattedMessage {...messages.contactus} />
        </HeaderLink>
        <HeaderLink to="/aboutus">
          <FormattedMessage {...messages.aboutus} />
        </HeaderLink>
      </NavBar>
    </FlexRowContainer>
  </Paragraph>
);

export default Header;
