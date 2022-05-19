/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  authorMessage: {
    id: `${scope}.author.message`,
    defaultMessage: `
    ©copyright {year}, EarthRecycler, Earney. All Rights Reserved.
    `,
  },
});
