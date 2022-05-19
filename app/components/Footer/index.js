import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Typography } from 'antd';

import A from 'components/A';
import messages from './messages';

function Footer() {
  return (
    <footer
      style={{
        background: 'lightgreen',
        height: '2rem',
        position: 'absolute',
        width: '100%',
        bottom: 0,
      }}
    >
      <Typography style={{ textAlign: 'center' }}>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            year: <A href="/">2022</A>,
          }}
        />
      </Typography>
    </footer>
  );
}

export default Footer;
