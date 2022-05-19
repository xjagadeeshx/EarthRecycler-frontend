/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
  contactus: {
    id: `${scope}.contactus`,
    defaultMessage: 'Contact us',
  },
  aboutus: {
    id: `${scope}.aboutus`,
    defaultMessage: 'About us',
  },
});
